(function () {
  angular.module("ec2pricing.tracking", [])
    .factory("tracker", function ($window, $location) {
      return {
        trackPageview: function () {
          $window._gaq.push(["_trackPageview", $location.path()])
        },
        trackEvent: function (category, action) {
          $window._gaq.push(["_trackEvent", category, action])
        }
      }
    })
})()