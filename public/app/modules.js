(function () {
  "use strict"

  var submodules = [
    "ec2pricing.config",
    "ec2pricing.filters",
    "ec2pricing.directives",
    "ec2pricing.utils",
    "ec2pricing.state"
  ]

  submodules.forEach(function (submodule) { angular.module(submodule, []) })

  angular.module("global", []).value("localStorage", window.localStorage)

  angular.module("ec2pricing", submodules.concat(["global"]))
}())
