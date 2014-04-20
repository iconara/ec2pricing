(function () {
  "use strict"

  var ec2pricing = angular.module("ec2pricing", ["ec2pricing.filters", "ec2pricing.directives", "ec2pricing.utils"])

  ec2pricing.value("pricingUrls", [
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

  ec2pricing.factory("pricingData", function ($q, pricingUrls, jsonpLoader, cache, awsDataParser) {
    var guessOsFromUrl = function (url) {
      if (url.indexOf("redhat") != -1 || url.indexOf("rhel") != -1) {
        return "rhel"
      } else if (url.indexOf("suse") != -1 || url.indexOf("sles") != -1) {
        return "sles"
      } else if (url.toLowerCase().indexOf("mswinsqlweb") != -1) {
        return "mswinsqlweb"
      } else if (url.toLowerCase().indexOf("mswinsql") != -1) {
        return "mswinsql"
      } else if (url.indexOf("mswin") != -1) {
        return "mswin"
      } else if (url.indexOf("linux") != -1) {
        return "linux"
      } else {
        return null
      }
    }
    var guessCategoryFromUrl = function (url) {
      if (url.indexOf("-od") != -1) {
        return "onDemand"
      } else if (url.indexOf("spot") != -1) {
        return "spot"
      } else if (url.indexOf("-ri-light") != -1 || url.indexOf("light_") != -1) {
        return "lightReservation"
      } else if (url.indexOf("-ri-medium") != -1 || url.indexOf("medium_") != -1) {
        return "mediumReservation"
      } else if (url.indexOf("-ri-heavy") != -1 || url.indexOf("heavy_") != -1) {
        return "heavyReservation"
      } else {
        return "other"
      }
    }
    var loadData = function (url) {
      return cache(url, jsonpLoader, url, "callback").then(function (data) {
        data.pricingCategory = guessCategoryFromUrl(url)
        data.operatingSystem = guessOsFromUrl(url)
        return data
      })
    }
    var requests = pricingUrls.map(loadData)
    return $q.all(requests).then(awsDataParser)
  })
}())
