# encoding: utf-8

module Ec2Pricing
  class InstanceTypesParser
    def parse(doc)
      instance_types = []
      paragraphs = doc.xpath('//div[@class = "yui-b"]/p')
      until paragraphs.empty?
        instance_name_text = paragraphs.shift.xpath('strong').text
        if instance_name?(instance_name_text) && !paragraphs.empty?
          instance_types << parse_instance!(instance_name_text, paragraphs)
        end
      end
      paragraphs = doc.xpath('//a[@name="highstorage-instances"]/following-sibling::p')
      paragraphs.shift
      instance_types << parse_instance!('High Storage Instance', paragraphs)
      instance_types
    end

    private

    def instance_name?(text)
      text.include?('Instance') && (text.end_with?('Instance') || text.include?('Small Instance'))
    end

    def parse_instance!(instance_name, paragraphs)
      instance_description = paragraphs.shift.text
      while paragraphs.any? && paragraphs.first.text.start_with?('*')
        instance_description << "\n" << paragraphs.shift.text
      end
      instance_type = {:name => instance_name}
      instance_type.merge!(parse_instance_properties(instance_description))
      instance_type
    end

    def parse_instance_properties(description)
      properties = {:notes => []}
      description.split("\n").each do |str|
        case str
        when /API name: ([\w\d.]+)/
          properties[:api_name] = $1
        when /([\d.]+) EC2 Compute Units? \((\d+) virtual core/
          properties[:ecus] = $1.include?('.') ? $1.to_f : $1.to_i
          properties[:cores] = $2.to_i
        when /([\d.]+) EC2 Compute Units \((\d+) .+, (\w+)-core.+?\)/
          properties[:ecus] = $1.include?('.') ? $1.to_f : $1.to_i
          properties[:cores] = $2.to_i * core_multiplier($3)
          properties[:notes] << $&.scan(/\((.+?)\)/).first.first.gsub(/[“”]/, '"')
        when /Up to \d+ EC2 Compute Units \(.+?\)/
          properties[:ecus] = 0
          properties[:cores] = 1
          properties[:notes] << $&
        when /\d+ x NVIDIA .+ GPUs/
          properties[:notes] << $&.gsub(/[“”]/, '"')
        when /([\d.]+ [MG]iB) (?:of )?memory/
          properties[:ram] = $1
        when /(\d+) SSD-based volumes each with (\d+) GB of instance storage/
          properties[:disk] = $1.to_i * $2.to_i
          properties[:ssd] = true
          properties[:notes] << "#$1 SSD-based volumes each with #$2 GB"
        when /(\d+) hard disk drives each with (\d+) TB of instance storage/
          properties[:disk] = $1.to_i * $2.to_i * 1024
        when /([\d,]+) GB (?:of )?instance storage/
          properties[:disk] = $1.sub(',', '').to_i
        when /32-bit or 64-bit platform/
          properties[:architectures] = [32, 64]
        when /64-bit platform/
          properties[:architectures] = [64]
        when /I\/O Performance: (\w+(?: \w+)?)(?: \((.+?)\))?/
          properties[:io_performance] = $1.downcase
          properties[:notes] << $2 if $2
        when /EBS-Optimized Available: (\d+ Mbps)/
          properties[:ebs_optimized] = $1
        when /EBS storage only/
          properties[:ebs_only] = true
        when /\*+(\d+ cores \+ \d+ hyperthreads for \d+ virtual cores)/
          properties[:notes] << $1
        end
      end
      properties.delete(:notes) if properties[:notes].empty?
      properties
    end

    def core_multiplier(str)
      case str
      when 'eight' then 8
      when 'quad' then 4
      else 1
      end
    end
  end
end