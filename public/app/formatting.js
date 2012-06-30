angular.module("ec2Pricing")
  .filter("timeAgo", function () {
    return function (input, reference) {
      reference = reference || new Date()
      var diff = (reference.getTime() - input.getTime())/1000
      if (diff < 60) {
        return "seconds ago"
      } else if (diff < 60 * 5) {
        return "minutes ago"
      } else if (diff < 60 * 50) {
        return Math.floor(diff/60) + " minutes ago"
      } else if (diff < 60 * 80) {
        return "about an hour ago"
      } else if (diff < 60 * 120) {
        return "more than an hour ago"
      } else if (diff < 60 * 60 * 18) {
        return "about " + Math.floor(diff/(60 * 60)) + " hours ago"
      } else if (diff < 60 * 60 * 26) {
        return "about a day ago"
      } else if (diff < 60 * 60 * 40) {
        return "yesterday"
      } else if (diff < 60 * 60 * 24 * 6) {
        return Math.floor(diff/(60 * 60 * 24)) + " days ago"
      } else if (diff < 60 * 60 * 24 * 10) {
        return "about a week ago"
      } else if (diff < 60 * 60 * 24 * 14) {
        return "more than a week ago"
      } else if (diff < 60 * 60 * 24 * 25) {
        return Math.round(diff/(60 * 60 * 24 * 7)) + " weeks ago"
      } else if (diff < 60 * 60 * 24 * 40) {
        return "about a month ago"
      } else if (diff < 60 * 60 * 24 * 340) {
        return Math.ceil(diff/(60 * 60 * 24 * 30)) + " months ago"
      } else if (diff < 60 * 60 * 24 * 380) {
        return "about a year ago"
      } else {
        return "in the distant past"
      }
    }
  })
