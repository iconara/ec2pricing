angular.injector(["ng", "ec2pricing.filters"]).invoke(function ($filter) {
  describe("totalDisk", function () {
    var totalDiskFilter = $filter("totalDisk")
    var exampleDisk = {disks: 3, size: 100}

    it("returns the total disk size", function () {
      expect(totalDiskFilter(exampleDisk)).to.equal(300)
    })

    it("returns n/a when given null", function () {
      expect(totalDiskFilter(null)).to.equal("n/a")
    })
  })
})