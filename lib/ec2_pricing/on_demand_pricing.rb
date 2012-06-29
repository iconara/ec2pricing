# encoding: utf-8

require 'json'


module Ec2Pricing
  class OnDemandPricing
    include Caching

    PRICING_DATA_URL = 'http://aws.amazon.com/ec2/pricing/pricing-on-demand-instances.json'

    def initialize(cache=true)
      @cache = cache
    end

    def by_region
      load!
      regions.each_with_object({}) do |region, region_output|
        name = REGION_NAMES[region]
        instances = types.map do |type|
          props = @instance_types.find { |_, ip| ip[:type] == type }
          if props
            props = props.last.dup
            props[:pricing] = Hash[oss.map { |os| [os, find_price(region, type, os)] }]
            props
          else
            $stderr.puts("Properties for #{region}/#{type} not found")
          end
        end
        region_output[region] = {
          :name => name,
          :api_name => region,
          :instance_types => instances
        }
      end
    end

    def find_price(region, type, os)
      d = @pricing.find { |pr| pr[:region] == region && pr[:type] == type && pr[:os] == os }
      d[:price] if d
    end

    def regions
      @regions ||= @pricing.map { |p| p[:region] }.uniq
    end

    def types
      @types ||= @pricing.map { |p| p[:type] }.uniq
    end

    def oss
      @oss ||= @pricing.map { |p| p[:os] }.uniq
    end

    def load!
      return if defined? @pricing
      @instance_types = InstanceTypes.new.types
      data = cached('on_demand_pricing', :cache? => @cache) do
        open(PRICING_DATA_URL).read
      end
      raw_pricing_data = JSON.parse(data)
      @pricing = []
      raw_pricing_data['config']['regions'].each do |region_pricing|
        region = region_pricing['region']
        region_pricing['instanceTypes'].each do |instance_type_pricing|
          type = instance_type_pricing['type']
          instance_type_pricing['sizes'].each do |size_pricing|
            size = size_pricing['size']
            size_pricing['valueColumns'].each do |value_column|
              value = value_column['name']
              price = value_column['prices']['USD']
              api_type = TYPE_MAP[type]
              api_size = SIZE_MAP[size]
              api_name = "#{api_type}.#{api_size}"
              api_name = 'cc2.8xlarge' if api_name == 'cc1.8xlarge'
              unless price.start_with?('N/A')
                price = sprintf('%.3f', price.to_f)
                @pricing << {:region => REGION_MAP[region], :type => api_name, :os => value, :price => price}
              end
            end
          end
        end
      end
    end

    TYPE_MAP = {
      'stdODI'          => 'm1',
      'uODI'            => 't1',
      'hiMemODI'        => 'm2',
      'hiCPUODI'        => 'c1',
      'clusterComputeI' => 'cc1',
      'clusterGPUI'     => 'cg1'
    }

    SIZE_MAP = {
      'sm'        => 'small',
      'med'       => 'medium',
      'lg'        => 'large',
      'xl'        => 'xlarge',
      'u'         => 'micro',
      'xxl'       => '2xlarge',
      'xxxxl'     => '4xlarge',
      'xxxxxxxxl' => '8xlarge'
    }

    REGION_MAP = {
      'us-east'    => 'us-east-1',
      'us-west-2'  => 'us-west-2',
      'us-west'    => 'us-west-1',
      'eu-ireland' => 'eu-west-1',
      'apac-sin'   => 'ap-southeast-1',
      'apac-tokyo' => 'ap-northeast-1',
      'sa-east-1'  => 'sa-east-1'
    }

    REGION_NAMES = {
      'us-east-1'      => 'US East (Virginia)',
      'us-west-2'      => 'US West (Oregon)',
      'us-west-1'      => 'US West (Northern California)',
      'eu-west-1'      => 'EU (Ireland)',
      'ap-southeast-1' => 'Asia Pacific (Singapore)',
      'ap-northeast-1' => 'Asia Pacific (Tokyo)',
      'sa-east-1'      => 'South America (Sao Paulo)'
    }
  end
end