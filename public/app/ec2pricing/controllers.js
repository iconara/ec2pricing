(function () {
  "use strict"

  var ec2pricing = angular.module("ec2pricing")

  ec2pricing.factory("displaySettings", ["$q", "localStorage", function ($q, localStorage) {
    var state = {
      region: "us-east-1",
      operatingSystem: "linux",
      reservationType: "heavyReservation",
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

  ec2pricing.controller("ApplicationController", ["$scope", "pricingDataLoader", "displaySettings", function ($scope, pricingDataLoader, displaySettings) {
    $scope.reservationTypes = {
      "lightReservation": "light",
      "mediumReservation": "medium",
      "heavyReservation": "heavy"
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