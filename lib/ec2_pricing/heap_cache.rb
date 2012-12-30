# encoding: utf-8

module Ec2Pricing
  class HeapCache
    def initialize
      $heap_cache_storage ||= {}
    end

    def []=(key, value)
      $heap_cache_storage[key] = value
    end

    def [](key)
      $heap_cache_storage[key]
    end
  end
end
