angular.injector(["ng", "ec2pricing.sorting"]).invoke(function (instanceTypeSorter) {
  describe("instaceTypeSorter", function () {
    var micro   = {type: "t1.micro",     ecus:  0, ram:  "613 MB", architectures:     [64], io: "low",       pricing: {linux: 1, mswin: 2, bogus: 3}}
    var xlarge  = {type: "m1.xlarge",    ecus:  8, ram:   "15 GB", architectures:     [64], io: "high",      pricing: {linux: 3, mswin: 1, bogus: 3}}
    var cluster = {type: "cc2.8xlarge",  ecus: 88, ram: "60.5 GB", architectures:     [64], io: "very high", pricing: {linux: 4, mswin: 4}}
    var medium  = {type: "c1.medium",    ecus:  5, ram:  "1.7 GB", architectures: [32, 64], io: "moderate",  pricing: {linux: 2, mswin: 3, bogus: 3}}
    var unsorted = null

    beforeEach(function () {
      unsorted = [micro, xlarge, cluster, medium]
    })

    it("sorts by the specified field", function () {
      var sorted = instanceTypeSorter(unsorted, "ecus", true, "linux")
      expect(sorted).toEqual([micro, medium, xlarge, cluster])
    })

    it("sorts descending", function () {
      var sorted = instanceTypeSorter(unsorted, "ecus", false, "linux")
      expect(sorted).toEqual([cluster, xlarge, medium, micro])
    })

    it("sorts by type", function () {
      var sorted = instanceTypeSorter(unsorted, "type", true, "linux")
      expect(sorted).toEqual([cluster, medium, micro, xlarge])
    })

    it("sorts by price for the specified OS", function () {
      var sorted = instanceTypeSorter(unsorted, "price", true, "mswin")
      expect(sorted).toEqual([xlarge, micro, medium, cluster])
    })

    it("sorts instances without price for specified OS last", function () {
      var sorted = instanceTypeSorter(unsorted, "price", true, "bogus")
      expect(sorted[3]).toEqual(cluster)
    })

    it("sorts by RAM, taking unit into account", function () {
      var sorted = instanceTypeSorter(unsorted, "ram", true, "linux")
      expect(sorted).toEqual([micro, medium, xlarge, cluster])
    })

    it("sorts by architecture, 32/64 bit first", function () {
      var sorted = instanceTypeSorter(unsorted, "architectures", true, "linux")
      expect(sorted[0]).toEqual(medium)
    })

    it("sorts by IO performance", function () {
      var sorted = instanceTypeSorter(unsorted, "io", true, "linux")
      expect(sorted).toEqual([micro, medium, xlarge, cluster])
    })
  })
})
