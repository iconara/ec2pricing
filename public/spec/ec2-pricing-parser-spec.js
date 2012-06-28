(function () {
  var $injector = angular.injector(["ng"])

  var pricing = {}

  describe("parseEc2Pricing", function () {
    beforeEach(function () {
      var check = function () {
        return pricing.spotInstance && pricing.onDemandInstance
      }
      runs(function () {
        if (!check()) {
          $injector.invoke(function ($http) {
            var spotInstancePricingFuture = $http.get("spec/data/spot-instance-prices.json")
            var onDemandInstancePricingFuture = $http.get("spec/data/on-demand-instance-prices.json")
            spotInstancePricingFuture.success(function (data, status, headers, config) {
              pricing.spotInstance = parseEc2Pricing(data)
            })
            onDemandInstancePricingFuture.success(function (data, status, headers, config) {
              pricing.onDemandInstance = parseEc2Pricing(data)
            })
          })
        }
      })
      waitsFor(check)
    })

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
      })
    }

    describe("spot instance pricing", function () {
      sharedPricingExamples("spotInstance")

      it("creates an instance type object for each instance type and region", function () {
        var instanceType = pricing.spotInstance['eu-west-1'].instanceTypes[0]
        expect(instanceType.type).toEqual("m1.small")
        expect(instanceType.pricing).toEqual({linux: "0.016", mswin: "0.032"})
      })
    })

    describe("on demand instance pricing", function () {
      sharedPricingExamples("onDemandInstance")

      it("creates an instance type object for each instance type and region", function () {
        var instanceType = pricing.onDemandInstance["eu-west-1"].instanceTypes[0]
        expect(instanceType.type).toEqual("m1.small")
        expect(instanceType.pricing).toEqual({linux: "0.085", mswin: "0.115"})
      })
    })
  })
})()