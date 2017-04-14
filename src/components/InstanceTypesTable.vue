<template>
  <table>
    <thead>
      <tr>
        <th v-bind:class="{reverse: reverse && comparatorName === 'name', text: true}" v-on:click="sortBy('name')">Name</th>
        <th v-bind:class="{reverse: reverse && comparatorName === 'vcpus'}" v-on:click="sortBy('vcpus')">CPUs</th>
        <th v-bind:class="{reverse: reverse && comparatorName === 'memory'}" v-on:click="sortBy('memory')">RAM</th>
        <th v-bind:class="{reverse: reverse && comparatorName === 'storage'}" v-on:click="sortBy('storage')">Disk</th>
        <th v-bind:class="{reverse: reverse && comparatorName === 'networkPerformance'}" v-on:click="sortBy('networkPerformance')" class="text">Network performance</th>
        <th v-bind:class="{reverse: reverse && comparatorName === 'onDemandHourlyRate'}" v-on:click="sortBy('onDemandHourlyRate')">On demand</th>
        <th v-bind:class="{reverse: reverse && comparatorName === 'reservedHourlyRate'}" v-on:click="sortBy('reservedHourlyRate')">Reserved</th>
        <th v-bind:class="{reverse: reverse && comparatorName === 'upfrontCost'}" v-on:click="sortBy('upfrontCost')">Upfront</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="instanceType in sortedInstanceTypes"
        v-bind:key="instanceType.name"
        v-bind:class="{selected: instanceType.selected}"
        v-on:click="selectInstanceType(instanceType)">
        <td class="text">{{instanceType.name}}</td>
        <td>{{instanceType.vcpus}}</td>
        <td>{{instanceType.memory | memory}}</td>
        <td>{{instanceType.storage | storage}}</td>
        <td class="text">{{instanceType.networkPerformance | networkPerformance}}</td>
        <td>{{multiplyRate(instanceType.onDemandHourlyRate) | rate}}</td>
        <td>{{multiplyRate(instanceType.reservedHourlyRate) | rate}}</td>
        <td>{{instanceType.upfrontCost | cost}}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="less" scoped>
@import "../style/variables.less";

@border-color: #ccc;

table {
  border-collapse: collapse;
  margin-left: -0.4rem;
  width: calc(100% + 3 * 0.4rem) !important;
}

thead {
  border-bottom: 1px solid @border-color;
}

tbody {
  border-bottom: 1px solid @border-color;

  tr {
    &:nth-child(even) {
      background-color: #f9f9f9;
    }

    &:first-child {
      td {
        padding-top: 0.6rem;
      }
    }

    &:last-child {
      td {
        padding-bottom: 0.6rem;
      }
    }

    &:hover {
      background-color: lighten(@accent-color, 60%) !important;
    }

    &.selected {
      background-color: lighten(@accent-color, 50%) !important;

      &:hover {
        background-color: lighten(@accent-color, 52%) !important;
      }
    }
  }
}

th, td {
  text-align: right;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 0.8rem;
}

th:first-child, td:first-child {
  padding-left: 0.4rem;
}

th:last-child, td:last-child {
  padding-right: 0.4rem;
}

th.text, td.text {
  text-align: left;
}

th {
  user-select: none;
  cursor: n-resize;
}

th.reverse {
  cursor: s-resize;
}
</style>

<script>
import Comparators from '../utils/Comparators'

const THOUSANDS_SEPARATOR_RE = /(\d)(?=(\d\d\d)+(?!\d))/g

function addThousandsSeparators (str) {
  return str.replace(THOUSANDS_SEPARATOR_RE, '$1,')
}

function prettyNumber (n) {
  const str = n.toString()
  let [whole, fractions] = str.split('.')
  whole = addThousandsSeparators(whole)
  if (fractions) {
    return `${whole}.${fractions}`
  } else {
    return whole
  }
}

function fixedPrettyNumber (n) {
  const str = n.toString()
  let [whole, fractions] = str.split('.')
  whole = addThousandsSeparators(whole)
  fractions = fractions || ''
  fractions = fractions.substring(0, 3)
  for (let i = fractions.length; i < 3; i++) {
    fractions += '0'
  }
  return `${whole}.${fractions}`
}

export default {
  name: 'instance-types-table',
  props: ['instance-types', 'rate-multiplier'],

  data () {
    return {
      reverse: false,
      comparator: Comparators.name,
      comparatorName: 'name'
    }
  },

  methods: {
    sortBy (what) {
      const newComparator = Comparators[what]
      if (this.comparator === newComparator) {
        this.reverse = !this.reverse
      } else {
        this.reverse = (what !== 'name')
      }
      this.comparator = newComparator
      this.comparatorName = what
    },

    selectInstanceType (instanceType) {
      this.$emit('selectInstanceType', instanceType)
    },

    multiplyRate (rate) {
      if (rate) {
        return parseFloat(rate) * (this.rateMultiplier || 1)
      } else {
        return rate
      }
    }
  },

  computed: {
    sortedInstanceTypes () {
      if (this.instanceTypes) {
        let sorted = this.instanceTypes.sort(this.comparator)
        if (this.reverse) {
          sorted = sorted.reverse()
        }
        return sorted
      } else {
        return []
      }
    }
  },

  filters: {
    memory (n) {
      return `${prettyNumber(n)} GiB`
    },

    storage (s) {
      if (s.ebsOnly) {
        return '(EBS only)'
      } else {
        return `${s.disks} × ${prettyNumber(s.size)} GB ${s.type}`
      }
    },

    networkPerformance (str) {
      return str.toLowerCase()
    },

    rate (str, multiplier) {
      if (str == null || str.length === 0) {
        return 'n/a'
      } else {
        return `$${fixedPrettyNumber(str)}`
      }
    },

    cost (str) {
      if (str == null || str.length === 0) {
        return 'n/a'
      } else {
        return `$${prettyNumber(str)}`
      }
    }
  }
}
</script>
