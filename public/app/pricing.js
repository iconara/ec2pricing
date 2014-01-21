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
    function iframedJsonp(url, callbackName, callback) {
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
        callback(result)
      }
      frame.contentDocument.body.appendChild(script)
    }

    return {
      spot: function () {
        var deferred = $q.defer()
        iframedJsonp(spotPricingUrl, "callback", function (result) {
          $rootScope.$apply(function () { deferred.resolve(result) })
        })
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