angular.module("ec2Pricing", ["ec2pricing.sorting", "ec2pricing.tracking", "ec2pricing.formatting", "ec2pricing.pricing"])
  .value("instanceTypesByRegionUrl", "data/data.json")
  // .value("instanceTypesByRegionUrl", "/api/v1/")
  .value("spotPricingUrl", "http://spot-price.s3.amazonaws.com/spot.js")
