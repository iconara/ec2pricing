# encoding: utf-8

require 'open-uri'


module Ec2Pricing
  module Caching
    CACHE_DIR = '/tmp/ec2_pricing'.freeze

    def cached(id, options={})
      cache_path = File.join(CACHE_DIR, id)
      if options[:cache?] == false || !File.exists?(cache_path) || File.mtime(cache_path) < Time.now - 3600
        data = yield
        unless options[:cache?] == false
          Dir.mkdir(CACHE_DIR) unless Dir.exists?(CACHE_DIR)
          File.open(cache_path, 'w') { |io| io.write(data) }
        end
        data
      else
        File.read(cache_path)
      end
    end
  end
end

require 'ec2_pricing/pricing_parser'
require 'ec2_pricing/instance_types'
require 'ec2_pricing/on_demand_pricing'
