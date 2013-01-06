angular.injector(["ng", "ec2pricing.pricing"]).invoke(function ($http, pricingParser) {
  var pricing = null

  describe("pricingParser", function () {
    beforeEach(function () {
      var check = function () {
        return pricing
      }
      runs(function () {
        if (!check()) {
          var spotInstancePricingFuture = $http.get("spec/data/spot-instance-prices.json")
          spotInstancePricingFuture.success(function (data, status, headers, config) {
            pricing = pricingParser(data).regions
          })
        }
      })
      waitsFor(check)
    })

    describe("with spot instance pricing data", function () {
      it("returns an object with the API name of the regions as keys", function () {
        expect(pricing["us-east-1"]).toBeDefined()
        expect(pricing["eu-west-1"]).toBeDefined()
      })

      it("correctly maps the cc2.8xlarge instance type", function () {
        var cc2_8xlarge = pricing["eu-west-1"]["cc2.8xlarge"]
        expect(cc2_8xlarge).toBeDefined()
      })

      it("sets the price to null where N/A", function () {
        var cc1_4xlarge = pricing["eu-west-1"]["cc1.4xlarge"]
        expect(cc1_4xlarge.linux).toBeNull()
      })

      it("creates an instance type object for each instance type and region", function () {
        var m1_small = pricing["eu-west-1"]["m1.small"]
        expect(m1_small).toEqual({linux: 0.016, mswin: 0.032})
      })
    })
  })
})

angular.module("ec2PricingMock", []).factory("pricingParser", function () {
  return function (pricing) {
    return {regions: pricing}
  }
})

angular.injector(["ng", "ngMock", "ec2Pricing", "ec2PricingMock"]).invoke(function ($httpBackend, $http, $window, spotPricingUrl, pricingLoader, pricingParser) {
  describe("pricingLoader", function () {
    var fakeSpotResponse = "FAKE SPOT RESPONSE"

    beforeEach(function () {
      $httpBackend.whenJSONP(spotPricingUrl).respond(null) // see test for explanation for null here
    })

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
    })

    describe("when loading spot instance pricing", function () {
      var pricing

      beforeEach(function () {
        // the spot prices are loaded with JSONP, but the resource has a fixed 
        // callback name, so we need to jump though some hoops to emulate that here
        runs(function () {
          pricingLoader.spot().then(function (p) { pricing = p })
          $httpBackend.flush()
        })
        waitsFor(function () {
          if ($window.callback) {
            $window.callback(fakeSpotResponse)
          }
          return !!pricing
        })
      })

      it("loads data and parses it with pricingParser", function () {
        expect(pricing.regions).toEqual(fakeSpotResponse)
      })

      it("sets the lastUpdated property to the current time", function () {
        var timeDiff = new Date().getTime() - pricing.lastUpdated.getTime()
        expect(timeDiff).toBeLessThan(100)
      })
    })
  })
})
