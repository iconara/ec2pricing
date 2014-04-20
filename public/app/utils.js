(function () {
  "use strict"

  var utils = angular.module("ec2pricing.utils", [])

  utils.factory("jsonpLoader", function ($window, $rootScope, $q) {
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
  })

  utils.factory("cache", function ($window, $q) {
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
  })

  utils.factory("awsDataParser", function () {
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

          if (awsRegion.instanceTypes) {
            if (awsPricing.operatingSystem) {
              operatingSystems[awsPricing.operatingSystem.toLowerCase()] = awsPricing.operatingSystem.toLowerCase()
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
                    if (awsValueColumn.name == "os") {
                      pricingCategoryData[awsPricing.operatingSystem] = +awsValueColumn.prices.USD
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
}())
