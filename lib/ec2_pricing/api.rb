# encoding: utf-8

require 'grape'
require 'open-uri'
require 'nokogiri'
require 'typhoeus'
require 'ec2_pricing/defaults'
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

      def cache
        @cache ||= HeapCache.new(ttl: 30 * 60)
      end

      def load_data!
        instance_types_parser = InstanceTypesParser.new
        pricing_parser = PricingParser.new
        data_loader = AwsDataLoader.new(Ec2Pricing::AWS_INSTANCE_TYPES_URL, Ec2Pricing::AWS_PRICING_URLS)
        data_loader.load!
        instance_types_data = instance_types_parser.parse(data_loader.instance_types_data)
        instance_types_data = Hash[instance_types_data.map { |type| [type[:api_name], type] }]
        pricing_data = data_loader.pricing_data.each_with_object({}) do |(type, pricing_data), result|
          result[type] = pricing_parser.parse(pricing_data)
        end
        [instance_types_data, pricing_data]
      end

      def create_region(region_name)
        {:region => region_name, :instance_types => {}}
      end

      def create_instance(api_name, instance_types_data)
        i = {:api_name => api_name}
        if (data = instance_types_data[api_name])
          i.merge!(data)
        end
        i
      end

      def merge_pricing(pricing_type, data, instance_type)
        case pricing_type
        when :spot
          data[:spot_pricing] = instance_type[:pricing]
        when :emr
          data[:emr_pricing] = instance_type[:pricing]
        else
          data[:on_demand_pricing] ||= {}
          data[:on_demand_pricing].merge!(instance_type[:pricing])
        end
      end

      def instance_types
        cache['instance_types'] ||= begin
          instance_types_data, pricing_data = load_data!
          instances_by_region = pricing_data.each_with_object({}) do |(pricing_type, regions), instances_by_region|
            regions.each do |region_data|
              region_name = region_data[:region]
              region = instances_by_region[region_name] ||= create_region(region_name)
              instance_types = region[:instance_types]
              region_data[:instance_types].each do |pricing_data|
                api_name = pricing_data[:api_name]
                instance_type_data = instance_types[api_name] ||= create_instance(api_name, instance_types_data)
                merge_pricing(pricing_type, instance_type_data, pricing_data)
              end
            end
          end
          instances_by_region.each_value do |region|
            region[:instance_types] = region[:instance_types].values
          end
          instances_by_region.values
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