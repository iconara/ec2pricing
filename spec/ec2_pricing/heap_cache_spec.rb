# encoding: utf-8

require 'spec_helper'


module Ec2Pricing
  describe HeapCache do
    let :cache do
      described_class.new
    end

    it 'stores stuff' do
      cache['something'] = 3
      expect(cache['something']).to eql(3)
    end

    it 'makes everything available from any instance' do
      another_cache = described_class.new
      cache['stuff'] = 'lots of it'
      expect(another_cache['stuff']).to eql('lots of it')
    end
  end
end