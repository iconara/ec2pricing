# encoding: utf-8

module Ec2Pricing
  class AwsDataLoader
    def initialize(instance_types_url, pricing_urls)
      @instance_types_url = instance_types_url
      @pricing_urls = pricing_urls
    end

    def load!
      return if @instance_types_request
      @instance_types_request = Typhoeus::Request.new(@instance_types_url, method: :get)
      @pricing_requests = @pricing_urls.each_with_object({}) do |(type, url), requests|
        requests[type] = Typhoeus::Request.new(url, method: :get)
      end
      hydra = Typhoeus::Hydra.new
      hydra.queue(@instance_types_request)
      @pricing_requests.each_value { |r| hydra.queue(r) }
      hydra.run
    end

    def instance_types_data
      raise 'No data loaded!' unless @instance_types_request
      @instance_types_data ||= Nokogiri::HTML(@instance_types_request.response.body)
    end

    def pricing_data
      raise 'No data loaded!' unless @pricing_requests
      @pricing_data ||= @pricing_requests.each_with_object({}) do |(type, request), data|
        data[type] = MultiJson.load(fix_jsonp(request.response.body))
      end
    end

    private

    def fix_jsonp(str)
      str.sub(/\A\s*callback\((.+)\)\s*\Z/m, '\1').gsub(/\},\s*\]/, '}]')
    end
  end
end