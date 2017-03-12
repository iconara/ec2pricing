<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>CPUs</th>
        <th>RAM</th>
        <th>Disk</th>
        <th>Network performance</th>
        <th>On demand</th>
        <th>Reserved</th>
        <th>Upfront</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="instanceType in instanceTypes">
        <td>{{instanceType.name}}</td>
        <td>{{instanceType.vcpus}}</td>
        <td>{{instanceType.memory}}</td>
        <td>{{instanceType.storage}}</td>
        <td>{{instanceType.networkPerformance}}</td>
        <td>{{instanceType.onDemandHourlyRate}}</td>
        <td>{{instanceType.reservedHourlyRate}}</td>
        <td>{{instanceType.upfrontCost}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'instance-types-table',
  props: ['instance-types'],

  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
