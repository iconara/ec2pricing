angular.injector(["ng", "ec2pricing.filters"]).invoke(function ($filter) {
  describe("disks", function () {
    var diskFilter = $filter("disks")
    var exampleDisk = {disks: 3, size: 100}

    it("returns a string with the number of disks and each disk's size", function () {
      expect(diskFilter(exampleDisk)).to.match(/^3\s.\s100\sGB$/)
    })

    it("uses non-breaking spaces and multiplication signs instead of spaces and x:s", function () {
      expect(diskFilter(exampleDisk)).to.equal("3\u00A0×\u00A0100\u00A0GB")
    })

    it("appends \"SSD\" when the instance has SSD disks", function () {
      exampleDisk.ssd = true
      expect(diskFilter(exampleDisk)).to.match(/SSD$/)
    })

    it("returns \"n/a\" when given null", function () {
      expect(diskFilter(null)).to.equal("n/a")
    })
  })

  describe("totalDisk", function () {
    var totalDiskFilter = $filter("totalDisk")
    var exampleDisk = {disks: 3, size: 100}

    it("returns the total disk size", function () {
      expect(totalDiskFilter(exampleDisk)).to.equal(300)
    })

    it("returns \"n/a\" when given null", function () {
      expect(totalDiskFilter(null)).to.equal("n/a")
    })
  })
})