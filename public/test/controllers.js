describe("displaySettings", function () {
  var fakeLocalStorage
  var displaySettings

  beforeEach(function () {
    fakeLocalStorage = {foo: "bar"}
    angular.module("test", []).constant("localStorage", fakeLocalStorage)
    displaySettings = angular.injector(["ng", "ec2pricing", "test"]).get("displaySettings")
  })

  describe("save", function () {
    it("saves itself to the provided object", function (done) {
      displaySettings.save().then(function () {
        var savedObject = angular.fromJson(fakeLocalStorage["ec2pricing:displaySettings"])
        expect(savedObject.region).to.equal(displaySettings.region)
        expect(savedObject.operatingSystem).to.equal(displaySettings.operatingSystem)
        expect(savedObject.reservationType).to.equal(displaySettings.reservationType)
        expect(savedObject.reservationTerm).to.equal(displaySettings.reservationTerm)
        expect(savedObject.period).to.equal(displaySettings.period)
        expect(savedObject.sortField).to.equal(displaySettings.sortField)
        expect(savedObject.sortAscending).to.equal(displaySettings.sortAscending)
        done()
      })
    })
  })

  describe("load", function () {
    it("loads itself from the provided object", function (done) {
      var savedState = {
        region: "REGION",
        operatingSystem: "OPERATING_SYSTEM",
        reservationType: "RESERVATION_TYPE",
        reservationTerm: "RESERVATION_TERM",
        period: "PERIOD",
        sortField: "SORT_FIELD",
        sortAscending: "SORT_ASCENDING"
      }
      fakeLocalStorage["ec2pricing:displaySettings"] = angular.toJson(savedState)
      displaySettings.load().then(function () {
        expect(displaySettings.region).to.equal(savedState.region)
        expect(displaySettings.operatingSystem).to.equal(savedState.operatingSystem)
        expect(displaySettings.reservationType).to.equal(savedState.reservationType)
        expect(displaySettings.reservationTerm).to.equal(savedState.reservationTerm)
        expect(displaySettings.period).to.equal(savedState.period)
        expect(displaySettings.sortField).to.equal(savedState.sortField)
        expect(displaySettings.sortAscending).to.equal(savedState.sortAscending)
        done()
      })
    })

    it("loads a partial state, preserving the defaults", function (done) {
      var savedState = {region: "REGION", bogus: 3}
      fakeLocalStorage["ec2pricing:displaySettings"] = angular.toJson(savedState)
      displaySettings.load().then(function () {
        expect(displaySettings.bogus).to.equal(3)
        expect(displaySettings.region).to.equal(savedState.region)
        expect(displaySettings.operatingSystem).to.not.be.null
        expect(displaySettings.reservationType).to.not.be.null
        expect(displaySettings.reservationTerm).to.not.be.null
        expect(displaySettings.period).to.not.be.null
        expect(displaySettings.sortField).to.not.be.null
        expect(displaySettings.sortAscending).to.not.be.null
        done()
      })
    })
  })

  describe("update", function () {
    it("updates a setting", function () {
      displaySettings.update("region", "af-west-3")
      expect(displaySettings.region).to.equal("af-west-3")
    })

    it("saves itself automatically", function (done) {
      displaySettings.update("region", "af-west-3").then(function () {
        var savedObject = angular.fromJson(fakeLocalStorage["ec2pricing:displaySettings"])
        expect(savedObject.region).to.equal("af-west-3")
        done()
      })
    })
  })
})