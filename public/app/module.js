angular.module("ec2Pricing", [])
  .value("instanceTypesUrl", "data/instance-types.json")
  .value("onDemandPricingUrl", "data/pricing-on-demand-instances.json")
  .value("spotPricingUrl", "http://spot-price.s3.amazonaws.com/spot.js")
