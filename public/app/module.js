(function () {
  "use strict"

  var filters = angular.module("ec2pricing.filters", [])

  filters.filter("price", function () {
    var periodMultiplier = {
      "hourly": 1,
      "daily": 24,
      "weekly": 24 * 7,
      "monthly": 24 * 365.25/12,
      "yearly": 24 * 365.25
    }
    return function (input, period, reservationTerm) {
      if (input == null || input === "") {
        return "n/a"
      }
      var hourlyPrice = input
      if (typeof input == "object" && "yrTerm1" in input) {
        var fixed = input[reservationTerm]
        var hourly = input[reservationTerm + "Hourly"]
        hourlyPrice = fixed/periodMultiplier["yearly"] + hourly
      }
      return "$" + (hourlyPrice * periodMultiplier[period]).toFixed(3)
    }
  })

  filters.filter("disks", function () {
    return function (input) {
      if (input == null) {
        return "n/a"
      } else {
        var str = input.disks + "\u00A0×\u00A0" + input.size + "\u00A0GB"
        if (input.ssd) {
          str += "\u00A0SSD"
        }
        return str
      }
    }
  })

  var ec2pricing = angular.module("ec2pricing", ["ec2pricing.filters"])

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

  ec2pricing.factory("jsonpLoader", function ($window, $rootScope, $q) {
    return function (url, callbackName) {
      var deferred = $q.defer()
      var frame = $window.document.createElement('IFRAME')
      frame.src = 'about:blank'
      frame.height = '0px'
      frame.width = '0px'
      frame.style['background-color'] = 'transparent'
      frame.style['border'] =  '0px none transparent'
      frame.style['padding'] =  '0px'
      frame.style['overflow'] =  'hidden'
      $window.document.body.appendChild(frame)
      var script = frame.contentDocument.createElement('script')
      script.src = url
      frame.contentWindow[callbackName] = function (result) {
        frame.parentNode.removeChild(frame)
        $rootScope.$apply(function () { deferred.resolve(result) })
      }
      frame.contentDocument.body.appendChild(script)
      return deferred.promise
    }
  })

  ec2pricing.factory("cache", function ($window, $q) {
    return function (key, producer, _args) {
      var cacheKey = "ec2pricing:" + key
      var value = $window.localStorage[cacheKey]
      if (value) {
        return $q.when(angular.fromJson(value))
      } else {
        var args = Array.prototype.slice.apply(arguments)
        args.shift()
        args.shift()
        return producer.apply(null, args).then(function (value) {
          localStorage[cacheKey] = angular.toJson(value)
          return value
        })
      }
    }
  })

  ec2pricing.factory("awsDataParser", function () {
    var regionMap = {
      "us-east":        "us-east-1",
      "us-west":        "us-west-1",
      "eu-ireland":     "eu-west-1",
      "apac-sin":       "ap-southeast-1",
      "apac-tokyo":     "ap-northeast-1",
      "apac-syd":       "ap-southeast-2"
    }

    var parseDisk = function (str) {
      if (str == "ebsonly") {
        return null
      }
      var disk = {}
      if (str.match(/^\s*(\d+)\s*x\s*(\d+)\s*(\w+)?\s*$/)) {
        disk.disks = +RegExp.$1
        disk.size = +RegExp.$2
        disk.ssd = RegExp.$3 == "SSD"
      } else if (str.match(/^\s*(\d+)\s*(\w+)\s*$/)) {
        disk.disks = 1
        disk.size = +RegExp.$1
        disk.ssd = RegExp.$2 == "SSD"
      } else {
        console.warn("Could not parse disk specs", str)
      }
      return disk
    }

    return function (awsPricingFeeds) {
      var instanceTypes = {}
      var regions = {}
      var operatingSystems = {}

      awsPricingFeeds.forEach(function (awsPricing) {
        awsPricing.config.regions.forEach(function (awsRegion) {
          var regionName = regionMap[awsRegion.region] || awsRegion.region
          regions[regionName] = regionName
          operatingSystems[awsPricing.operatingSystem] = awsPricing.operatingSystem

          if (awsRegion.instanceTypes) {
            awsRegion.instanceTypes.forEach(function (awsInstanceFamily) {
              awsInstanceFamily.sizes.forEach(function (awsInstanceType) {
                var instanceType = instanceTypes[awsInstanceType.size]
                if (!instanceType) {
                  instanceType = instanceTypes[awsInstanceType.size] = {}
                  instanceType.apiName = awsInstanceType.size
                  instanceType.cpus = awsInstanceType.vCPU
                  instanceType.ram = +awsInstanceType.memoryGiB
                  instanceType.disk = parseDisk(awsInstanceType.storageGB)
                  instanceType.prices = {}
                }
                awsInstanceType.valueColumns.forEach(function (awsValueColumn) {
                  var regionPrices = instanceType.prices[regionName]
                  if (!regionPrices) {
                    regionPrices = instanceType.prices[regionName] = {}
                  }
                  var pricingCategoryData = regionPrices[awsPricing.pricingCategory]
                  if (!pricingCategoryData) {
                    pricingCategoryData = regionPrices[awsPricing.pricingCategory] = {}
                  }
                  if (awsPricing.pricingCategory.match(/reservation/i) != null) {
                    var osPricing = pricingCategoryData[awsPricing.operatingSystem]
                    if (!osPricing) {
                      osPricing = pricingCategoryData[awsPricing.operatingSystem] = {}
                    }
                    osPricing[awsValueColumn.name] = +awsValueColumn.prices.USD
                  } else {
                    if (awsValueColumn.name != "ec2") {
                      pricingCategoryData[awsValueColumn.name] = +awsValueColumn.prices.USD
                    }
                  }
                })
              })
            })
          } else {
            // TODO: parse other pricing data
          }
        })
      })

      var instanceTypesList = []
      var regionList = []
      var operatingSystemsList = []

      angular.forEach(instanceTypes, function (instanceType) {
        instanceTypesList.push(instanceType)
      })

      angular.forEach(regions, function (region) {
        regionList.push(region)
      })

      angular.forEach(operatingSystems, function (operatingSystem) {
        if (operatingSystem && operatingSystem !== "") {
          operatingSystemsList.push(operatingSystem)
        }
      })

      return {
        regions: regionList,
        operatingSystems: operatingSystemsList,
        instanceTypes: instanceTypesList
      }
    }
  })

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
