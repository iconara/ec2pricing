# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe Api do
    include Rack::Test::Methods

    def app
      described_class
    end

    let :response_body do
      MultiJson.load(last_response.body)
    end

    before do
      stub_http_request(:get, AWS_PRICING_URLS[:linux]).to_return(body: File.read(File.expand_path('../../resources/linux-od.json', __FILE__)))
      stub_http_request(:get, AWS_PRICING_URLS[:mswin]).to_return(body: File.read(File.expand_path('../../resources/mswin-od.json', __FILE__)))
      stub_http_request(:get, AWS_PRICING_URLS[:rhel]).to_return(body: File.read(File.expand_path('../../resources/rhel-od.json', __FILE__)))
      stub_http_request(:get, AWS_PRICING_URLS[:sles]).to_return(body: File.read(File.expand_path('../../resources/sles-od.json', __FILE__)))
      stub_http_request(:get, AWS_PRICING_URLS[:emr]).to_return(body: File.read(File.expand_path('../../resources/pricing-emr.json', __FILE__)))
      stub_http_request(:get, AWS_PRICING_URLS[:spot]).to_return(body: File.read(File.expand_path('../../resources/spot.js', __FILE__)))
      stub_http_request(:get, AWS_INSTANCE_TYPES_URL).to_return(body: File.read(File.expand_path('../../resources/instance-types.html', __FILE__)))
    end

    shared_examples_for 'a GET URI' do
      it 'responds with OK' do
        expect(last_response.status).to be(200)
      end

      it 'responds with JSON' do
        expect(last_response.headers).to include('Content-Type' => 'application/json')
      end

      it 'allows requests from all origins' do
        expect(last_response.headers).to include('Access-Control-Allow-Origin' => '*')
      end

      it 'allows only GET, HEAD and OPTIONS requests from other origins' do
        expect(last_response.headers['Access-Control-Request-Method']).to include('GET')
        expect(last_response.headers['Access-Control-Request-Method']).to include('HEAD')
        expect(last_response.headers['Access-Control-Request-Method']).to include('OPTIONS')
        expect(last_response.headers['Access-Control-Request-Method']).to_not include('POST')
        expect(last_response.headers['Access-Control-Request-Method']).to_not include('PUT')
        expect(last_response.headers['Access-Control-Request-Method']).to_not include('DELETE')
      end

      it 'responds with an appropriate Cache-Control header' do
        expect(last_response.headers['Cache-Control']).to eql('public, max-age=1800')
      end

      it 'sets an ETag header' do
        expect(last_response.headers['ETag']).to_not be_nil
      end

      it 'responds with Not Modified if the same request is sent again with If-None-Match' do
        get "/api/v1#{last_request.path}", last_request.params, {'HTTP_IF_NONE_MATCH' => last_response.headers['ETag']}
        expect(last_response.status).to eql(304)
      end
    end

    describe '/api/v1/' do
      describe '/' do
        before do
          get '/api/v1/'
        end

        it_behaves_like 'a GET URI'

        it 'returns the pricing for all regions' do
          regions = response_body.map { |region| region['region'] }
          expect(regions).to include('us-east-1', 'eu-west-1', 'sa-east-1')
        end
      end

      describe '/:region' do
        before do
          get '/api/v1/eu-west-1'
        end

        it_behaves_like 'a GET URI'

        it 'returns instance type information for the specified region' do
          expect(response_body['region']).to eql('eu-west-1')
          expect(response_body['instance_types']).to have(24).items
        end

        it 'returns on demand pricing for the specified region' do
          expect(response_body['instance_types'].first['on_demand_pricing']).to have_key('linux')
          expect(response_body['instance_types'].first['on_demand_pricing']).to have_key('rhel')
        end

        it 'returns spot pricing for the specified region (where available)' do
          m1_small = response_body['instance_types'].find { |instance_type| instance_type['api_name'] == 'm1.small' }
          hi1_4xlarge = response_body['instance_types'].find { |instance_type| instance_type['api_name'] == 'hi1.4xlarge' }
          expect(m1_small['spot_pricing']).to have_key('linux')
          expect(hi1_4xlarge['spot_pricing']).to be_nil
        end

        it 'returns EMR pricing for the specified region (where available)' do
          m1_small = response_body['instance_types'].find { |instance_type| instance_type['api_name'] == 'm1.small' }
          hs1_8xlarge = response_body['instance_types'].find { |instance_type| instance_type['api_name'] == 'hs1.8xlarge' }
          expect(m1_small['emr_pricing']).to have_key('linux')
          expect(hs1_8xlarge['emr_pricing']).to be_nil
        end

        it 'responds with Not Found for regions that do not exist' do
          get '/api/v1/eu-east-3'
          expect(last_response.status).to eql(404)
        end
      end

      describe '/:region/:family.:size' do
        before do
          get '/api/v1/us-west-2/m1.xlarge'
        end

        it_behaves_like 'a GET URI'

        it 'returns on demand pricing for the specified instance type in the specified region' do
          expect(response_body).to have_key('on_demand_pricing')
        end

        it 'returns instance type data for the specified instance type in the specified region' do
          expect(response_body['api_name']).to eql('m1.xlarge')
          expect(response_body['ram']).to eql('15 GiB')
          expect(response_body['ecus']).to eql(8)
          expect(response_body['io_performance']).to eql('high')
        end

        it 'responds with Not Found when the instance type cannot be found in the region' do
          get '/api/v1/us-west-1/x5.32xlarge'
          expect(last_response.status).to eql(404)
        end
      end
    end
  end
end