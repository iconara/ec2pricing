# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe AwsDataLoader do
    let :data_loader do
      described_class.new(instance_types_url, pricing_urls)
    end

    let :instance_types_url do
      'http://example.com/instance-types'
    end

    let :pricing_urls do
      {
        :linux => 'http://example.com/on-demand-pricing/linux',
        :mswin => 'http://example.com/on-demand-pricing/mswin',
        :fake => 'http://example.com/on-demand-pricing/fake',
        :emr => 'http://example.com/emr-pricing',
        :spot => 'http://example.com/spot-pricing',
      }
    end

    describe '#load!' do
      before do
        stub_http_request(:get, instance_types_url).to_return(body: '<html><body><p>Hello World</p></body></html>')
        stub_http_request(:get, pricing_urls[:linux]).to_return(body: '{"hello":"linux"}')
        stub_http_request(:get, pricing_urls[:mswin]).to_return(body: '{"hello":"mswin"}')
        stub_http_request(:get, pricing_urls[:fake]).to_return(body: '{"hello":"fake"}')
        stub_http_request(:get, pricing_urls[:emr]).to_return(body: '{"xyz":"abc"}')
        stub_http_request(:get, pricing_urls[:spot]).to_return(body: 'callback({"foo":"bar"})')
      end

      context 'in the basic case' do
        before do
          data_loader.load!
        end

        it 'loads the instance type data' do
          data_loader.instance_types_data.xpath('/html/body/p').first.text.should == 'Hello World'
        end

        it 'loads pricing data' do
          data_loader.pricing_data.should == {
            :linux => {'hello' => 'linux'},
            :mswin => {'hello' => 'mswin'},
            :fake => {'hello' => 'fake'},
            :spot => {'foo' => 'bar'},
            :emr => {'xyz' => 'abc'},
          }
        end
      end

      context 'with badly formatted spot pricing data' do
        before do
          stub_http_request(:get, pricing_urls[:spot]).to_return(body: 'callback({"foo":"bar","bad":[{},]})')
        end

        before do
          data_loader.load!
        end

        it 'fixes the error and loads the spot pricing data' do
          data_loader.pricing_data[:spot].should == {'foo' => 'bar', 'bad' => [{}]}
        end
      end

      context 'when accessing data before calling #load!' do
        it 'raises errors' do
          expect { data_loader.instance_types_data }.to raise_error(/No data loaded/)
          expect { data_loader.pricing_data }.to raise_error(/No data loaded/)
        end
      end

      context 'when calling #load! multiple times' do
        it 'does nothing the second time' do
          data_loader.load!
          data_loader.load!
          WebMock.should have_requested(:get, instance_types_url).once
          pricing_urls.each_value do |url|
            WebMock.should have_requested(:get, url).once
          end
        end
      end
    end
  end
end