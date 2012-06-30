(function () {
  "use strict"

  var TYPE_MAP = {
    "stdODI":          "m1",
    "uODI":            "t1",
    "hiMemODI":        "m2",
    "hiCPUODI":        "c1",
    "clusterComputeI": "cc1",
    "clusterGPUI":     "cg1",

    "stdSpot":         "m1",
    "uSpot":           "t1",
    "hiMemSpot":       "m2",
    "hiCPUSpot":       "c1"
  }

  var SIZE_MAP = {
    "sm":        "small",
    "med":       "medium",
    "lg":        "large",
    "xl":        "xlarge",
    "u":         "micro",
    "xxl":       "2xlarge",
    "xxxxl":     "4xlarge",
    "xxxxxxxxl": "8xlarge"
  }

  var REGION_MAP = {
    "us-east":    "us-east-1",
    "us-west-2":  "us-west-2",
    "us-west":    "us-west-1",
    "eu-ireland": "eu-west-1",
    "apac-sin":   "ap-southeast-1",
    "apac-tokyo": "ap-northeast-1",
    "sa-east-1":  "sa-east-1"
  }

  var REGION_NAMES = {
    "us-east-1":      "US East (Virginia)",
    "us-west-2":      "US West (Oregon)",
    "us-west-1":      "US West (Northern California)",
    "eu-west-1":      "EU (Ireland)",
    "ap-southeast-1": "Asia Pacific (Singapore)",
    "ap-northeast-1": "Asia Pacific (Tokyo)",
    "sa-east-1":      "South America (Sao Paulo)"
  }

  var ON_DEMAND_PRICING_URL = "data/pricing-on-demand-instances.json"
  var SPOT_PRICING_URL = "http://spot-price.s3.amazonaws.com/spot.js"

  var module = angular.module("ec2Pricing")

  module.factory("pricingLoader", function ($http, $window, $q, $rootScope, pricingParser) {
    return {
      onDemand: function () {
        return $http.get(ON_DEMAND_PRICING_URL).then(function (response) {
          return pricingParser(response.data)
        })
      },
      spot: function () {
        var deferred = $q.defer()
        $window.callback = function (response) {
          $window.callback = undefined
          $rootScope.$apply(function () { deferred.resolve(response) })
        }
        $http.jsonp(SPOT_PRICING_URL)
        return deferred.promise.then(pricingParser)
      }
    }
  })

  module.factory("pricingParser", function () {
    return function (pricingData) {
      var byRegion = {}
      _(pricingData.config.regions).each(function (region) {
        var canonicalRegion = REGION_MAP[region.region]
        var regionData = byRegion[canonicalRegion]
        if (!regionData) {
          regionData = byRegion[canonicalRegion] = {
            name: REGION_NAMES[canonicalRegion],
            apiName: canonicalRegion,
            instanceTypes: []
          }
        }
        _(region.instanceTypes).each(function (instanceType) {
          _(instanceType.sizes).each(function (size) {
            var instanceTypeData = {
              type: TYPE_MAP[instanceType.type] + "." + SIZE_MAP[size.size],
              pricing: {}
            }
            _(size.valueColumns).each(function (valueColumn) {
              instanceTypeData.pricing[valueColumn.name] = valueColumn.prices.USD
            })
            regionData.instanceTypes.push(instanceTypeData)
          })
        })
      })
      return byRegion
    }
  })
})()