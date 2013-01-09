# encoding: utf-8

module Ec2Pricing
  class AwsDataLoader
    def initialize(*args)
      @instance_types_url, @on_demand_pricing_url, @spot_pricing_url = args
    end

    def load!
      return if @instance_types_request
      @instance_types_request = Typhoeus::Request.new(@instance_types_url, method: :get)
      @on_demand_pricing_request = Typhoeus::Request.new(@on_demand_pricing_url, method: :get)
      @spot_pricing_request = Typhoeus::Request.new(@spot_pricing_url, method: :get)
      hydra = Typhoeus::Hydra.new
      hydra.queue(@instance_types_request)
      hydra.queue(@on_demand_pricing_request)
      hydra.queue(@spot_pricing_request)
      hydra.run
    end

    def instance_types_data
      raise 'No data loaded!' unless @instance_types_request
      @instance_types_data ||= Nokogiri::HTML(@instance_types_request.response.body)
    end

    def on_demand_pricing_data
      raise 'No data loaded!' unless @on_demand_pricing_request
      @on_demand_pricing_data ||= MultiJson.load(@on_demand_pricing_request.response.body)
    end

    def spot_pricing_data
      raise 'No data loaded!' unless @spot_pricing_request
      @spot_pricing_data ||= MultiJson.load(fix_jsonp(@spot_pricing_request.response.body))
    end

    private

    def fix_jsonp(str)
      str.sub(/\A\s*callback\((.+)\)\s*\Z/m, '\1').gsub(/\},\s*\]/, '}]')
    end
  end
end