function compareInstanceTypes (it1, it2) {
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

export default {
  instanceType: compareInstanceTypes
}
