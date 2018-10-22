function name (it1, it2) {
  let [family1, size1] = it1.name.split('.')
  let [family2, size2] = it2.name.split('.')
  let familyResult = family1.localeCompare(family2)
  if (familyResult === 0) {
    let difference = sizeToNumber(size1) - sizeToNumber(size2)
    return difference === 0 ? 0 : difference / Math.abs(difference)
  } else {
    return familyResult
  }
}

function sizeToNumber (size) {
  let sizes = ['nano', 'micro', 'small', 'medium', 'large', 'xlarge']
  let n = sizes.indexOf(size)
  if (n > -1) {
    return n
  } else {
    let matches = size.match(/^(\d+)xlarge/)
    if (matches) {
      return sizes.length + parseInt(matches[1])
    } else {
      return Math.pow(2, 31)
    }
  }
}

function cmp (n1, n2) {
  if (n1 < n2) {
    return -1
  } else if (n1 > n2) {
    return 1
  } else {
    return 0
  }
}

function vcpus (it1, it2) {
  return cmp(it1.vcpus, it2.vcpus)
}

function memory (it1, it2) {
  return cmp(it1.memory, it2.memory)
}

function storage (it1, it2) {
  return cmp(it1.storage.totalSize, it2.storage.totalSize)
}

const NETWORK_PERFORMANCES = {
  'very low': 10,
  'low': 100,
  'low to moderate': 250,
  'moderate': 500,
  'high': 1000
}

function approximateNetworkSpeed (networkPerformance) {
  if (networkPerformance in NETWORK_PERFORMANCES) {
    return NETWORK_PERFORMANCES[networkPerformance]
  } else if (/(up to )?(\d+) gigabit/.test(networkPerformance)) {
    return parseInt(RegExp.$2) * 1000 * (RegExp.$1 ? 0.9 : 1)
  }
}

function networkPerformance (it1, it2) {
  return cmp(approximateNetworkSpeed(it1.networkPerformance), approximateNetworkSpeed(it2.networkPerformance))
}

function numericComparator (propertyName) {
  return function (it1, it2) {
    return cmp(parseFloat(it1[propertyName] || 0), parseFloat(it2[propertyName] || 0))
  }
}

export default {
  name,
  vcpus,
  memory,
  storage,
  networkPerformance,
  onDemandHourlyRate: numericComparator('onDemandHourlyRate'),
  reservedHourlyRate: numericComparator('reservedHourlyRate'),
  upfrontCost: numericComparator('upfrontCost')
}
