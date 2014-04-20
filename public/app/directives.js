(function () {
  "use strict"

  var directives = angular.module("ec2pricing.directives", [])

  directives.directive("sortableColumn", function (displaySettings) {
    return {
      restrict: "A",
      link: function (scope, element, attrs) {
        var update = function () {
          var sortIndicator = element.find("span")
          if (displaySettings.sortField == attrs.name) {
            if (sortIndicator.length == 0) {
              sortIndicator = angular.element("<span></span>")
              sortIndicator.addClass("caret")
              if (element.hasClass("text-column")) {
                element.append(sortIndicator)
              } else {
                element.prepend(sortIndicator)
              }
            }
            if (displaySettings.sortAscending) {
              sortIndicator.removeClass("caret-reversed")
            } else {
              sortIndicator.addClass("caret-reversed")
            }
          } else if (sortIndicator.length > 0) {
            sortIndicator.remove()
          }
        }

        scope.$watch(function () { return displaySettings.sortField }, update)
        scope.$watch(function () { return displaySettings.sortAscending }, update)

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
  })
}())
