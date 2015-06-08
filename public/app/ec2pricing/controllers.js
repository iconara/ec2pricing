(function () {
  "use strict"

  var ec2pricing = angular.module("ec2pricing")

  ec2pricing.factory("displaySettings", ["$q", "localStorage", function ($q, localStorage) {
    var state = {
      calculator: false,
      region: "us-east-1",
      operatingSystem: "linux",
      reservationType: "partialUpfront",
      reservationTerm: "yrTerm1",
      period: "hourly",
      sortField: "apiName",
      sortAscending: true
    }
    var save = function () {
      localStorage["ec2pricing:displaySettings"] = angular.toJson(state)
      return $q.when(self)
    }
    var load = function () {
      var stateJson = localStorage["ec2pricing:displaySettings"]
      if (stateJson) {
        var loadedState = angular.fromJson(stateJson)
        angular.copy(loadedState, state)
      }
      return $q.when(self)
    }
    var update = function (key, value) {
      state[key] = value
      return save()
    }
    var self = Object.create(state)
    self.save = save
    self.load = load
    self.update = update
    self.toJson = function () {
      return angular.toJson(state)
    }
    return self
  }])

  ec2pricing.controller("ApplicationController", ["$scope", "pricingDataLoader", "pricingCalculator", "displaySettings", "periodMultiplier", "focus", "cache", function ($scope, pricingDataLoader, pricingCalculator, displaySettings, periodMultiplier, focus, cache) {
    $scope.reservationTypes = {
      "lightReservation": "light",
      "mediumReservation": "medium",
      "heavyReservation": "heavy",
      "noUpfront": "no upfront",
      "partialUpfront": "partial upfront",
      "allUpfront": "all upfront"
    }
    $scope.reservationTerms = {
      "yrTerm1": "1 year",
      "yrTerm3": "3 years"
    }
    $scope.periods = [
      "hourly",
      "daily",
      "weekly",
      "monthly",
      "yearly"
    ]
    $scope.operatingSystemNames = {
      "linux": "Linux",
      "mswin": "Windows",
      "rhel": "RedHat",
      "sles": "SUSE",
      "mswinsql": "SQL Server Standard",
      "mswinsqlweb": "SQL Server Web"
    }

    $scope.settings = displaySettings

    $scope.toggleInstanceTypeHighlight = function (instanceType) {
      instanceType.highlighted = !instanceType.highlighted
    }

    $scope.pricingCalculator = pricingCalculator

    $scope.loading = true
    $scope.instanceTypes = []
    $scope.percentLoaded = 0
    $scope.focus = focus

    $scope.$watch(
      function () {
        return $scope.instanceTypes.reduce(function (result, instanceType) { return result + '+' + instanceType.quantity + '*' + instanceType.apiName }, displaySettings.toJson())
      }, function () {
        var sum = function(price) {
          return $scope.instanceTypes.reduce(function (sum, instanceType) { return instanceType.quantity ? (sum + instanceType.quantity * price(instanceType)) : sum }, 0)
        }
        var totalOnDemandPrice = sum(pricingCalculator.onDemandPrice)
        var totalReservedPrice = sum(pricingCalculator.reservedPrice)
        $scope.total = {
          onDemandPrice: totalOnDemandPrice,
          reservedPrice: totalReservedPrice,
          spotPrice: sum(pricingCalculator.spotPrice),
          emrPrice: sum(pricingCalculator.emrPrice),
          emrPricePercent: sum(pricingCalculator.emrPrice)/totalOnDemandPrice,
          ebsOptimizedPrice: sum(pricingCalculator.ebsOptimizedPrice)
        }
      })

    cache.prune()

    displaySettings.load().then(function () {
      pricingDataLoader.load().then(function (data) {
        $scope.loading = false
        $scope.regions = data.regions
        $scope.operatingSystems = data.operatingSystems
        $scope.instanceTypes = data.instanceTypes
      }, undefined, function (percentLoaded) {
        $scope.percentLoaded = Math.round(percentLoaded * 100)
      })
    })
  }])
}())