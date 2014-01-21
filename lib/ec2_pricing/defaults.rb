# encoding: utf-8

module Ec2Pricing
  AWS_PRICING_URLS = {
    :linux => 'http://aws-assets-pricing-prod.s3.amazonaws.com/pricing/ec2/linux-od.js',
    :mswin => 'http://aws-assets-pricing-prod.s3.amazonaws.com/pricing/ec2/mswin-od.js',
    :rhel => 'http://aws-assets-pricing-prod.s3.amazonaws.com/pricing/ec2/rhel-od.js',
    :sles => 'http://aws-assets-pricing-prod.s3.amazonaws.com/pricing/ec2/sles-od.js',
    :emr => 'http://aws-assets-pricing-prod.s3.amazonaws.com/pricing/emr/pricing-emr.js',
    :spot => 'http://spot-price.s3.amazonaws.com/spot.js',
  }

  AWS_INSTANCE_TYPES_URL = 'http://aws.amazon.com/ec2/instance-types/'
end