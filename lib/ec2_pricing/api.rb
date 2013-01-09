# encoding: utf-8

require 'grape'
require 'open-uri'
require 'nokogiri'
require 'typhoeus'
require 'ec2_pricing/heap_cache'
require 'ec2_pricing/aws_data_loader'
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

      def on_demand_pricing_url
        ENV['AWS_ON_DEMAND_PRICING_URL']
      end

      def spot_pricing_url
        ENV['AWS_SPOT_PRICING_URL']
      end

      def instance_types_url
        ENV['AWS_INSTANCE_TYPES_URL']
      end

      def cache
        @cache ||= HeapCache.new(ttl: 30 * 60)
      end

      def load_data!
        instance_types_parser = InstanceTypesParser.new
        pricing_parser = PricingParser.new
        data_loader = AwsDataLoader.new(instance_types_url, on_demand_pricing_url, spot_pricing_url)
        data_loader.load!

        instance_types_data = instance_types_parser.parse(data_loader.instance_types_data)
        instance_types_data = Hash[instance_types_data.map { |type| [type[:api_name], type] }]

        on_demand_pricing_data = pricing_parser.parse(data_loader.on_demand_pricing_data)
        spot_pricing_data = pricing_parser.parse(data_loader.spot_pricing_data)

        [on_demand_pricing_data, spot_pricing_data, instance_types_data]
      end

      def instance_types
        cache['instance_types'] ||= begin
          on_demand_pricing_data, spot_pricing_data, instance_types_data = load_data!
          instance_types_by_region = {}
          on_demand_pricing_data.each do |region_pricing|
            region = {:region => region_pricing[:region], :instance_types => []}
            instance_types_by_region[region[:region]] = region
            region_pricing[:instance_types].each do |instance_type_on_demand_pricing|
              instance_type_data = instance_types_data[instance_type_on_demand_pricing[:api_name]]
              if instance_type_data
                region[:instance_types] << instance_type_data.merge(:on_demand_pricing => instance_type_on_demand_pricing[:pricing])
              else
                logger.warn("No instance type data for #{instance_type_on_demand_pricing[:api_name]} (in region #{region[:region]})")
              end
            end
          end
          spot_pricing_data.each do |region_pricing|
            region = instance_types_by_region[region_pricing[:region]]
            region_pricing[:instance_types].each do |instance_type_spot_pricing|
              instance_type_data = region[:instance_types].find { |instance_type| instance_type[:api_name] == instance_type_spot_pricing[:api_name] }
              if instance_type_data
                instance_type_data[:spot_pricing] = instance_type_spot_pricing[:pricing]
              else
                logger.info("No instance type data for #{instance_type_spot_pricing[:api_name]} (in region #{region[:region]})")
              end
            end
          end
          instance_types_by_region.values
        end
      end

      def instance_types_etag
        @instance_types_etag ||= cache.expire_time('instance_types').to_i.to_s(16)
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