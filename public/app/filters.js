(function () {
  "use strict"

  var filters = angular.module("ec2pricing.filters", [])

  filters.value("periodMultiplier", {
    "hourly": 1,
    "daily": 24,
    "weekly": 24 * 7,
    "monthly": 24 * 365.25/12,
    "yearly": 24 * 365.25
  })

  filters.factory("normalizedReservePrice", function (displaySettings, periodMultiplier) {
    return function (input) {
      var fixed = input[displaySettings.reservationTerm]
      var hourly = input[displaySettings.reservationTerm + "Hourly"]
      return fixed/periodMultiplier["yearly"] + hourly
    }
  })

  filters.filter("price", function (displaySettings, periodMultiplier, normalizedReservePrice) {
    return function (input) {
      if (input == null || input === "") {
        return "n/a"
      }
      var hourlyPrice = input
      if (typeof input == "object" && "yrTerm1" in input) {
        hourlyPrice = normalizedReservePrice(input)
      }
      return "$" + (hourlyPrice * periodMultiplier[displaySettings.period]).toFixed(3)
    }
  })

  filters.filter("disks", function () {
    var nbsp = "\u00A0"
    return function (input) {
      if (input == null) {
        return "n/a"
      } else {
        var str = input.disks + nbsp + "×" + nbsp + input.size + nbsp + "GB"
        if (input.ssd) {
          str += nbsp + "SSD"
        }
        return str
      }
    }
  })

  filters.filter("sortInstances", function (displaySettings, normalizedReservePrice) {
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
    var priceSort = function (reservationType, operatingSystem) {
      return function (a, b) {
        var aPrice = get(a, ["prices", displaySettings.region, reservationType || displaySettings.reservationType, operatingSystem || displaySettings.operatingSystem])
        var bPrice = get(b, ["prices", displaySettings.region, reservationType || displaySettings.reservationType, operatingSystem || displaySettings.operatingSystem])
        if (typeof aPrice == "object" && "yrTerm1" in aPrice) {
          aPrice = normalizedReservePrice(aPrice)
        }
        if (typeof bPrice == "object" && "yrTerm1" in bPrice) {
          bPrice = normalizedReservePrice(bPrice)
        }
        if (aPrice == null && bPrice == 0) {
          return 0
        } else if (aPrice == null) {
          return -1
        } else if (bPrice == null) {
          return 1
        } else {
          return aPrice - bPrice
        }
      }
    }
    var get = function (object, path) {
      return path.reduce(function (obj, key) { return obj && obj[key] }, object)
    }
    var sortFunctions = {
      "apiName": stringSort("apiName"),
      "cpus": numberSort("cpus"),
      "ram": numberSort("ram"),
      "disk": diskSort,
      "reservedPrice": priceSort(),
      "onDemandPrice": priceSort("onDemand"),
      "spotPrice": priceSort("spot"),
      "emrPrice": priceSort("other", "emr"),
      "ebsOptimizedPrice": priceSort("other", "ebsOptimized")
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