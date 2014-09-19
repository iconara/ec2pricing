(function () {
  "use strict"

  var directives = angular.module("ec2pricing.directives")

  directives.directive("sortableColumn", ["displaySettings", function (displaySettings) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        var update = function () {
          if (displaySettings.sortField == attrs.name) {
            var sortIndicator = element.find("span")
            if (displaySettings.sortAscending) {
              sortIndicator.removeClass("caret-reversed")
            } else {
              sortIndicator.addClass("caret-reversed")
            }
            element.addClass("sort-column")
          } else {
            element.removeClass("sort-column")
          }
        }

        scope.$watch(function () { return displaySettings.sortField }, update)
        scope.$watch(function () { return displaySettings.sortAscending }, update)

        var sortIndicator = angular.element("<span></span>")
        sortIndicator.addClass("caret")
        if (element.hasClass("text-column")) {
          element.append(sortIndicator)
        } else {
          element.prepend(sortIndicator)
        }

        element.addClass(attrs.name)
        element.bind("click", function () {
          if (displaySettings.sortField == attrs.name) {
            displaySettings.sortAscending = !displaySettings.sortAscending
          } else {
            displaySettings.sortField = attrs.name
            displaySettings.sortAscending = false
          }
          scope.$digest()
        })
      }
    }
  }])
}())
