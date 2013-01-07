angular.injector(["ng", "ec2pricing.pricing"]).invoke(function ($http, pricingParser) {
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
          expect(pricing[type].regions["us-east-1"]).toBeDefined()
          expect(pricing[type].regions["eu-west-1"]).toBeDefined()
        })

        it("sets the name property of the regions", function () {
          expect(pricing[type].regions["us-east-1"].name).toMatch(/US East/)
          expect(pricing[type].regions["eu-west-1"].name).toMatch(/Ireland/)
        })

        it("sets the API name property of the regions", function () {
          expect(pricing[type].regions["us-east-1"].apiName).toMatch("us-east-1")
          expect(pricing[type].regions["eu-west-1"].apiName).toMatch("eu-west-1")
        })

        it("creates a list of instance types for each region", function () {
          expect(pricing[type].regions["eu-west-1"].instanceTypes.length).toBeGreaterThan(0)
        })

        it("correctly maps the cc2.8xlarge instance type", function () {
          var instanceTypes = pricing[type].regions["eu-west-1"].instanceTypes
          var cc2_8xlarge = findByType(instanceTypes, "cc2.8xlarge")
          expect(cc2_8xlarge).toBeDefined()
        })

        it("sets the price to null where N/A", function () {
          var instanceTypes = pricing.onDemandInstance.regions["eu-west-1"].instanceTypes
          var instanceType = findByType(instanceTypes, "cg1.4xlarge")
          expect(instanceType.pricing.linux).toBeNull()
        })
      })
    }

    describe("with spot instance pricing data", function () {
      sharedPricingExamples("spotInstance")

      it("creates an instance type object for each instance type and region", function () {
        var instanceType = pricing.spotInstance.regions['eu-west-1'].instanceTypes[0]
        expect(instanceType.type).toEqual("m1.small")
        expect(instanceType.pricing).toEqual({linux: 0.016, mswin: 0.032})
      })
    })

    describe("with on demand instance pricing data", function () {
      sharedPricingExamples("onDemandInstance")

      it("creates an instance type object for each instance type and region", function () {
        var instanceType = pricing.onDemandInstance.regions["eu-west-1"].instanceTypes[0]
        expect(instanceType.type).toEqual("m1.small")
        expect(instanceType.pricing).toEqual({linux: 0.085, mswin: 0.115})
      })
    })
  })
})

angular.module("ec2PricingMock", []).factory("pricingParser", function () {
  return function (pricing) {
    return {regions: pricing}
  }
})

angular.injector(["ng", "ngMock", "ec2Pricing", "ec2PricingMock"]).invoke(function ($httpBackend, $http, $window, onDemandPricingUrl, spotPricingUrl, pricingLoader, pricingParser) {
  describe("pricingLoader", function () {
    var fakeOnDemandResponse = "FAKE ON DEMAND RESPONSE"
    var fakeSpotResponse = "FAKE SPOT RESPONSE"

    beforeEach(function () {
      $httpBackend.when("GET", onDemandPricingUrl).respond(fakeOnDemandResponse, {"Last-Modified": "Sat, 30 Jun 2012 18:47:26 GMT"})
      $httpBackend.whenJSONP(spotPricingUrl).respond(null) // see test for explanation for null here
    })

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation()
      $httpBackend.verifyNoOutstandingRequest()
    })

    describe("when loading on demand instance pricing", function () {
      var pricing

      beforeEach(function () {
        pricingLoader.onDemand().then(function (p) { pricing = p })
        $httpBackend.flush()
      })

      it("loads data and parses it with pricingParser", function () {
        expect(pricing.regions).toEqual(fakeOnDemandResponse)
      })
      
      it("sets the lastUpdated property", function () {
        expect(pricing.lastUpdated).toEqual(new Date("Sat, 30 Jun 2012 18:47:26 GMT"))
      })
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

angular.injector(["ng", "ngMock", "ec2Pricing"]).invoke(function ($httpBackend, instanceTypesUrl, instanceTypesLoader) {
  describe("instanceTypesLoader", function () {
    beforeEach(function () {
      $httpBackend.when("GET", instanceTypesUrl).respond([{"api_name": "m1.small"}])
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
      expect(instanceTypes).toEqual({"m1.small": {"api_name": "m1.small"}})
    })
  })
})