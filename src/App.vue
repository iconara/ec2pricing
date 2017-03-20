<template>
  <div id="app">
    <div class="progress" v-if="!loaded">
      {{progress}}%
    </div>
    <div v-else>
      <div class="filters">
        <filter-selector
          v-for="filter in Object.values(filters)"
          v-model="filter.selected.id"
          v-bind:key="filter.name"
          v-bind:options="filter.options"
          v-bind:disabled="(filter.name === 'licenseModel' || filter.name === 'preinstalledSoftware') && !windowsSelected"/>
      </div>
      <instance-types-table
        class="instance-types"
        v-bind:instance-types="instanceTypes"/>
      <div class="footer">
        This page was last updated at {{buildDate | dateTime}} with pricing data last updated at {{publicationDate | dateTime}}, your time
      </div>
    </div>
  </div>
</template>

<style lang="less">
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;

  .progress {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 500%;
    font-weight: bold;
  }

  .filters {
    margin-bottom: 1rem;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .instance-types {
    width: 100%;
  }

  .footer {
    margin-top: 1rem;
  }
}
</style>

<script>
import Vue from 'vue'
import DatabaseLoader from './utils/DatabaseLoader'
import CostDatabase from './utils/CostDatabase'
import InstanceTypesTable from './components/InstanceTypesTable'
import FilterSelector from './components/FilterSelector'

const DATABASE_LOCATION = 'static/data/ec2.sqlite'

const FILTER_CONFIG = [
  {name: 'purchaseOption', collectionName: 'purchaseOptions', defaultValue: 'Partial Upfront', ignoredValues: ['']},
  {name: 'leaseContractLength', collectionName: 'leaseContractLengths', defaultValue: '1yr', ignoredValues: ['']},
  {name: 'offeringClass', collectionName: 'offeringClasses', defaultValue: 'standard', ignoredValues: ['']},
  {name: 'location', collectionName: 'locations', defaultValue: 'US East (N. Virginia)', ignoredValues: ['']},
  {name: 'operatingSystem', collectionName: 'operatingSystems', defaultValue: 'Linux', ignoredValues: ['', 'NA']},
  {name: 'tenancy', collectionName: 'tenancies', defaultValue: 'Shared', ignoredValues: ['', 'Host']},
  {name: 'licenseModel', collectionName: 'licenseModels', defaultValue: 'No License required', ignoredValues: ['']},
  {name: 'preinstalledSoftware', collectionName: 'preinstalledSoftwares', defaultValue: 'NA', ignoredValues: ['']}
]

export default {
  name: 'app',

  components: {
    InstanceTypesTable,
    FilterSelector
  },

  data () {
    let d = {
      loaded: false,
      progress: 0,
      publicationDate: null,
      buildDate: null,
      filters: {}
    }
    for (let filterConfig of FILTER_CONFIG) {
      d.filters[filterConfig.name] = {
        name: filterConfig.name,
        config: filterConfig,
        selected: {id: null, value: null},
        default: null,
        options: []
      }
    }
    return d
  },

  created () {
    this.load()
  },

  methods: {
    load () {
      let loader = new DatabaseLoader(DATABASE_LOCATION)

      loader.onProgress((loaded, total) => {
        this.progress = Math.round(loaded / total * 100)
      })

      loader.loadDatabase().then((db) => {
        this._db = new CostDatabase(db)
        this.loaded = true
        this.setup()
      })
    },

    setup () {
      this._db.setup()
      this.publicationDate = this._db.publicationDate
      this.buildDate = this._db.buildDate
      for (let filter of Object.values(this.filters)) {
        let options = this._db[filter.config.collectionName]
        options = options.map((option) => { return {id: option.id, value: option[filter.name]} })
        options = options.filter((option) => filter.config.ignoredValues.indexOf(option.value) === -1)
        filter.options = options
        filter.default = filter.options.find((option) => option.value === filter.config.defaultValue)
        filter.selected = {id: filter.default.id, value: null}
        this.$watch(`filters.${filter.name}.selected.id`, (selectedId) => {
          const selectedOption = filter.options.find((option) => +option.id === +selectedId)
          filter.selected.value = selectedOption.value
        })
      }
    }
  },

  computed: {
    instanceTypes () {
      if (this._db) {
        const selections = {}
        for (let filter of Object.values(this.filters)) {
          selections[`${filter.name}Id`] = filter.selected.id
        }
        return this._db.instanceTypes(selections)
      } else {
        return []
      }
    },

    windowsSelected () {
      return this.filters.operatingSystem.selected.value === 'Windows'
    }
  },

  watch: {
    'filters.operatingSystem.selected.id': function (operatingSystemId) {
      Vue.nextTick(() => {
        if (this.windowsSelected) {
          this.filters.licenseModel.selected = this.filters.licenseModel.options.find((option) => option.value === 'License Included')
        } else {
          this.filters.licenseModel.selected = this.filters.licenseModel.default
          this.filters.preinstalledSoftware.selected = this.filters.preinstalledSoftware.default
        }
      })
    }
  },

  filters: {
    dateTime (date) {
      const zeroFill = (n) => n < 10 ? `0${n}` : n.toString()
      const dateString = [date.getFullYear(), zeroFill(date.getMonth()), zeroFill(date.getDate())].join('-')
      const timeString = [zeroFill(date.getHours()), zeroFill(date.getMinutes())].join(':')
      return `${dateString} ${timeString}`
    }
  }
}
</script>
