(function () {
  "use strict"

  var submodules = [
    "ec2pricing.config",
    "ec2pricing.filters",
    "ec2pricing.directives",
    "ec2pricing.utils"
  ]

  submodules.forEach(function (submodule) { angular.module(submodule, []) })

  angular.module("ec2pricing", submodules)
}())
