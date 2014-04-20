(function () {
  "use strict"

  var ec2pricing = angular.module("ec2pricing")

  ec2pricing.factory("displaySettings", function () {
    return {
      region: "us-east-1",
      operatingSystem: "linux",
      reservationType: "heavyReservation",
      reservationTerm: "yrTerm1",
      period: "hourly",
      sortField: "apiName",
      sortAscending: true
    }
  })

  ec2pricing.controller("ApplicationController", function ($scope, pricingData, displaySettings) {
    $scope.reservationTypes = ["lightReservation", "mediumReservation", "heavyReservation"]
    $scope.reservationTerms = ["yrTerm1", "yrTerm3"]
    $scope.periods = ["hourly", "daily", "weekly", "monthly", "yearly"]
    $scope.settings = displaySettings

    pricingData.then(function (data) {
      $scope.regions = data.regions
      $scope.operatingSystems = data.operatingSystems
      $scope.instanceTypes = data.instanceTypes
    })
  })
}())