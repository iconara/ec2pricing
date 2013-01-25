(function () {
  "use strict"

  var TYPE_MAP = {
    "stdODI":          "m1",
    "secgenstdODI":    "m3",
    "uODI":            "t1",
    "hiMemODI":        "m2",
    "hiCPUODI":        "c1",
    "clusterComputeI": "cc1", // except 8xlarge which is "cc2"
    "clusterGPUI":     "cg1",
    "hiIoODI":         "hi1",
    "hiStoreODI":      "hs1",
    "clusterHiMemODI": "cr1",

    "stdSpot":         "m1",
    "secgenstdSpot":   "m3",
    "uSpot":           "t1",
    "hiMemSpot":       "m2",
    "hiCPUSpot":       "c1",
    "clusterHiMemSpot": "cr1"
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
    "apac-syd":   "ap-southeast-2",
    "sa-east-1":  "sa-east-1"
  }

  var module = angular.module("ec2pricing.pricing", [])

  module.factory("instanceTypesLoader", function ($http, instanceTypesByRegionUrl) {
    return {
      instanceTypesByRegion: function () {
        return $http.get(instanceTypesByRegionUrl).then(function (response) {
          return response.data
        })
      }
    }
  })

  module.factory("pricingLoader", function ($http, $window, $q, $rootScope, spotPricingUrl, pricingParser) {
    return {
      spot: function () {
        var deferred = $q.defer()
        $window.callback = function (response) {
          $window.callback = undefined
          $rootScope.$apply(function () { deferred.resolve(response) })
        }
        $http.jsonp(spotPricingUrl)
        return deferred.promise.then(function (data) {
          data = pricingParser(data)
          data.lastUpdated = new Date()
          return data
        })
      }
    }
  })

  module.factory("pricingParser", function ($log) {
    return function (pricingData) {
      var byRegion = {}
      _(pricingData.config.regions).each(function (region) {
        var canonicalRegion = REGION_MAP[region.region]
        var regionData = byRegion[canonicalRegion]
        if (!regionData) {
          regionData = byRegion[canonicalRegion] = {}
        }
        _(region.instanceTypes).each(function (instanceType) {
          _(instanceType.sizes).each(function (size) {
            if (instanceType.type in TYPE_MAP) {
              var typeGroup = TYPE_MAP[instanceType.type]
              var typeSize = SIZE_MAP[size.size]
              if (typeGroup == "cc1" && typeSize == "8xlarge") {
                typeGroup = "cc2"
              }
              var pricing = {}
              _(size.valueColumns).each(function (valueColumn) {
                pricing[valueColumn.name] = parseFloat(valueColumn.prices.USD) || null
              })
              regionData[typeGroup + "." + typeSize] = pricing
            } else {
              $log.warn("Unknown type group: " + instanceType.type)
            }
          })
        })
      })
      return {regions: byRegion}
    }
  })
})()