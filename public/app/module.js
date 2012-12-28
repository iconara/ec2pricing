angular.module("ec2Pricing", ["ec2pricing.sorting", "ec2pricing.tracking", "ec2pricing.formatting", "ec2pricing.pricing"])
  .value("instanceTypesUrl", "data/instance-types.json")
  .value("onDemandPricingUrl", "data/aws/pricing-on-demand-instances.json")
  .value("spotPricingUrl", "http://spot-price.s3.amazonaws.com/spot.js")
