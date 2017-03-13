<template>
  <table>
    <thead>
      <tr>
        <th class="text">Name</th>
        <th>CPUs</th>
        <th>RAM</th>
        <th>Disk</th>
        <th class="text">Network performance</th>
        <th>On demand</th>
        <th>Reserved</th>
        <th>Upfront</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="instanceType in sortedInstanceTypes">
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

export default {
  name: 'instance-types-table',
  props: ['instance-types'],

  data () {
    return {}
  },

  computed: {
    sortedInstanceTypes () {
      return this.instanceTypes.sort(Comparators.instanceType)
    }
  },

  filters: {
    memory (str) {
      return str.replace(/gib/i, 'GiB')
    },

    storage (str) {
      if (/ebs only/i.test(str)) {
        return '(EBS only)'
      } else if (/SSD|HDD/.test(str)) {
        return str
      } else {
        return `${str} HDD`
      }
    },

    networkPerformance (str) {
      return str.toLowerCase()
    },

    dollars (str) {
      if (str == null || str.length === 0) {
        return 'n/a'
      } else {
        return `$${str.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')}`
      }
    }
  }
}
</script>
