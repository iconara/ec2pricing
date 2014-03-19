# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe PricingParser do
    let :parser do
      described_class.new
    end

    let :pricing_data do
      PRICING_TYPES.each_with_object({}) do |type, acc|
        file_name = File.join(File.expand_path('../../resources', __FILE__), File.basename(AWS_PRICING_URLS[type]))
        acc[type] = MultiJson.load(AwsDataLoader.fix_jsonp(File.read(file_name)))
      end
    end

    PRICING_TYPES = (AWS_ON_DEMAND_PRICE_KEYS + AWS_EXTRA_PRICE_KEYS).freeze

    SOURCE_NAMES = {
      :linux_od => 'on demand (Linux)',
      :mswin_od => 'on demand (Windows)',
      :rhel_od => 'on demand (Red Hat)',
      :sles_od => 'on demand (SUSE)',
      :emr => 'EMR',
      :spot => 'spot'
    }.freeze

    EXPECTED_INSTANCE_TYPE_COUNTS = {
      :linux_od => 29,
      :mswin_od => 29,
      :rhel_od => 29,
      :sles_od => 29,
      :emr => 11,
      :spot => 24,
    }.freeze

    describe '#parse' do
      PRICING_TYPES.each do |source|
        source_name = SOURCE_NAMES[source]
        instance_type_count = EXPECTED_INSTANCE_TYPE_COUNTS[source]

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
              source_key = source.to_s.sub('_od', '').to_sym
              expect(instance_type[:pricing][source_key]).to be_a(Numeric)
            end
          end
        end
      end
    end
  end
end