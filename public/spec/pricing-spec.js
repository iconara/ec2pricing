angular.injector(["ng", "ec2Pricing"]).invoke(function ($http, pricingParser) {
  var pricing = {}

  describe("pricingParser", function () {
    beforeEach(function () {
      var check = function () {
        return pricing.spotInstance && pricing.onDemandInstance
      }
      runs(function () {
        if (!check()) {
          var spotInstancePricingFuture = $http.get("spec/data/spot-instance-prices.json")
          var onDemandInstancePricingFuture = $http.get("spec/data/on-demand-instance-prices.json")
          spotInstancePricingFuture.success(function (data, status, headers, config) {
            pricing.spotInstance = pricingParser(data)
          })
          onDemandInstancePricingFuture.success(function (data, status, headers, config) {
            pricing.onDemandInstance = pricingParser(data)
          })
        }
      })
      waitsFor(check)
    })

    var findByType = function (instanceTypes, type) {
      return _(instanceTypes).find(function (instanceType) {
        return instanceType.type == type
      })
    }

    var sharedPricingExamples = function (type) {
      describe("(shared)", function () {
        it("returns an object with the API name of the regions as keys", function () {
          expect(pricing[type]["us-east-1"]).toBeDefined()
          expect(pricing[type]["eu-west-1"]).toBeDefined()
        })

        it("sets the name property of the regions", function () {
          expect(pricing[type]["us-east-1"].name).toMatch(/US East/)
          expect(pricing[type]["eu-west-1"].name).toMatch(/Ireland/)
        })

        it("sets the API name property of the regions", function () {
          expect(pricing[type]["us-east-1"].apiName).toMatch("us-east-1")
          expect(pricing[type]["eu-west-1"].apiName).toMatch("eu-west-1")
        })

        it("creates a list of instance types for each region", function () {
          expect(pricing[type]["eu-west-1"].instanceTypes.length).toBeGreaterThan(0)
        })

        it("correctly maps the cc2.8xlarge instance type", function () {
          var instanceTypes = pricing[type]["eu-west-1"].instanceTypes
          var cc2_8xlarge = findByType(instanceTypes, "cc2.8xlarge")
          expect(cc2_8xlarge).toBeDefined()
        })

        it("sets the price to null where N/A", function () {
          var instanceTypes = pricing.onDemandInstance["eu-west-1"].instanceTypes
          var instanceType = findByType(instanceTypes, "cg1.4xlarge")
          expect(instanceType.pricing.linux).toBeNull()
        })
      })
    }

    describe("spot instance pricing", function () {
      sharedPricingExamples("spotInstance")

      it("creates an instance type object for each instance type and region", function () {
        var instanceType = pricing.spotInstance['eu-west-1'].instanceTypes[0]
        expect(instanceType.type).toEqual("m1.small")
        expect(instanceType.pricing).toEqual({linux: 0.016, mswin: 0.032})
      })
    })

    describe("on demand instance pricing", function () {
      sharedPricingExamples("onDemandInstance")

      it("creates an instance type object for each instance type and region", function () {
        var instanceType = pricing.onDemandInstance["eu-west-1"].instanceTypes[0]
        expect(instanceType.type).toEqual("m1.small")
        expect(instanceType.pricing).toEqual({linux: 0.085, mswin: 0.115})
      })
    })
  })
})

angular.module("ec2PricingMock", []).factory("pricingParser", function () {
  return function (pricing) {
    return {parsed: pricing}
  }
})

angular.injector(["ng", "ngMock", "ec2Pricing", "ec2PricingMock"]).invoke(function ($httpBackend, $http, $window, pricingLoader, pricingParser) {
  describe("pricingLoader", function () {
    var fakeOnDemandResponse = "FAKE_ON_DEMAND_PRICING"
    var fakeSpotResponse = "FAKE_SPOT_PRICING"

    beforeEach(function () {
      $httpBackend.when("GET", "data/pricing-on-demand-instances.json").respond(fakeOnDemandResponse)
      $httpBackend.whenJSONP("http://spot-price.s3.amazonaws.com/spot.js").respond(null) // see test for explanation for null here
    })

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
    })

    it("loads on-demand pricing data and parses it with pricingParser", function () {
      var pricing
      pricingLoader.onDemand().then(function (p) { pricing = p })
      $httpBackend.flush()
      expect(pricing).toEqual(pricingParser(fakeOnDemandResponse))
    })

    it("loads spot pricing data and parses it with pricingParser", function () {
      // the spot prices are loaded with JSONP, but the resource has a fixed 
      // callback name, so we need to jump though some hoops to emulate that here
      var pricing
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
      runs(function () {
        expect(pricing).toEqual(pricingParser(fakeSpotResponse))
      })
    })
  })
})

angular.injector(["ng", "ngMock", "ec2Pricing"]).invoke(function ($httpBackend, instanceTypesLoader) {
  describe("instanceTypesLoader", function () {
    beforeEach(function () {
      $httpBackend.when("GET", "data/instance-types.json").respond({"m1.small": {}})
    })

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
    })

    it("loads instance type data", function () {
      var instanceTypes
      instanceTypesLoader.instanceTypes().then(function (types) {
        instanceTypes = types
      })
      $httpBackend.flush()
      expect(instanceTypes).toEqual({"m1.small": {}})
    })
  })
})