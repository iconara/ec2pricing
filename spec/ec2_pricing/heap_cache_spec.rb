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
      fake_time.stub(:now).and_return(Time.at(1))
    end

    before do
      cache.clear!
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
      fake_time.stub(:now).and_return(Time.at(6))
      expect(cache['something']).to be_nil
    end

    describe '#ttl' do
      it 'returns the TTL' do
        expect(cache.ttl).to eql(5)
      end
    end

    describe '#clear!' do
      it 'clears all keys from all instances' do
        cache['hello'] = 'world'
        another_cache = described_class.new
        another_cache.clear!
        expect(another_cache['hello']).to be_nil
        expect(cache['hello']).to be_nil
      end
    end

    describe '#expire_time' do
      it 'returns when a key expires' do
        cache['something'] = 'hello'
        expect(cache.expire_time('something')).to eql(Time.at(6))
      end

      it 'returns nil if a key does not expire' do
        another_cache = described_class.new(time: fake_time)
        another_cache['stuff'] = 42
        expect(another_cache.expire_time('stuff')).to be_nil
      end
    end
  end
end