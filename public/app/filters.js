(function () {
  "use strict"

  var filters = angular.module("ec2pricing.filters", [])

  filters.filter("price", function (displaySettings) {
    var periodMultiplier = {
      "hourly": 1,
      "daily": 24,
      "weekly": 24 * 7,
      "monthly": 24 * 365.25/12,
      "yearly": 24 * 365.25
    }
    return function (input) {
      if (input == null || input === "") {
        return "n/a"
      }
      var hourlyPrice = input
      if (typeof input == "object" && "yrTerm1" in input) {
        var fixed = input[displaySettings.reservationTerm]
        var hourly = input[displaySettings.reservationTerm + "Hourly"]
        hourlyPrice = fixed/periodMultiplier["yearly"] + hourly
      }
      return "$" + (hourlyPrice * periodMultiplier[displaySettings.period]).toFixed(3)
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

  filters.filter("sortInstances", function (displaySettings) {
    var stringSort = function (field) {
      return function (a, b) {
        return a[field].localeCompare(b[field])
      }
    }
    var numberSort = function (field) {
      return function (a, b) {
        return a[field] - b[field]
      }
    }
    var diskSort = function (a, b) {
      if (a.disk == null && b.disk == null) {
        return 0
      } else if (a.disk == null) {
        return -1
      } else if (b.disk == null) {
        return 1
      } else {
        var aTotalSize = a.disk.disks * a.disk.size
        var bTotalSize = b.disk.disks * b.disk.size
        if (aTotalSize == bTotalSize) {
          if (a.ssd && b.ssd) {
            return 0
          } else if (a.ssd) {
            return -1
          } else {
            return 1
          }
        } else {
          return aTotalSize - bTotalSize
        }
      }
    }
    var priceSort = function (a, b) {
      return 0
    }
    var sortFunctions = {
      "apiName": stringSort("apiName"),
      "cpus": numberSort("cpus"),
      "ram": numberSort("ram"),
      "disk": diskSort,
      "reservedPrice": priceSort,
      "onDemandPrice": priceSort,
      "spotPrice": priceSort,
      "emrPrice": priceSort,
      "ebsOptimizedPrice": priceSort
    }
    return function (input) {
      var sorted = input.slice().sort(sortFunctions[displaySettings.sortField] || sortFunctions["apiName"])
      if (!displaySettings.sortAscending) {
        sorted.reverse()
      }
      return sorted
    }
  })
}())