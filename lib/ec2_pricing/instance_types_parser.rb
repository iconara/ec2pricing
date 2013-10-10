# encoding: utf-8

module Ec2Pricing
  class InstanceTypesParser
    def parse(doc)
      instance_types = []
      table = find_pricing_table(doc)
      raise 'Could not parse instance types HTML' unless table
      table_rows = table.xpath('tr')
      instance_types = table_rows.map do |row|
        columns = row.xpath('td').map do |t|
          t.inner_html.sub(/<span.+?>.+?<\/span>/, '').strip
        end
        if columns.size >= 9
          parse_instance_properties(*columns[1, 8])
        end
      end
      instance_types.compact!
      instance_types
    end

    private

    def find_pricing_table(doc)
      anchor = doc.xpath('//a[@name = "instance-details"]').first
      node = anchor
      while node = node.next
        return node if node.element? && node.name == 'table'
      end
      nil
    end

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

    def parse_instance_properties(*args)
      api_name, architectures_str, cores_str, ecus_str, ram_str, disk_str, _, io_str = args
      properties = {}
      properties[:name] = name_from_api_name(api_name)
      properties[:api_name] = api_name
      properties[:ecus] = ecus_str.include?('.') ? ecus_str.to_f : ecus_str.to_i
      properties[:cores] = parse_cores(cores_str)
      properties[:ram] = parse_ram(ram_str)
      properties[:disk_size] = parse_disk_size(disk_str)
      properties[:disk_count] = parse_disk_count(disk_str)
      properties[:architectures] = parse_architectures(architectures_str)
      properties[:io_performance] = parse_io_performance(io_str)
      properties[:ssd] = true if ssd?(disk_str)
      properties[:ebs_only] = true if ebs_only?(disk_str)
      properties[:notes] = parse_notes(nil, api_name, ecus_str, cores_str, ram_str, disk_str, architectures_str, io_str)
      properties.delete(:notes) if properties[:notes].empty?
      properties
    end

    XL = {
      '2' => 'Double',
      '4' => 'Quadruple',
      '8' => 'Eight'
    }

    def name_from_api_name(api_name)
      family, name = api_name.split('.')
      family = begin
        case family
        when 't1'
          ''
        when 'cc2'
          'Cluster Compute'
        when 'cg1'
          'Cluster GPU'
        when 'c1'
          'High CPU'
        when 'm2', 'cr1'
          'High Memory'
        when 'hi1'
          'High IO'
        when 'hs1'
          'High Storage'
        else
          family.upcase
        end
      end
      name = begin
        case name
        when /(\d+)xlarge/
          "#{XL[$1]} Extra Large"
        when /^xlarge/
          'Extra Large'
        else
          name.capitalize
        end
      end
      "#{family} #{name}".strip
    end

    def parse_cores(cores_str)
      case cores_str
      when /^(\d+)\s/
        $1.to_i
      else
        cores_str.to_i
      end
    end

    def parse_ram(ram_str)
      number = ram_str.scan(/^([\d.]+)/).flatten.first
      "#{number} GiB"
    end

    def parse_disk_size(disk_str)
      case disk_str
      when nil, /None/
        nil
      when /(\d+) x ([\d,]+)/
        disk_count = $1.to_i
        size_per_disk = $2.gsub(',', '').to_i
        total_size = disk_count * size_per_disk
        if total_size > 1024 * 10
          unit = 'TiB'
          total_size /= 1024
        else
          unit = 'GiB'
        end
        "#{total_size} #{unit}"
      end
    end

    def parse_disk_count(disk_str)
      case disk_str
      when /(\d+) x/
        $1.to_i
      else
        0
      end
    end

    def parse_io_performance(io_str)
      io_str.downcase
    end

    def parse_architectures(architectures_str)
      if architectures_str.include?('32') && architectures_str.include?('64')
        [32, 64]
      else
        [64]
      end
    end

    def parse_notes(name, api_name, ecus_str, cores_str, ram_str, disk_str, architectures_str, io_str)
      parse_ecus_notes(ecus_str) + parse_cores_notes(cores_str) + parse_io_notes(io_str)
    end

    def parse_ecus_notes(ecus_str)
      case ecus_str
      when /Up to (\d+) \(for short periodic bursts\)/
        ["Up to #{$1} ECUs (for short periodic bursts)"]
      else
        []
      end
    end

    def parse_cores_notes(cores_str)
      case cores_str
      when /ECUs each/
        []
      when /\((.+?)\), plus (.+)\Z/m
        [normalize_whitespace($1), normalize_whitespace($2)]
      when /\((.+?)\)/m
        [normalize_whitespace($1)]
      else
        []
      end
    end

    def parse_io_notes(io_str)
      case io_str
      when /\((.+)\)/
        [$1]
      else
        []
      end
    end

    def ssd?(disk_str)
      disk_str.include?('SSD')
    end

    def ebs_only?(disk_str)
      disk_str.include?('EBS only')
    end

    def normalize_whitespace(str)
      str.gsub(/\s{2,}/, ' ')
    end
  end
end