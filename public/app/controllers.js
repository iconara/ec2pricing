(function () {
  var PERIOD_MULTIPLIERS = {"hourly": 1, "daily": 24, "weekly": 7 * 24, "monthly": 30.4 * 24, "yearly": 365.25 * 24}
  var DEFAULT_OS = "linux"
  var DEFAULT_PERIOD = "hourly"
  var DEFAULT_SORT_FIELD = "api_name"
  var DEFAULT_REGION = "us-east-1"
  var STATE_FIELDS = ["sortField", "sortAscending", "selectedRegion", "selectedOs", "selectedPeriod"]
  var ASCENDING_ORDER = "asc"
  var DESCENDING_ORDER = "desc"
  var REGION_NAMES = {
    "us-east-1":      "US East (Virginia)",
    "us-west-2":      "US West (Oregon)",
    "us-west-1":      "US West (Northern California)",
    "eu-west-1":      "EU (Ireland)",
    "ap-southeast-1": "Asia Pacific (Singapore)",
    "ap-northeast-1": "Asia Pacific (Tokyo)",
    "ap-southeast-2": "Asia Pacific (Sydney)",
    "sa-east-1":      "South America (Sao Paulo)"
  }

  window.ApplicationController = function ($scope, $http, $location, $timeout, $log, instanceTypesLoader, instanceTypeSorter, pricingLoader, tracker) {
    var instanceTypesByRegion = null
    var spotInstancePricingByRegion = null

    $scope.regions = null
    $scope.selectedRegion = null
    $scope.selectedInstanceTypes = null

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
        $location.path($scope.selectedRegion)
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

      if (!$scope.autoRestoreSetup) {
        $scope.$watch(function () { return $location.path() }, restoreState)
        $scope.$watch(function () { return $location.search() }, restoreState)
        $scope.autoRestoreSetup = true
      }

      sortInstanceTypes()
    }

    var selectRegion = function (region) {
      if ($scope.regions.indexOf(region) != -1) {
        $scope.selectedRegion = region
        $scope.selectedInstanceTypes = _.find(instanceTypesByRegion, function (r) { return r.region == region }).instance_types
      } else {
        $log.warn("Attempt to select non-existent region: \"" + region + "\"")
      }
    }

    var sortInstanceTypes = function () {
      if ($scope.selectedInstanceTypes) {
        $scope.selectedInstanceTypes = instanceTypeSorter(
          $scope.selectedInstanceTypes,
          $scope.sortField,
          $scope.sortAscending,
          $scope.selectedOs
        )
      }
    }
    
    STATE_FIELDS.forEach(function (property) {
      $scope.$watch(property, updateState)
    })

    $scope.regionName = function (region) {
      return REGION_NAMES[region]
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

    $scope.calculatedPrice = function (instanceType) {
      var basePrice = instanceType.on_demand_pricing[$scope.selectedOs]
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
      if (spotInstancePricingByRegion) {
        var instanceTypePricing = spotInstancePricingByRegion[$scope.selectedRegion][instanceType.api_name]
        return instanceTypePricing && $scope.calculatedPrice({on_demand_pricing: instanceTypePricing})
      }
      return null
    }

    $scope.inspectInstanceType = function (instanceType) {
      $log.info(instanceType)
    }

    var startUpdateSpotPricing = function () {
      $scope.spotInstancePricingLoading = true
      pricingLoader.spot().then(function (loadedSpotInstancePricingByRegion) {
        spotInstancePricingByRegion = loadedSpotInstancePricingByRegion.regions
        $scope.spotInstancePricingLastUpdated = loadedSpotInstancePricingByRegion.lastUpdated
        $scope.spotInstancePricingLoading = false
      })
      $timeout(arguments.callee, 300000)
    }

    var startUpdateSpotPricingLabel = function () {
      $scope.spotInstancePricingLastUpdated = $scope.spotInstancePricingLastUpdated
      $timeout(arguments.callee, 5000)
    }

    instanceTypesLoader.instanceTypesByRegion()
      .then(function (loadedInstanceTypesByRegion) {
        instanceTypesByRegion = loadedInstanceTypesByRegion

        $scope.lastUpdated = new Date() // TODO
        $scope.regions = _.map(instanceTypesByRegion, function (region) { return region.region }).sort()
      })
      .then(startUpdateSpotPricing)
      .then(startUpdateSpotPricingLabel)
      .then(restoreState)
  }
})()