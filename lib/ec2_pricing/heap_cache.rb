# encoding: utf-8

module Ec2Pricing
  class HeapCache
    attr_reader :ttl

    def initialize(options={})
      @ttl = options[:ttl]
      @time = options[:time] || Time
      $heap_cache_storage ||= {}
      $heap_cache_expires ||= {}
    end

    def expire_time(key)
      $heap_cache_expires[key]
    end

    def clear!
      $heap_cache_expires = {}
      $heap_cache_storage = {}
    end

    def []=(key, value)
      $heap_cache_expires[key] = @time.now + @ttl if @ttl
      $heap_cache_storage[key] = value
    end

    def [](key)
      expires = $heap_cache_expires[key]
      if expires.nil? || @time.now < expires
        $heap_cache_storage[key]
      else
        $heap_cache_storage.delete(key)
        nil
      end
    end
  end
end
