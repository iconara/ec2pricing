require 'json'
require 'open-uri'
require 'nokogiri'


class InstanceProperties
  def clear_cache!
    File.unlink(PRICING_CACHE_PATH) if File.exists?(PRICING_CACHE_PATH)
    File.unlink(INSTANCE_PROPERTIES_CACHE_PATH) if File.exists?(INSTANCE_PROPERTIES_CACHE_PATH)
  end

  def find_price(region, type, os='linux')
    d = pricing.find { |pr| pr[:region] == region && pr[:type] == type && pr[:os] == os }
    d[:price] if d
  end

  def by_region
    regions.each_with_object({}) do |region, region_output|
      name = REGION_NAMES[region]
      instances = types.map do |type|
        props = instance_properties.find { |ip| ip[:type] == type }
        if props
          props = props.dup
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

  def regions
    @regions ||= pricing.map { |p| p[:region] }.uniq
  end

  def types
    @types ||= pricing.map { |p| p[:type] }.uniq
  end

  def oss
    @oss ||= pricing.map { |p| p[:os] }.uniq
  end

  def raw_pricing_data
    unless File.exists?(PRICING_CACHE_PATH)
      File.open(PRICING_CACHE_PATH, 'w') { |io| io.write(open(PRICING_DATA_URL).read) }
    end
    JSON.parse(File.read(PRICING_CACHE_PATH))
  end

  def pricing
    @pricing ||= begin
      pricing = []
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
                pricing << {:region => REGION_MAP[region], :type => api_name, :os => value, :price => price}
              end
            end
          end
        end
      end
      pricing
    end
  end

  def raw_instance_properties
    unless File.exists?(INSTANCE_PROPERTIES_CACHE_PATH)
      File.open(INSTANCE_PROPERTIES_CACHE_PATH, 'w') { |io| io.write(open(INSTANCE_PROPERTIES_DATA_URL).read) }
    end
    Nokogiri::HTML(File.read(INSTANCE_PROPERTIES_CACHE_PATH))
  end

  def instance_properties
    @instance_properties ||= begin
      instance_properties = []
      paragraphs = raw_instance_properties.xpath('//div[@class = "yui-b"]/p')
      until paragraphs.empty?
        paragraph = paragraphs.shift
        text = paragraph.text
        if text.include?('Instance') && (text.end_with?('Instance') || text.end_with?('default*'))
          text.sub!(/(?<=Instance).+$/, '')
          instance_properties << {:name => text}.merge(parse_description(paragraphs.shift.text.split("\n")))
        end
      end
      instance_properties
    end
  end

  def parse_description(description_lines)
    properties = {:notes => []}
    description_lines.each do |line|
      case line
      when /([\d.]+ [MG]B) (?:of )?memory/
        properties[:ram] = $1
      when /([\d.]+) EC2 Compute Units? \((\d) virtual core/
        properties[:ecus] = $1.to_f
        properties[:cores] = $2.to_i
      when /([\d.]+) EC2 Compute Units? \((\d)([^\)]+)\)/
        properties[:ecus] = $1.to_f
        properties[:cores] = $2.to_i
        properties[:notes] << "#{$2}#{$3}"
      when /Up to \d+ EC2 Compute Units/
        properties[:ecus] = 0
        properties[:cores] = 1
        properties[:notes] << line
      when /([\d.]+ GB) (?:of )?instance storage/
        properties[:disk] = $1
      when /32-bit or 64-bit platform/
        properties[:architectures] = [32, 64]
      when /64-bit platform/
        properties[:architectures] = [64]
      when /I\/O Performance: ([\w\s]+)/
        properties[:io] = $1.downcase.strip
      when /API name: (\S+)/
        properties[:type] = $1
      when /EBS storage only/
        properties[:notes] << $&
      when /2 x NVIDIA Tesla/
        properties[:notes] << $&
      else
        $stderr.puts("Unmatched description line: #{line}")
      end
    end
    properties.delete(:notes) if properties[:notes].empty?
    properties
  end

  PRICING_DATA_URL = 'http://aws.amazon.com/ec2/pricing/pricing-on-demand-instances.json'
  PRICING_CACHE_PATH = '/tmp/pricing-on-demand-instances.json'
  INSTANCE_PROPERTIES_DATA_URL = 'http://aws.amazon.com/ec2/instance-types/'
  INSTANCE_PROPERTIES_CACHE_PATH = '/tmp/instance-types.html'

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
