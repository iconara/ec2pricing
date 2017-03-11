<template>
  <select v-bind:value="value" v-on:change="$emit('input', $event.target.value)">
    <option v-for="option in options" v-bind:value="option.id">
      {{option[name]}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'filter-selector',
  props: ['value', 'options', 'name'],

  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
