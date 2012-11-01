(function () {
  var IO_SORT_ORDER = ["low", "moderate", "high", "very high"]
  var TYPE_CLASS_SORT_ORDER = ["m1", "m3", "t1", "c1", "m2", "cc1", "cc2", "cg1", "hi1"]
  var TYPE_SIZE_SORT_ORDER = ["micro", "small", "medium", "large", "xlarge", "2xlarge", "4xlarge", "8xlarge"]

  var module = angular.module("ec2pricing.sorting", [])

  module.value("instanceTypeSorter", function (instanceTypes, sortField, sortAscending, selectedOs) {
    var availableTypes = _(instanceTypes).select(function (instanceType) {
      return !!instanceType.pricing[selectedOs]
    })
    var unavailableTypes = _(instanceTypes).select(function (instanceType) {
      return !instanceType.pricing[selectedOs]
    })

    if (sortField == "type") {
      availableTypes = sortInstanceTypesByType(availableTypes, sortAscending)
    } else if (sortField == "price") {
      availableTypes = sortInstanceTypesByPrice(availableTypes, selectedOs, sortAscending)
    } else if (sortField == "spotPrice") {
      // TODO: move instances without spotPrice to the unavailable list
      availableTypes = sortInstanceTypesByPrice(availableTypes, selectedOs, sortAscending)
    } else {
      availableTypes = sortInstanceTypesBy(availableTypes, sortField, sortAscending)
    }

    return availableTypes.concat(unavailableTypes)
  })

  var sortInstanceTypesByType = function (instanceTypes, sortAscending) {
    instanceTypes.sort(function (i0, i1) {
      var c0 = i0.type.split(".")
      var c1 = i1.type.split(".")
      var comp = TYPE_CLASS_SORT_ORDER.indexOf(c0[0]) - TYPE_CLASS_SORT_ORDER.indexOf(c1[0])
      var order = comp
      if (comp == 0) {
        order = TYPE_SIZE_SORT_ORDER.indexOf(c0[1]) - TYPE_SIZE_SORT_ORDER.indexOf(c1[1])
      }
      return order * (sortAscending ? -1 : 1)
    })
    return instanceTypes
  }

  var sortInstanceTypesByPrice = function (instanceTypes, selectedOs, sortAscending) {
    var sortedInstanceTypes = _(instanceTypes).sortBy(function (instance) {
      return instance.pricing[selectedOs]
    })
    if (!sortAscending) {
      sortedInstanceTypes.reverse()
    }
    return sortedInstanceTypes
  }

  var sortInstanceTypesBy = function (instanceTypes, field, sortAscending) {
    var sortedInstanceTypes = _(instanceTypes).sortBy(function (instance) {
      var value = instance[field]
      if (field == "ram" || field == "disk") {
        if (!value) {
          return 0
        }
        var m = value.match(/([\d.]+) ([GM]B)/)
        var size = parseFloat(m[1])
        if (m[2] == "MB") {
          size = size/1024
        }
        return size
      } else if (field == "architectures") {
        return value.join("/")
      } else if (field == "io") {
        return IO_SORT_ORDER.indexOf(value)
      } else {
        return instance[field]
      }
    })

    if (!sortAscending) {
      sortedInstanceTypes.reverse()
    }
    
    return sortedInstanceTypes
  }
})()