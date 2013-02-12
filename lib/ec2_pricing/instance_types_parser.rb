# encoding: utf-8

module Ec2Pricing
  class InstanceTypesParser
    def parse(doc)
      instance_types = []
      header = doc.css('#AvailableInstanceTypes').first
      raise 'Could not parse instance types HTML' unless header
      section = header.ancestors.find { |n| n['class'] && n['class'].include?('section') }
      table_rows = section.xpath('div[@class = "informaltable"]/table/tbody/tr')
      instance_types = table_rows.map do |row|
        columns = row.xpath('td').map { |t| t.text.strip }
        if columns.size >= 9
          parse_instance_properties(*columns[0, 9])
        end
      end
      instance_types.compact!
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

    def parse_instance_properties(*args)
      if args[7] == 't1.micro'
        args.unshift(args.first)
        args[1] = '615 MiB'
        args.pop
      end

      name, ram_str, ecus_str, cores_str, disk_str, architectures_str, io_str, spot_availability_str, api_name = args

      properties = {}
      properties[:name] = name
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
      properties[:notes] = parse_notes(name, api_name, ecus_str, cores_str, ram_str, disk_str, architectures_str, io_str)
      properties.delete(:notes) if properties[:notes].empty?
      properties
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
      ram_str.scan(/^([\d.]+ \w+)/).flatten.first
    end

    def parse_disk_size(disk_str)
      size = disk_str.scan(/^(\d+ \w+)/).flatten.first
      case size
      when nil, /None/
        nil
      else
        fix_disk_unit(size)
      end
    end

    def fix_disk_unit(str)
      str.sub('GB', 'GiB')
    end

    def parse_disk_count(disk_str)
      case disk_str
      when /\((\d+) x \d+ TiB hard disk drives/
        $1.to_i
      when /\((\d+) x \d+/
        $1.to_i
      else
        0
      end
    end

    def parse_io_performance(io_str)
      case io_str
      when /^(.+?) \(/
        $1.downcase
      else
        io_str.downcase
      end
    end

    def parse_architectures(architectures_str)
      case architectures_str
      when /32-bit and 64-bit/
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
      disk_str.include?('EBS storage only') || disk_str.include?('None')
    end

    def normalize_whitespace(str)
      str.gsub(/\s{2,}/, ' ')
    end
  end
end