(function () {
  var PERIOD_MULTIPLIERS = {"hourly": 1, "daily": 24, "weekly": 7 * 24, "monthly": 30.4 * 24, "yearly": 365.25 * 24}
  var DEFAULT_OS = "linux"
  var DEFAULT_PERIOD = "hourly"
  var DEFAULT_SORT_FIELD = "type"
  var DEFAULT_REGION = "us-east-1"
  var STATE_FIELDS = ["sortField", "sortAscending", "selectedRegion", "selectedOs", "selectedPeriod"]
  var ASCENDING_ORDER = "asc"
  var DESCENDING_ORDER = "desc"

  window.ApplicationController = function ($scope, $http, $location, $timeout, $log, instanceTypesLoader, pricingLoader, pricingParser, instanceTypeSorter, tracker) {
    $scope.pricing = null
    $scope.regions = null
    $scope.selectedRegion = null
    $scope.sortField = null
    $scope.sortAscending = false
    $scope.operatingSystems = {"linux": "Linux", "mswin": "Windows"}
    $scope.selectedOs = null
    $scope.periods = ["hourly", "daily", "weekly", "monthly", "yearly"]
    $scope.selectedPeriod = null
    $scope.singularPeriods = {"hourly": "hour", "daily": "day", "weekly": "week", "monthly": "month", "yearly": "year"}

    var updateState = function (firstTime) {
      if ($scope.selectedRegion) {
        var oldPath = $location.path()
        $location.path($scope.selectedRegion.apiName)
        $location.search({
          sort: $scope.sortField + ":" + ($scope.sortAscending ? ASCENDING_ORDER : DESCENDING_ORDER),
          os: $scope.selectedOs,
          period: $scope.selectedPeriod
        })
        if (oldPath != $location.path()) {
          tracker.trackPageview()
        }
      }
    }

    var restoreState = function () {
      var state = $location.search()

      $scope.selectedOs = state.os || DEFAULT_OS
      $scope.selectedPeriod = state.period || DEFAULT_PERIOD
      
      if (state.sort) {
        var sortState = state.sort.split(":")
        $scope.sortField = sortState[0]
        $scope.sortAscending = sortState[1].toLowerCase() == ASCENDING_ORDER
      } else {
        $scope.sortField = DEFAULT_SORT_FIELD
        $scope.sortAscending = false
      }

      var region = $location.path().substring(1)

      selectRegion(region || DEFAULT_REGION)

      tracker.trackPageview()
    }

    var selectRegion = function (r) {
      $scope.selectedRegion = $scope.pricing[r]
    }

    var sortInstanceTypes = function () {
      if ($scope.selectedRegion) {
        $scope.selectedRegion.instanceTypes = instanceTypeSorter($scope.selectedRegion.instanceTypes, $scope.sortField, $scope.sortAscending, $scope.selectedOs)
      }
    }
    
    STATE_FIELDS.forEach(function (property) {
      $scope.$watch(property, sortInstanceTypes)
      $scope.$watch(property, updateState)
    })

    $scope.isSelectedRegion = function (r) {
      return r == $scope.isSelectedRegion
    }

    $scope.selectRegion = function ($event, r) {
      $event.preventDefault()
      selectRegion(r)
    }

    $scope.selectOs = function ($event, o) {
      $event.preventDefault()
      $scope.selectedOs = o
      tracker.trackEvent("Select OS", o)
    }

    $scope.selectPeriod = function ($event, p) {
      $event.preventDefault()
      $scope.selectedPeriod = p
      tracker.trackEvent("Select Period", p)
    }

    $scope.sortBy = function ($event, f) {
      $event.preventDefault()

      if ($scope.sortField == f) {
        $scope.sortAscending =  !$scope.sortAscending
      } else {
        $scope.sortAscending = false
      }

      $scope.sortField = f

      tracker.trackEvent("Sort By Column", f)
    }

    $scope.regionTabClass = function (r) {
      return r == $scope.selectedRegion.apiName ? "active" : ""
    }

    $scope.osSelectorClass = function (o) {
      return o == $scope.selectedOs ? "active" : ""
    }

    $scope.instanceTypeRowClass = function (instanceType) {
      return instanceType.pricing[$scope.selectedOs] ? "" : "not-available"
    }

    $scope.periodSelectorClass = function (p) {
      return p == $scope.selectedPeriod ? "active" : ""
    }

    $scope.calculatedPrice = function (instanceType) {
      var basePrice = instanceType.pricing[$scope.selectedOs]
      var multiplier = PERIOD_MULTIPLIERS[$scope.selectedPeriod]
      var price = basePrice * multiplier
      // var decimals = Math.max(0, 3 - Math.floor(Math.log(multiplier)/Math.log(10)))
      var decimals = 3
      if (multiplier > 100) {
        decimals = 0
      } else if (multiplier > 1) {
        decimals = 2
      }
      if (price > 0.0001) {
        // TODO: thousands-separators!
        return _.str.sprintf("$%." + decimals + "f", price)
      } else {
        return null
      }
    }

    $scope.spotPrice = function (instanceType) {
      if ($scope.spotInstancePricing) {
        var regionPricing = $scope.spotInstancePricing[$scope.selectedRegion.apiName]
        var foundInstanceType = _(regionPricing.instanceTypes).find(function (it) { return it.type == instanceType.type })
        if (foundInstanceType) {
          return $scope.calculatedPrice(foundInstanceType)
        }
      }
      return null
    }

    $scope.inspectInstanceType = function (instanceType) {
      $log.info(instanceType)
    }

    var startUpdateSpotPricing = function () {
      $scope.spotInstancePricingLoading = true
      pricingLoader.spot().then(function (spotPricing) {
        $scope.spotInstancePricingLastUpdated = spotPricing.lastUpdated
        $scope.spotInstancePricing = spotPricing.regions
        $scope.spotInstancePricingLoading = false
      })
      $timeout(arguments.callee, 300000)
    }

    var mergeInstanceTypesIntoPricing = function (instanceTypes, pricing) {
      _(pricing.regions).each(function (region) {
        _(region.instanceTypes).each(function (instanceType) {
          if (instanceType.type in instanceTypes) {
            _(instanceType).extend(instanceTypes[instanceType.type])
          } else {
            $log.warn("No instance type data for", instanceType.type)
          }
        })
      })
    }

    instanceTypesLoader.instanceTypes().then(function (instanceTypes) {
        pricingLoader.onDemand()
          .then(function (onDemandPricing) {
            $scope.lastUpdated = onDemandPricing.lastUpdated
            $scope.instanceTypes = instanceTypes
            $scope.regions = _(onDemandPricing.regions).keys().sort()
            $scope.pricing = onDemandPricing.regions
            mergeInstanceTypesIntoPricing(instanceTypes, onDemandPricing)
          })
          .then(startUpdateSpotPricing)
          .then(restoreState)
      })
  }
})()