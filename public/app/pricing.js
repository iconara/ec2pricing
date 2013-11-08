(function () {
  "use strict"

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
            var pricing = {}
            _(size.valueColumns).each(function (valueColumn) {
              pricing[valueColumn.name] = parseFloat(valueColumn.prices.USD) || null
            })
            regionData[size.size] = pricing
          })
        })
      })
      return {regions: byRegion}
    }
  })
})()