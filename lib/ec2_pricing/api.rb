# encoding: utf-8

require 'grape'
require 'open-uri'
require 'ec2_pricing/heap_cache'
require 'ec2_pricing/pricing_parser'


module Ec2Pricing
  class Api < Grape::API
    version 'v1', :using => :path
    prefix 'api'
    format :json

    helpers do
      def logger
        Api.logger
      end

      def pricing_url
        ENV['AWS_PRICING_URL']
      end

      def cache
        @pricing_cache ||= HeapCache.new
      end

      def pricing_data
        cache['pricing'] ||= begin
          logger.info("Loading pricing data from #{pricing_url}")
          data = open(pricing_url).read
          PricingParser.new.parse(MultiJson.load(data))
        end
      end

      def find_region(region_name)
        pricing_data.find { |region| region[:region] == region_name }
      end

      def find_instance_type(region_name, api_name)
        region = find_region(region_name)
        if region
          instance = region[:instance_types].find { |instance_type| instance_type[:api_name] == api_name }
          {:region => region_name}.merge(instance) if instance
        end
      end
    end

    before do
      header['Access-Control-Allow-Origin'] = '*'
      header['Access-Control-Request-Method'] = 'GET, HEAD, OPTIONS'
    end

    desc 'Returns pricing for all instance types in all regions'
    get '/' do
      pricing_data
    end

    desc 'Return pricing for all instance types for a region'
    params do
      requires :region, type: String
    end
    get '/:region' do
      find_region(params[:region]) || error!('Not Found', 404)
    end

    desc 'Returns pricing for an instance type'
    params do
      requires :region, type: String
      requires :family, type: String
      requires :size, type: String
    end
    get '/:region/:family.:size' do
      find_instance_type(params[:region], "#{params[:family]}.#{params[:size]}") || error!('Not Found', 404)
    end
  end
end