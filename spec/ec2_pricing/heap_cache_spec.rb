# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe HeapCache do
    let :cache do
      described_class.new(ttl: 5, time: fake_time)
    end

    let :fake_time do
      stub(:time)
    end

    before do
      fake_time.stub(:now).and_return(1)
    end

    it 'stores stuff' do
      cache['something'] = 3
      expect(cache['something']).to eql(3)
    end

    it 'makes everything available from any instance' do
      another_cache = described_class.new(time: fake_time)
      cache['stuff'] = 'lots of it'
      expect(another_cache['stuff']).to eql('lots of it')
    end

    it 'expires stuff' do
      cache['something'] = 3
      fake_time.stub(:now).and_return(6)
      expect(cache['something']).to be_nil
    end
  end
end