<template>
  <table>
    <thead>
      <tr>
        <th class="text" v-on:click="sortBy('name')">Name</th>
        <th v-on:click="sortBy('vcpus')">CPUs</th>
        <th v-on:click="sortBy('memory')">RAM</th>
        <th v-on:click="sortBy('storage')">Disk</th>
        <th v-on:click="sortBy('networkPerformance')" class="text">Network performance</th>
        <th v-on:click="sortBy('onDemandHourlyRate')">On demand</th>
        <th v-on:click="sortBy('reservedHourlyRate')">Reserved</th>
        <th v-on:click="sortBy('upfrontCost')">Upfront</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="instanceType in sortedInstanceTypes" v-bind:key="instanceType.name">
        <td class="text">{{instanceType.name}}</td>
        <td>{{instanceType.vcpus}}</td>
        <td>{{instanceType.memory | memory}}</td>
        <td>{{instanceType.storage | storage}}</td>
        <td class="text">{{instanceType.networkPerformance | networkPerformance}}</td>
        <td>{{instanceType.onDemandHourlyRate | dollars}}</td>
        <td>{{instanceType.reservedHourlyRate | dollars}}</td>
        <td>{{instanceType.upfrontCost | dollars}}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="less" scoped>
table {
  border-collapse: collapse;
}

tr:hover {
  background-color: #fafafa;
}

th, td {
  text-align: right;
  padding: 0.2rem;
  padding-left: 0.6rem;
}

th:first-child, td:first-child {
  padding-left: 0;
}

th:last-child, td:last-child {
  padding-right: 0;
}

th.text, td.text {
  text-align: left;
}
</style>

<script>
import Comparators from '../utils/Comparators'

function prettyNumber (n) {
  let str = n.toString()
  let [whole, fractions] = str.split('.')
  whole = whole.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  if (fractions) {
    return `${whole}.${fractions}`
  } else {
    return whole
  }
}

export default {
  name: 'instance-types-table',
  props: ['instance-types'],

  data () {
    return {
      reverse: false,
      comparator: Comparators.name
    }
  },

  methods: {
    sortBy (what) {
      const newComparator = Comparators[what]
      if (this.comparator === newComparator) {
        this.reverse = !this.reverse
      } else {
        this.reverse = false
      }
      this.comparator = newComparator
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

    dollars (str) {
      if (str == null || str.length === 0) {
        return 'n/a'
      } else {
        return `$${prettyNumber(str)}`
      }
    }
  }
}
</script>
