(function () {
  "use strict"

  var ec2pricing = angular.module("ec2pricing")

  ec2pricing.factory("displaySettings", [function () {
    return {
      region: "us-east-1",
      operatingSystem: "linux",
      reservationType: "heavyReservation",
      reservationTerm: "yrTerm1",
      period: "hourly",
      sortField: "apiName",
      sortAscending: true
    }
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

    pricingDataLoader.load().then(function (data) {
      $scope.regions = data.regions
      $scope.operatingSystems = data.operatingSystems
      $scope.instanceTypes = data.instanceTypes
    })
  }])
}())