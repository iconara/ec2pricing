# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe AwsDataLoader do
    let :data_loader do
      described_class.new(instance_types_url, on_demand_pricing_url, spot_pricing_url)
    end

    let(:instance_types_url) { 'http://example.com/instance-types' }
    let(:on_demand_pricing_url) { 'http://example.com/on-demand-pricing' }
    let(:spot_pricing_url) { 'http://example.com/spot-pricing' }

    describe '#load!' do
      before do
        stub_http_request(:get, instance_types_url).to_return(body: '<html><body><p>Hello World</p></body></html>')
        stub_http_request(:get, on_demand_pricing_url).to_return(body: '{"hello":"world"}')
        stub_http_request(:get, spot_pricing_url).to_return(body: 'callback({"foo":"bar"})')
      end

      context 'in the basic case' do
        before do
          data_loader.load!
        end

        it 'loads the instance type data' do
          data_loader.instance_types_data.xpath('/html/body/p').first.text.should == 'Hello World'
        end

        it 'loads the on demand pricing data' do
          data_loader.on_demand_pricing_data.should == {'hello' => 'world'}
        end

        it 'loads the spot pricing data' do
          data_loader.spot_pricing_data.should == {'foo' => 'bar'}
        end
      end

      context 'with badly formatted spot pricing data' do
        before do
          stub_http_request(:get, spot_pricing_url).to_return(body: 'callback({"foo":"bar","bad":[{},]})')
        end

        before do
          data_loader.load!
        end

        it 'fixes the error and loads the spot pricing data' do
          data_loader.spot_pricing_data.should == {'foo' => 'bar', 'bad' => [{}]}
        end
      end

      context 'when accessing data before calling #load!' do
        it 'raises errors' do
          expect { data_loader.instance_types_data }.to raise_error(/No data loaded/)
          expect { data_loader.on_demand_pricing_data }.to raise_error(/No data loaded/)
          expect { data_loader.spot_pricing_data }.to raise_error(/No data loaded/)
        end
      end

      context 'when calling #load! multiple times' do
        it 'does nothing the second time' do
          data_loader.load!
          data_loader.load!
          WebMock.should have_requested(:get, instance_types_url).once
          WebMock.should have_requested(:get, on_demand_pricing_url).once
          WebMock.should have_requested(:get, spot_pricing_url).once
        end
      end
    end
  end
end