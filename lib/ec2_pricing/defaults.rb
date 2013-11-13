# encoding: utf-8

ENV['AWS_ON_DEMAND_PRICING_URL'] ||= 'http://aws.amazon.com/ec2/pricing/pricing-on-demand-instances.json'
ENV['AWS_EMR_PRICING_URL'] ||= 'http://aws.amazon.com/elasticmapreduce/pricing/pricing-emr.json'
ENV['AWS_SPOT_PRICING_URL'] ||= 'http://spot-price.s3.amazonaws.com/spot.js'
ENV['AWS_INSTANCE_TYPES_URL'] ||= 'http://aws.amazon.com/ec2/instance-types/'
