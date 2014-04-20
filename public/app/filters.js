(function () {
  "use strict"

  var filters = angular.module("ec2pricing.filters", [])

  filters.filter("price", function () {
    var periodMultiplier = {
      "hourly": 1,
      "daily": 24,
      "weekly": 24 * 7,
      "monthly": 24 * 365.25/12,
      "yearly": 24 * 365.25
    }
    return function (input, period, reservationTerm) {
      if (input == null || input === "") {
        return "n/a"
      }
      var hourlyPrice = input
      if (typeof input == "object" && "yrTerm1" in input) {
        var fixed = input[reservationTerm]
        var hourly = input[reservationTerm + "Hourly"]
        hourlyPrice = fixed/periodMultiplier["yearly"] + hourly
      }
      return "$" + (hourlyPrice * periodMultiplier[period]).toFixed(3)
    }
  })

  filters.filter("disks", function () {
    return function (input) {
      if (input == null) {
        return "n/a"
      } else {
        var str = input.disks + "\u00A0×\u00A0" + input.size + "\u00A0GB"
        if (input.ssd) {
          str += "\u00A0SSD"
        }
        return str
      }
    }
  })
}())