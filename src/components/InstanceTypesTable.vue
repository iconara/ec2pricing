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
      <tr v-for="instanceType in instanceTypes">
        <td class="text">{{instanceType.name}}</td>
        <td>{{instanceType.vcpus}}</td>
        <td>{{instanceType.memory}}</td>
        <td>{{instanceType.storage}}</td>
        <td class="text">{{instanceType.networkPerformance}}</td>
        <td>{{instanceType.onDemandHourlyRate}}</td>
        <td>{{instanceType.reservedHourlyRate}}</td>
        <td>{{instanceType.upfrontCost}}</td>
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
export default {
  name: 'instance-types-table',
  props: ['instance-types'],

  data () {
    return {}
  }
}
</script>
