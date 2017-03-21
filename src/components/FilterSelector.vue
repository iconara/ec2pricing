<template>
  <select v-bind:value="value" v-on:change="emitChange($event)">
    <option v-for="option in options" v-bind:value="option.id" v-bind:disabled="!option.enabled">
      {{option.value}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'filter-selector',
  props: ['value', 'options'],

  data () {
    return {}
  },

  methods: {
    emitChange (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
</style>
