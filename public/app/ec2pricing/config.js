(function () {
  "use strict"

  var config = angular.module("ec2pricing.config")

  config.value("pricingUrls", [
    // on demand
    "http://a0.awsstatic.com/pricing/1/ec2/linux-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/linux-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswin-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/mswin-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/rhel-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/rhel-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/sles-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/sles-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswinSQL-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/mswinSQL-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswinSQLWeb-od.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/mswinSQLWeb-od.min.js",

    // light reserved
    "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-light.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/light_linux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/rhel-ri-light.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/light_redhatlinux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/sles-ri-light.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/light_suselinux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-light.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/light_mswin.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswinSQL-ri-light.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/light_mswinsqlstd.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswinSQLWeb-ri-light.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/light_mswinsqlweb.min.js",

    // medium reserved
    "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-medium.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/medium_linux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/rhel-ri-medium.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/medium_redhatlinux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/sles-ri-medium.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/medium_suselinux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-medium.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/medium_mswin.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswinSQL-ri-medium.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/medium_mswinsqlstd.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswinSQLWeb-ri-medium.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/medium_mswinsqlweb.min.js",

    // heavy reserved
    "http://a0.awsstatic.com/pricing/1/ec2/linux-ri-heavy.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/heavy_linux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/rhel-ri-heavy.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/heavy_redhatlinux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/sles-ri-heavy.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/heavy_suselinux.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswin-ri-heavy.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/heavy_mswin.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswinSQL-ri-heavy.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/heavy_mswinsqlstd.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/mswinSQLWeb-ri-heavy.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/previous-generation/heavy_mswinsqlweb.min.js",

    // spot
    "http://spot-price.s3.amazonaws.com/spot.js",

    // other
    "http://a0.awsstatic.com/pricing/1/emr/pricing-emr.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/pricing-ebs-optimized-instances.min.js",

    // other (not instance based)
    "http://a0.awsstatic.com/pricing/1/ec2/pricing-data-transfer-with-regions.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/pricing-ebs.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/pricing-elastic-ips.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/pricing-cloudwatch.min.js",
    "http://a0.awsstatic.com/pricing/1/ec2/pricing-elb.min.js"
  ])

  config.value("instanceTypeExtras", {
    "m3.medium":   {networkPerformance: "moderate",   processorFamily: "Intel Xeon E5-2670",    clockSpeed: 2.6},
    "m3.large":    {networkPerformance: "moderate",   processorFamily: "Intel Xeon E5-2670",    clockSpeed: 2.6},
    "m3.xlarge":   {networkPerformance: "moderate",   processorFamily: "Intel Xeon E5-2670",    clockSpeed: 2.6},
    "m3.2xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon E5-2670",    clockSpeed: 2.6},
    "c3.large":    {networkPerformance: " moderate",  processorFamily: "Intel Xeon E5-2680 v2", clockSpeed: 2.8},
    "c3.xlarge":   {networkPerformance: "moderate",   processorFamily: "Intel Xeon E5-2680 v2", clockSpeed: 2.8},
    "c3.2xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon E5-2680 v2", clockSpeed: 2.8},
    "c3.4xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon E5-2680 v2", clockSpeed: 2.8},
    "c3.8xlarge":  {networkPerformance: "10 gigabit", processorFamily: "Intel Xeon E5-2680 v2", clockSpeed: 2.8},
    "g2.2xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon E5-2670",    clockSpeed: 2.6},
    "r3.large":    {networkPerformance: "moderate",   processorFamily: "Intel Xeon E5-2670 v2", clockSpeed: 2.5},
    "r3.xlarge":   {networkPerformance: "moderate",   processorFamily: "Intel Xeon E5-2670 v2", clockSpeed: 2.5},
    "r3.2xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon E5-2670 v2", clockSpeed: 2.5},
    "r3.4xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon E5-2670 v2", clockSpeed: 2.5},
    "r3.8xlarge":  {networkPerformance: "10 gigabit", processorFamily: "Intel Xeon E5-2670 v2", clockSpeed: 2.5},
    "i2.xlarge":   {networkPerformance: "moderate",   processorFamily: "Intel Xeon E5-2670 v2", clockSpeed: 2.5},
    "i2.2xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon E5-2670 v2", clockSpeed: 2.5},
    "i2.4xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon E5-2670 v2", clockSpeed: 2.5},
    "i2.8xlarge":  {networkPerformance: "10 gigabit", processorFamily: "Intel Xeon E5-2650",    clockSpeed: 2.5},
    "hs1.8xlarge": {networkPerformance: "10 gibabit", processorFamily: "Intel Xeon Family",     clockSpeed: 2},
    "t1.micro":    {networkPerformance: "very low",   processorFamily: "Variable"},
    "m1.small":    {networkPerformance: "low",        processorFamily: "Intel Xeon Family"},
    "m1.medium":   {networkPerformance: "moderate",   processorFamily: "Intel Xeon Family"},
    "m1.large":    {networkPerformance: "moderate",   processorFamily: "Intel Xeon Family"},
    "m1.xlarge":   {networkPerformance: "high",       processorFamily: "Intel Xeon Family"},
    "c1.medium":   {networkPerformance: "moderate",   processorFamily: "Intel Xeon Family"},
    "c1.xlarge":   {networkPerformance: "high",       processorFamily: "Intel Xeon Family"},
    "cc2.8xlarge": {networkPerformance: "10 gigabit", processorFamily: "Intel Xeon Family"},
    "cg1.4xlarge": {networkPerformance: "10 gigabit", processorFamily: "Intel Xeon Family"},
    "m2.xlarge":   {networkPerformance: "moderate",   processorFamily: "Intel Xeon Family"},
    "m2.2xlarge":  {networkPerformance: "moderate",   processorFamily: "Intel Xeon Family"},
    "m2.4xlarge":  {networkPerformance: "high",       processorFamily: "Intel Xeon Family"},
    "cr1.8xlarge": {networkPerformance: "high",       processorFamily: "Intel Xeon Family"},
    "hi1.4xlarge": {networkPerformance: "10 gigabit", processorFamily: "Intel Xeon Family"}
  })
}())
