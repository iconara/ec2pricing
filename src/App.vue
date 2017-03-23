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
          v-bind:disabled="!filter.enabled"/>
      </div>
      <instance-types-table
        class="instance-types"
        v-bind:instance-types="instanceTypes"
        v-on:selectInstanceType="selectInstanceType($event)"/>
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

const PARTIAL_UPFRONT = 'Partial Upfront'
const NO_UPFRONT = 'No Upfront'
const ONE_YEAR = '1yr'
const THREE_YEAR = '3yr'
const STANDARD = 'standard'
const CONVERTIBLE = 'convertible'
const US_EAST_1 = 'US East (N. Virginia)'
const LINUX = 'Linux'
const WINDOWS = 'Windows'
const SHARED = 'Shared'
const NO_LICENSE_REQUIRED = 'No License required'
const LICENSE_INCLUDED = 'License Included'
const BYO_LICENSE = 'Bring your own license'

const FILTER_CONFIG = [
  {name: 'purchaseOption', collectionName: 'purchaseOptions', defaultValue: PARTIAL_UPFRONT, ignoredValues: ['']},
  {name: 'leaseContractLength', collectionName: 'leaseContractLengths', defaultValue: ONE_YEAR, ignoredValues: ['']},
  {name: 'offeringClass', collectionName: 'offeringClasses', defaultValue: STANDARD, ignoredValues: ['']},
  {name: 'location', collectionName: 'locations', defaultValue: US_EAST_1, ignoredValues: ['']},
  {name: 'operatingSystem', collectionName: 'operatingSystems', defaultValue: LINUX, ignoredValues: ['', 'NA']},
  {name: 'tenancy', collectionName: 'tenancies', defaultValue: SHARED, ignoredValues: ['', 'Host']},
  {name: 'licenseModel', collectionName: 'licenseModels', defaultValue: NO_LICENSE_REQUIRED, ignoredValues: ['', 'NA']},
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
      instanceTypes: [],
      filters: {}
    }
    for (let filterConfig of FILTER_CONFIG) {
      d.filters[filterConfig.name] = {
        name: filterConfig.name,
        config: filterConfig,
        enabled: true,
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
        options = options.map((option) => { return {id: option.id, value: option[filter.name], enabled: true} })
        options = options.filter((option) => filter.config.ignoredValues.indexOf(option.value) === -1)
        filter.options = options
        filter.default = filter.options.find((option) => option.value === filter.config.defaultValue)
        filter.selected = {id: filter.default.id, value: null}
        this.$watch(`filters.${filter.name}.selected.id`, (selectedId) => {
          const selectedOption = filter.options.find((option) => +option.id === +selectedId)
          Object.assign(filter.selected, selectedOption)
          this.loadInstanceTypes()
        })
      }
      this.updateReservationOptions()
      this.updateOperatingSystemOptions()
      this.loadInstanceTypes()
    },

    loadInstanceTypes () {
      const selections = {}
      for (let filter of Object.values(this.filters)) {
        selections[`${filter.name}Id`] = filter.selected.id
      }
      this.instanceTypes = []
      for (let instanceType of this._db.instanceTypes(selections)) {
        instanceType.selected = false
        this.instanceTypes.push(instanceType)
      }
    },

    updateReservationOptions () {
      const purchaseOption = this.filters.purchaseOption
      const leaseContractLength = this.filters.leaseContractLength
      const offeringClass = this.filters.offeringClass
      const noUpfront = purchaseOption.options.find((option) => option.value === NO_UPFRONT)
      const oneYear = leaseContractLength.options.find((option) => option.value === ONE_YEAR)
      const threeYear = leaseContractLength.options.find((option) => option.value === THREE_YEAR)
      const convertible = offeringClass.options.find((option) => option.value === CONVERTIBLE)
      noUpfront.enabled = +leaseContractLength.selected.id === +oneYear.id
      oneYear.enabled = +offeringClass.selected.id !== +convertible.id
      threeYear.enabled = +purchaseOption.selected.id !== +noUpfront.id
      convertible.enabled = +leaseContractLength.selected.id !== +oneYear.id
      if (!noUpfront.enabled && +purchaseOption.selected.id === +noUpfront.id) {
        purchaseOption.selected = Object.assign({}, purchaseOption.default)
      }
      if (!oneYear.enabled && +leaseContractLength.selected.id === +oneYear.id) {
        leaseContractLength.selected = Object.assign({}, threeYear)
      }
      if (!convertible.enabled && +offeringClass.selected.id === +convertible.id) {
        offeringClass.selected = Object.assign({}, offeringClass.default)
      }
    },

    updateOperatingSystemOptions () {
      const operatingSystem = this.filters.operatingSystem
      const licenseModel = this.filters.licenseModel
      const preinstalledSoftware = this.filters.preinstalledSoftware
      const licenseIncluded = licenseModel.options.find((option) => option.value === LICENSE_INCLUDED)
      const noLicenseRequired = licenseModel.options.find((option) => option.value === NO_LICENSE_REQUIRED)
      const bringYourOwnLicense = licenseModel.options.find((option) => option.value === BYO_LICENSE)
      const windowsSelected = operatingSystem.selected.value === WINDOWS
      licenseModel.enabled = windowsSelected
      noLicenseRequired.enabled = !windowsSelected
      if (licenseModel.enabled && +licenseModel.selected.id === +licenseModel.default.id) {
        licenseModel.selected = Object.assign({}, licenseIncluded)
      } else if (!licenseModel.enabled && +licenseModel.selected.id !== +licenseModel.default.id) {
        licenseModel.selected = Object.assign({}, licenseModel.default)
      }
      preinstalledSoftware.enabled = windowsSelected && +licenseModel.selected.id === +licenseIncluded.id
      if (!preinstalledSoftware.enabled && +preinstalledSoftware.selected.id !== +preinstalledSoftware.default.id) {
        preinstalledSoftware.selected = Object.assign({}, preinstalledSoftware.default)
      }
    },

    selectInstanceType (instanceType) {
      instanceType.selected = !instanceType.selected
    }
  },

  watch: {
    'filters.purchaseOption.selected.id': function (_) {
      Vue.nextTick(this.updateReservationOptions)
    },

    'filters.leaseContractLength.selected.id': function (_) {
      Vue.nextTick(this.updateReservationOptions)
    },

    'filters.offeringClass.selected.id': function (_) {
      Vue.nextTick(this.updateReservationOptions)
    },

    'filters.operatingSystem.selected.id': function (operatingSystemId) {
      Vue.nextTick(this.updateOperatingSystemOptions)
    },

    'filters.licenseModel.selected.id': function (operatingSystemId) {
      Vue.nextTick(this.updateOperatingSystemOptions)
    },

    'filters.preinstalledSoftware.selected.id': function (operatingSystemId) {
      Vue.nextTick(this.updateOperatingSystemOptions)
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
