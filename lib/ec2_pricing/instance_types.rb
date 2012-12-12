# encoding: utf-8

require 'nokogiri'


module Ec2Pricing
  class InstanceTypes
    include Caching

    INSTANCE_TYPES_DATA_URL = 'http://aws.amazon.com/ec2/instance-types/'

    def initialize(cache=true)
      @cache = cache
    end

    def types
      load!
      @instance_types
    end

    def load!
      return if defined? @instance_type

      data = cached('instance_types', :cache? => @cache) do
        open(INSTANCE_TYPES_DATA_URL).read
      end

      document = Nokogiri::HTML(data)
      instance_properties = []
      paragraphs = document.xpath('//div[@class = "yui-b"]/p')
      until paragraphs.empty?
        paragraph = paragraphs.shift
        text = paragraph.text
        if text.include?('Instance') && (text.end_with?('Instance') || text.start_with?('Small Instance') || text.start_with?('M1 Small Instance'))
          text.sub!(/(?<=Instance).+$/, '')
          instance_properties << {:name => text}.merge(parse_description(paragraphs.shift.text.split("\n")))
        end
      end
      @instance_types = instance_properties.each_with_object({}) do |instance, acc|
        acc[instance[:type]] = instance
      end
    end

    INSTANCE_TYPES_CACHE_PATH = File.join(CACHE_DIR, 'instance-types.html')

    def core_multiplier(str)
      case str
      when /quad-core/ then 4
      when /eight-core/ then 8
      else 1
      end
    end

    def parse_description(description_lines)
      properties = {:notes => []}
      description_lines.each do |line|
        case line
        when /([\d.]+ [MG]i?B) (?:of )?memory/
          properties[:ram] = $1
        when /([\d.]+) EC2 Compute Units? \((\d+) virtual core/
          properties[:ecus] = $1.to_f
          properties[:cores] = $2.to_i
        when /([\d.]+) EC2 Compute Units? \((\d)([^\)]+)\)/
          properties[:ecus] = $1.to_f
          properties[:cores] = $2.to_i * core_multiplier($3)
          properties[:notes] << "#{$2}#{$3}"
        when /Up to \d+ EC2 Compute Units/
          properties[:ecus] = 0
          properties[:cores] = 1
          properties[:notes] << line
        when /(\d+) SSD-based volumes each with (\d+) GB of instance storage/
          properties[:disk] = "#{$1.to_i * $2.to_i} GB"
          properties[:notes] << "#{$1} SSD-based volumes each with #{$2} GB"
          properties[:ssd] = true
        when /([\d.]+ GB) (?:of )?instance storage/
          properties[:disk] = $1
        when /32-bit or 64-bit platform/
          properties[:architectures] = [32, 64]
        when /64-bit platform/
          properties[:architectures] = [64]
        when /I\/O Performance: ([\w\s]+) \(([^\)]+)\)/
          properties[:io] = $1.downcase.strip
          properties[:notes] << $2
        when /I\/O Performance: ([\w\s]+)/
          properties[:io] = $1.downcase.strip
        when /API name: (\S+)/
          properties[:type] = $1
        when /EBS storage only/
          properties[:notes] << $&
          properties[:ebs_only] = true
        when /2 x NVIDIA Tesla/
          properties[:notes] << $&
        when /EBS-Optimized Available: (.+)\**\s*$/
          properties[:ebs_optimized] = $1
        else
          $stderr.puts("Unmatched description line: #{line}")
        end
      end
      properties.delete(:notes) if properties[:notes].empty?
      properties
    end
  end
end