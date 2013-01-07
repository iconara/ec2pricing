angular.injector(["ng", "ec2pricing.sorting"]).invoke(function (instanceTypeSorter) {
  describe("instaceTypeSorter", function () {
    var micro   = {api_name: "t1.micro",     ecus:  0, ram:  "613 MiB", disk_size: null,       disk_count: 0, architectures:     [64], io_performance: "low",       pricing: {linux: 1, mswin: 2, bogus: 3}}
    var xlarge  = {api_name: "m1.xlarge",    ecus:  8, ram:   "15 GiB", disk_size: "1680 GiB", disk_count: 4, architectures:     [64], io_performance: "high",      pricing: {linux: 3, mswin: 1, bogus: 3}}
    var cluster = {api_name: "cc2.8xlarge",  ecus: 88, ram: "60.5 GiB", disk_size: "3370 GiB", disk_count: 4, architectures:     [64], io_performance: "very high", pricing: {linux: 4, mswin: 4}}
    var medium  = {api_name: "c1.medium",    ecus:  5, ram:  "1.7 GiB", disk_size: "410 GiB",  disk_count: 1, architectures: [32, 64], io_performance: "moderate",  pricing: {linux: 2, mswin: 3, bogus: 3}}
    var unsorted = null

    beforeEach(function () {
      unsorted = [micro, xlarge, cluster, medium]
    })

    it("sorts by the specified field", function () {
      var sorted = instanceTypeSorter(unsorted, "ecus", true, "linux")
      expect(sorted).to.deep.equal([micro, medium, xlarge, cluster])
    })

    it("sorts descending", function () {
      var sorted = instanceTypeSorter(unsorted, "ecus", false, "linux")
      expect(sorted).to.deep.equal([cluster, xlarge, medium, micro])
    })

    it("sorts by api_name", function () {
      var sorted = instanceTypeSorter(unsorted, "api_name", true, "linux")
      expect(sorted).to.deep.equal([cluster, medium, micro, xlarge])
    })

    it("sorts by price for the specified OS", function () {
      var sorted = instanceTypeSorter(unsorted, "price", true, "mswin")
      expect(sorted).to.deep.equal([xlarge, micro, medium, cluster])
    })

    it("sorts instances without price for specified OS last", function () {
      var sorted = instanceTypeSorter(unsorted, "price", true, "bogus")
      expect(sorted[3]).to.deep.equal(cluster)
    })

    it("sorts by RAM, taking unit into account", function () {
      var sorted = instanceTypeSorter(unsorted, "ram", true, "linux")
      expect(sorted).to.deep.equal([micro, medium, xlarge, cluster])
    })

    it("sorts by disk size, taking unit into account, and always putting null last", function () {
      var sortedAscending = instanceTypeSorter(unsorted, "disk_size", true, "linux")
      var sortedDescending = instanceTypeSorter(unsorted, "disk_size", false, "linux")
      expect(sortedAscending).to.deep.equal([medium, xlarge, cluster, micro])
      expect(sortedDescending).to.deep.equal([cluster, xlarge, medium, micro])
    })

    it("sorts by disk count", function () {
      var sorted = instanceTypeSorter(unsorted, "disk_count", true, "linux")
      expect(sorted).to.deep.equal([micro, medium, xlarge, cluster])
    })

    it("sorts by architecture, 32/64 bit first", function () {
      var sorted = instanceTypeSorter(unsorted, "architectures", true, "linux")
      expect(sorted[0]).to.deep.equal(medium)
    })

    it("sorts by IO performance", function () {
      var sorted = instanceTypeSorter(unsorted, "io_performance", true, "linux")
      expect(sorted).to.deep.equal([micro, medium, xlarge, cluster])
    })
  })
})
