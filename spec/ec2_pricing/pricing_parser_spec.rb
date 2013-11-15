# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe PricingParser do
    let :parser do
      described_class.new
    end

    let :pricing_data do
      {
        :linux => MultiJson.load(File.read(File.expand_path('../../resources/linux-od.json', __FILE__))),
        :mswin => MultiJson.load(File.read(File.expand_path('../../resources/mswin-od.json', __FILE__))),
        :rhel => MultiJson.load(File.read(File.expand_path('../../resources/rhel-od.json', __FILE__))),
        :sles => MultiJson.load(File.read(File.expand_path('../../resources/sles-od.json', __FILE__))),
        :emr => MultiJson.load(File.read(File.expand_path('../../resources/pricing-emr.json', __FILE__))),
        :spot => MultiJson.load(File.read(File.expand_path('../../resources/spot.js', __FILE__)).sub(/\A\s*callback\((.+)\)\s*\Z/m, '\1').gsub(/\},\s*\]/, '}]')),
      }
    end

    describe '#parse' do
      [:linux, :mswin, :rhel, :sles, :emr, :spot].each do |source|
        source_name = {:linux => 'on demand (Linux)', :mswin => 'on demand (Windows)', :rhel => 'on demand (Red Hat)', :sles => 'on demand (SUSE)', :emr => 'EMR', :spot => 'spot'}[source]
        instance_type_count = {:linux => 23, :mswin => 23, :rhel => 23, :sles => 23, :emr => 11, :spot => 22}[source]

        context "with #{source_name} pricing data" do
          let :pricing do
            parser.parse(pricing_data[source])
          end

          it 'finds all regions and maps their pricing data names to the real API names' do
            region_names = pricing.map { |region| region[:region] }
            expect(region_names).to eql(%w[us-east-1 us-west-2 us-west-1 eu-west-1 ap-southeast-1 ap-northeast-1 ap-southeast-2 sa-east-1])
          end

          it 'finds the instance types for each region' do
            region = pricing.find { |region| region[:region] == 'eu-west-1' }
            expect(region[:instance_types]).to have(instance_type_count).items
          end

          it 'maps the pricing data names to the real API names' do
            region = pricing.find { |region| region[:region] == 'us-east-1' }
            instance_type = region[:instance_types].find { |instance_type| instance_type[:api_name] == 'm2.xlarge' }
            expect(instance_type).not_to be_nil
          end

          if source == :emr
            it 'finds the EMR pricing' do
              region = pricing.find { |region| region[:region] == 'sa-east-1' }
              instance_type = region[:instance_types].find { |instance_type| instance_type[:api_name] == 'm2.xlarge' }
              expect(instance_type[:pricing][:linux]).to be_a(Numeric)
            end
          end

          if source == :spot
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
              expect(instance_type[:pricing][:linux]).to be_a(Numeric)
              expect(instance_type[:pricing][:mswin]).to be_a(Numeric)
            end
          end

          if source != :emr && source != :spot
            it 'finds the pricing for the OS' do
              region = pricing.find { |region| region[:region] == 'sa-east-1' }
              instance_type = region[:instance_types].find { |instance_type| instance_type[:api_name] == 'm2.xlarge' }
              expect(instance_type[:pricing][source]).to be_a(Numeric)
            end
          end
        end
      end
    end
  end
end