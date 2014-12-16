(function () {
  "use strict"

  var ec2pricing = angular.module("ec2pricing")

  ec2pricing.factory("displaySettings", ["$q", "localStorage", function ($q, localStorage) {
    var state = {
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
    return self
  }])

  ec2pricing.controller("ApplicationController", ["$scope", "pricingDataLoader", "displaySettings", "normalizedReservePrice", function ($scope, pricingDataLoader, displaySettings, normalizedReservePrice) {
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

    $scope.reservedSavingsPercentage = function (instanceType) {
      var onDemandPrice = instanceType.prices[displaySettings.region]["onDemand"][displaySettings.operatingSystem]
      var reservedPrices = instanceType.prices[displaySettings.region]
      if (onDemandPrice && reservedPrices && reservedPrices[displaySettings.reservationType] && reservedPrices[displaySettings.reservationType][displaySettings.operatingSystem]) {
        var reservedPrice = normalizedReservePrice(reservedPrices[displaySettings.reservationType][displaySettings.operatingSystem])
        if (!isNaN(reservedPrice)) {
          return Math.round(100 * (1.0 - (reservedPrice/onDemandPrice))) + "%"
        }
      }
      return "n/a"
    }

    $scope.loading = true
    $scope.percentLoaded = 0

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