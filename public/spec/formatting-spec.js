angular.injector(["ng", "ec2Pricing"]).invoke(function ($filter) {
  describe("timeAgo", function () {
    var timeAgo
    var referenceTime

    var subtractTime = function (date, seconds) {
      return new Date(date.getTime() - (seconds * 1000))
    }

    var secondsAgo = function (seconds) {
      return subtractTime(new Date("Sat Jun 30 2012 22:10:28 GMT+0200 (CEST)"), seconds)
    }

    beforeEach(function () {
      timeAgoFilter = $filter("timeAgo")
      referenceTime = new Date("Sat Jun 30 2012 22:10:28 GMT+0200 (CEST)")
    })

    it("returns an empty string when the date is null", function () {
      expect(timeAgoFilter(null, referenceTime)).toEqual("")
    })

    it("returns \"seconds ago\" when the difference is less than a minute", function () {
      expect(timeAgoFilter(secondsAgo(3), referenceTime)).toEqual("seconds ago")
    })

    it("returns \"minutes ago\" when the difference is less than five minutes", function () {
      expect(timeAgoFilter(secondsAgo(250), referenceTime)).toEqual("minutes ago")
    })

    it("returns \"N minutes ago\" when the difference is less than 50 minutes", function () {
      expect(timeAgoFilter(secondsAgo(60 * 6), referenceTime)).toEqual("6 minutes ago")
      expect(timeAgoFilter(secondsAgo(60 * 46), referenceTime)).toEqual("46 minutes ago")
      expect(timeAgoFilter(secondsAgo(60 * 54), referenceTime)).not.toEqual("54 minutes ago")
    })

    it("returns \"about an hour ago\" when the difference is between 50 and 80 minutes", function () {
      expect(timeAgoFilter(secondsAgo(60 * 51), referenceTime)).toEqual("about an hour ago")
      expect(timeAgoFilter(secondsAgo(60 * 67), referenceTime)).toEqual("about an hour ago")
      expect(timeAgoFilter(secondsAgo(60 * 79), referenceTime)).toEqual("about an hour ago")
      expect(timeAgoFilter(secondsAgo(60 * 81), referenceTime)).not.toEqual("about an hour ago")
    })

    it("returns \"more than an hour ago\" when the difference is between 80 and 120 minutes", function () {
      expect(timeAgoFilter(secondsAgo(60 *  81), referenceTime)).toEqual("more than an hour ago")
      expect(timeAgoFilter(secondsAgo(60 *  90), referenceTime)).toEqual("more than an hour ago")
      expect(timeAgoFilter(secondsAgo(60 * 115), referenceTime)).toEqual("more than an hour ago")
      expect(timeAgoFilter(secondsAgo(60 * 120), referenceTime)).not.toEqual("more than an hour ago")
    })

    it("returns \"about N hours ago\" when the difference is between 2 and 18 hours", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 *  2), referenceTime)).toEqual("about 2 hours ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 *  4), referenceTime)).toEqual("about 4 hours ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 17), referenceTime)).toEqual("about 17 hours ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 18), referenceTime)).not.toEqual("about 18 hours ago")
    })

    it("returns \"about a day ago\" when the difference is between 18 and 26 hours", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 18), referenceTime)).toEqual("about a day ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24), referenceTime)).toEqual("about a day ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 25), referenceTime)).toEqual("about a day ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 26), referenceTime)).not.toEqual("about a day ago")
    })

    it("returns \"yesterday\" when the difference is between 26 and 40 hours", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 26), referenceTime)).toEqual("yesterday")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 39), referenceTime)).toEqual("yesterday")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 40), referenceTime)).not.toEqual("yesterday")
    })

    it("returns \"N days ago\" when the difference is more than 40 hours, but less than 6 days", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 2), referenceTime)).toEqual("2 days ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 4), referenceTime)).toEqual("4 days ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 6), referenceTime)).not.toEqual("6 days ago")
    })

    it("returns \"about a week ago\" when the difference is between 6 and 10 days", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 *  6), referenceTime)).toEqual("about a week ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 *  9), referenceTime)).toEqual("about a week ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 10), referenceTime)).not.toEqual("about a week ago")
    })

    it("returns \"more than a week ago\" when the difference is between 10 and 14 days", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 10), referenceTime)).toEqual("more than a week ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 12), referenceTime)).toEqual("more than a week ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 14), referenceTime)).not.toEqual("more than a week ago")
    })

    it("returns \"N weeks ago\" when the difference is between 14 and 25 days", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 14), referenceTime)).toEqual("2 weeks ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 20), referenceTime)).toEqual("3 weeks ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 30), referenceTime)).not.toEqual("4 weeks ago")
    })

    it("returns \"about a month ago\" when the difference is between 25 and 40 days", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 25), referenceTime)).toEqual("about a month ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 30), referenceTime)).toEqual("about a month ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 40), referenceTime)).not.toEqual("about a month ago")
    })

    it("returns \"N months ago\" when the difference is between 40 and 340 days", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 *  40), referenceTime)).toEqual("2 months ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 100), referenceTime)).toEqual("4 months ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 300), referenceTime)).toEqual("10 months ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 350), referenceTime)).not.toEqual("11 months ago")
    })

    it("returns \"about a year ago\" when the difference is between 340 and 380 days", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 340), referenceTime)).toEqual("about a year ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 360), referenceTime)).toEqual("about a year ago")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 380), referenceTime)).not.toEqual("about a year ago")
    })

    it("returns \"in the distant past\" when the difference is more than 380 days", function () {
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 380), referenceTime)).toEqual("in the distant past")
      expect(timeAgoFilter(secondsAgo(60 * 60 * 24 * 112312), referenceTime)).toEqual("in the distant past")
    })
  })
})
