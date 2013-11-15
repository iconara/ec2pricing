# encoding: utf-8

require 'multi_json'


module Ec2Pricing
  class PricingParser
    def parse(doc)
      doc['config']['regions'].map do |region_data|
        parse_region(region_data)
      end
    end

    private

    def parse_region(region_data)
      api_name = REGION_MAP[region_data['region']]
      {
        :region => api_name,
        :instance_types => region_data['instanceTypes'].flat_map { |instance_family_data| parse_instance_types(instance_family_data) }
      }
    end

    def parse_instance_types(instance_family_data)
      instance_family_data['sizes'].map do |instance_type_data|
        if instance_type_data['size'].index('.')
          api_name = instance_type_data['size']
        else
          size = SIZE_MAP[instance_type_data['size']]
          family = FAMILY_MAP[instance_family_data['type']]
          family = 'cc1' if family == 'cc2' && size == '4xlarge'
          api_name = "#{family}.#{size}"
        end
        {
          :api_name => api_name,
          :pricing => parse_pricing(instance_type_data['valueColumns'])
        }
      end
    end

    def parse_pricing(pricing_data)
      pricing = Hash[pricing_data.group_by { |d| d['name'].to_sym }.map { |k, vs| [k, vs.first['prices']['USD'].to_f] }]
      if pricing.include?(:emr)
        pricing.delete(:ec2)
        pricing[:linux] = pricing.delete(:emr)
      end
      pricing
    end

    REGION_MAP = {
      'us-east'    => 'us-east-1',
      'us-west-2'  => 'us-west-2',
      'us-west'    => 'us-west-1',
      'eu-ireland' => 'eu-west-1',
      'apac-sin'   => 'ap-southeast-1',
      'apac-tokyo' => 'ap-northeast-1',
      'apac-syd'   => 'ap-southeast-2',
      'sa-east-1'  => 'sa-east-1'
    }.freeze

    FAMILY_MAP = {
      'stdODI'          => 'm1',
      'secgenstdODI'    => 'm3',
      'uODI'            => 't1',
      'hiMemODI'        => 'm2',
      'hiCPUODI'        => 'c1',
      'clusterComputeI' => 'cc2', # except the discontinued 4xlarge which is 'cc1'
      'clusterGPUI'     => 'cg1',
      'hiIoODI'         => 'hi1',
      'hiIOODI'         => 'hi1',
      'hiStoreODI'      => 'hs1',
      'clusterHiMemODI' => 'cr1',

      'stdSpot'         => 'm1',
      'secgenstdSpot'   => 'm3',
      'uSpot'           => 't1',
      'hiMemSpot'       => 'm2',
      'hiCPUSpot'       => 'c1',
      'clusterHiMemSpot' => 'cr1'
    }.freeze

    SIZE_MAP = {
      'sm'        => 'small',
      'med'       => 'medium',
      'lg'        => 'large',
      'xl'        => 'xlarge',
      'u'         => 'micro',
      'xxl'       => '2xlarge',
      'xxxxl'     => '4xlarge',
      'xxxxxxxxl' => '8xlarge'
    }.freeze
  end
end