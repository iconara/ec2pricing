# encoding: utf-8

require 'grape'
require 'open-uri'
require 'nokogiri'
require 'ec2_pricing/heap_cache'
require 'ec2_pricing/pricing_parser'
require 'ec2_pricing/instance_types_parser'


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

      def instance_types_url
        ENV['AWS_INSTANCE_TYPES_URL']
      end

      def cache
        @cache ||= HeapCache.new(ttl: 30 * 60)
      end

      def instance_types
        cache['instance_types'] ||= begin
          instance_types = pricing_data.dup
          instance_types.each do |region|
            region[:instance_types].each do |instance_type|
              data = instance_type_data[instance_type[:api_name]]
              if data
                instance_type.merge!(data)
              else
                logger.warn("No data for #{instance_type[:api_name]} (in region #{region[:region]})")
              end
            end
          end
          instance_types
        end
      end

      def instance_types_etag
        @instance_types_etag ||= begin
          ts1 = cache.expire_time('pricing_data').to_i
          ts2 = cache.expire_time('instance_type_data').to_i
          ((ts1 * 5023399) ^ ts2).to_s(16)
        end
      end

      def pricing_data
        cache['pricing_data'] ||= begin
          logger.info("Loading pricing data from #{pricing_url}")
          data = open(pricing_url).read
          PricingParser.new.parse(MultiJson.load(data))
        end
      end

      def instance_type_data
        cache['instance_type_data'] ||= begin
          logger.info("Loading instance types #{instance_types_url}")
          data = open(instance_types_url).read
          parsed = InstanceTypesParser.new.parse(Nokogiri::HTML(data))
          instance_types = Hash[parsed.map { |type| [type[:api_name], type] }]
        end
      end

      def find_region(region_name)
        instance_types.find { |region| region[:region] == region_name }
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

    before do
      header['Cache-Control'] = "public, max-age=#{cache.ttl}"
    end

    before do
      request_etag = request.env['HTTP_IF_NONE_MATCH']
      if instance_types_etag == request_etag
        error!('Not Modified', 304)
      else
        header['ETag'] = instance_types_etag
      end
    end

    desc 'Returns pricing for all instance types in all regions'
    get '/' do
      instance_types
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