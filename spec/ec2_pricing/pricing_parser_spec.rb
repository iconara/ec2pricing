# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe PricingParser do
    let :parser do
      described_class.new
    end

    let :pricing_data do
      MultiJson.load(Pathname.new(File.expand_path('../../resources/pricing-on-demand-instances.json', __FILE__)))
    end

    describe '#parse' do
      let :pricing do
        parser.parse(pricing_data)
      end

      it 'finds all regions and maps their pricing data names to the real API names' do
        region_names = pricing.map { |region| region[:region] }
        expect(region_names).to eql(%w[us-east-1 us-west-2 us-west-1 eu-west-1 ap-southeast-1 ap-northeast-1 ap-southeast-2 sa-east-1])
      end

      it 'finds the instance types for each region' do
        region = pricing.find { |region| region[:region] == 'eu-west-1' }
        expect(region[:instance_types]).to have(13).items
      end

      it 'maps the pricing data names to the real API names' do
        region = pricing.find { |region| region[:region] == 'us-east-1' }
        instance_type = region[:instance_types].find { |instance_type| instance_type[:api_name] == 'm3.xlarge' }
        expect(instance_type).not_to be_nil
      end

      it 'handles the cc1/cc2 special case' do
        region = pricing.find { |region| region[:region] == 'us-east-1' }
        cc1_4xlarge = region[:instance_types].find { |instance_type| instance_type[:api_name] == 'cc1.4xlarge' }
        cc2_8xlarge = region[:instance_types].find { |instance_type| instance_type[:api_name] == 'cc2.8xlarge' }
        expect(cc1_4xlarge).not_to be_nil
        expect(cc2_8xlarge).not_to be_nil
      end

      it 'finds the pricing for Linux and Windows' do
        region = pricing.find { |region| region[:region] == 'sa-east-1' }
        instance_type = region[:instance_types].find { |instance_type| instance_type[:api_name] == 'm2.xlarge' }
        expect(instance_type[:pricing]).to eql(:linux => 0.680, :mswin => 0.800)
      end
    end
  end
end