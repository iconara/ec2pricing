# encoding: utf-8

module Ec2Pricing
  AWS_PRICING_URLS = {
    :linux => 'http://aws.amazon.com/ec2/pricing/json/linux-od.json',
    :mswin => 'http://aws.amazon.com/ec2/pricing/json/mswin-od.json',
    :rhel => 'http://aws.amazon.com/ec2/pricing/json/rhel-od.json',
    :sles => 'http://aws.amazon.com/ec2/pricing/json/sles-od.json',
    :emr => 'http://aws.amazon.com/elasticmapreduce/pricing/pricing-emr.json',
    :spot => 'http://spot-price.s3.amazonaws.com/spot.js',
  }

  AWS_INSTANCE_TYPES_URL = 'http://aws.amazon.com/ec2/instance-types/'
end