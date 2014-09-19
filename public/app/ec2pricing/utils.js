(function () {
  "use strict"

  var utils = angular.module("ec2pricing.utils")

  utils.factory("jsonpLoader", ["$window", "$rootScope", "$q", function ($window, $rootScope, $q) {
    return function (url, callbackName) {
      var deferred = $q.defer()
      var frame = $window.document.createElement('IFRAME')
      frame.src = 'about:blank'
      frame.height = '0px'
      frame.width = '0px'
      frame.style['background-color'] = 'transparent'
      frame.style['border'] = '0px none transparent'
      frame.style['padding'] = '0px'
      frame.style['overflow'] = 'hidden'
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
  }])

  utils.factory("cache", ["$window", "$q", function ($window, $q) {
    return function (key, producer, _args) {
      var cacheKey = "ec2pricing:" + key
      var value = $window.localStorage[cacheKey]
      if (value && value.time + 1800000 < (new Date().getTime())) {
        return $q.when(angular.fromJson(value))
      } else {
        var args = Array.prototype.slice.apply(arguments)
        args.shift()
        args.shift()
        return producer.apply(null, args).then(function (value) {
          localStorage[cacheKey] = angular.toJson({time: new Date().getTime(), value: value})
          return value
        })
      }
    }
  }])

  utils.factory("awsDataParser", ["instanceTypeExtras", function (instanceTypeExtras) {
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

    return function (awsPricingFeeds) {
      var instanceTypes = {}
      var regions = {}
      var operatingSystems = {}

      awsPricingFeeds.forEach(function (awsPricing) {
        var operatingSystem = guessOsFromUrl(awsPricing.url)
        var pricingCategory = guessCategoryFromUrl(awsPricing.url)

        awsPricing.config.regions.forEach(function (awsRegion) {
          var regionName = regionMap[awsRegion.region] || awsRegion.region
          regions[regionName] = regionName

          if (awsRegion.instanceTypes) {
            if (operatingSystem) {
              operatingSystems[operatingSystem.toLowerCase()] = operatingSystem.toLowerCase()
            }

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
                  var pricingCategoryData = regionPrices[pricingCategory]
                  if (!pricingCategoryData) {
                    pricingCategoryData = regionPrices[pricingCategory] = {}
                  }
                  if (pricingCategory.match(/reservation/i) != null) {
                    var osPricing = pricingCategoryData[operatingSystem]
                    if (!osPricing) {
                      osPricing = pricingCategoryData[operatingSystem] = {}
                    }
                    osPricing[awsValueColumn.name] = +awsValueColumn.prices.USD
                  } else {
                    if (awsValueColumn.name == "os") {
                      pricingCategoryData[operatingSystem] = +awsValueColumn.prices.USD
                    } else if (awsValueColumn.name == "ebsOptimized") {
                      pricingCategoryData[awsValueColumn.name] = +awsValueColumn.prices.USD
                    } else if (awsValueColumn.name != "ec2") {
                      pricingCategoryData[awsValueColumn.name.toLowerCase()] = +awsValueColumn.prices.USD
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
        var extras = instanceTypeExtras[instanceType.apiName]
        if (extras) {
          angular.extend(instanceType, extras)
        }
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
  }])

  utils.factory("pricingDataLoader", ["$q", "pricingUrls", "jsonpLoader", "cache", "awsDataParser", function ($q, pricingUrls, jsonpLoader, cache, awsDataParser) {
    var load = function () {
      var promises = pricingUrls.map(function (url) {
        return cache(url, jsonpLoader, url, "callback").then(function (data) {
          data.url = url
          return data
        })
      })
      return $q.all(promises).then(awsDataParser)
    }
    return {
      load: load
    }
  }])
}())
