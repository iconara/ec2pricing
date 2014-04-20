(function () {
  "use strict"

  var ec2pricing = angular.module("ec2pricing")

  ec2pricing.controller("ApplicationController", function ($scope, pricingData) {
    $scope.sortBy = function (what) {
      if (what == $scope.sortField) {
        $scope.sortAscending = !$scope.sortAscending
      } else {
        $scope.sortField = what
        $scope.sortAscending = false
      }
    }

    $scope.reservationTypes = ["lightReservation", "mediumReservation", "heavyReservation"]
    $scope.reservationTerms = ["yrTerm1", "yrTerm3"]
    $scope.periods = ["hourly", "daily", "weekly", "monthly", "yearly"]
    $scope.selectedRegion = "us-east-1"
    $scope.selectedOperatingSystem = "linux"
    $scope.selectedReservationType = "heavyReservation"
    $scope.selectedReservationTerm = "yrTerm1"
    $scope.selectedPeriod = $scope.periods[0]

    pricingData.then(function (data) {
      $scope.regions = data.regions
      $scope.operatingSystems = data.operatingSystems
      $scope.instanceTypes = data.instanceTypes

      $scope.sortBy("apiName")
    })
  })
}())