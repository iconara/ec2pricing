<template>
  <div id="app">
    <div class="progress" v-if="!loaded">
      {{progress}}%
    </div>
    <div v-else>
      <header>
        <div class="title">
          <img class="cloud" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAuZJREFUeNrsmztoFFEUhu/oBlwxhvjAqKgQLExAiY80EVGxtlAbEUEQTKWdrY0oFoIYFEuL2IhNChGLFDaKoqgIojESRRBNBPGF7qrE8T/ZM7I7TjJzs3ce93Hg2xSZzHK+eZ1z7sTzfV/YHHOE5eEEOAFOgBPgBDgBFkeJPjzPU7nPuaALbATrwDJQBhUwAUbAY/AcTOaV+L8CUHEluBUMgCecsB9BhX8/wNvnJmAqd0UC+sB1PqK+BJP8d326CmgBJ0FVMvEwVd5Pi04CFoOhJhMPM8T7LbyANjCsOPmAYd5/oQUMppR8wGCRBfSnnHxAfxYCvKmP5HXACvAQdGRwmY6DzeBd6Ps38U96grwGj8DnrOqAUxkd/YDT/L1rwCXwIWKbMXACLEz7EmgHbzIWMAr2glcJtr0P1qYpYE/GyQf8kdiWKsylMgJkmqGdOVWtMo3KBr4cZnEziO8ab+V0BsjyFXSqPgPmgZWadLitYJfqeUBZ9i6bc3SrFqDb6klZtYAf3MfrEhMqBWwDV8EqjQQ8UPEUmA/Ogl+a3P0DnoIFzRZCHSm2u2kXTfubrQQXgdsaJh9AI7ZjcbXATAKuaJx8PR/BObBcRsBBQ5Kv5wXYnkRAG3dfvoF8AbvjBBw2NPn6S6JnOgG0enPTcAHEHe5r/muGaMzUK8wPWoA5EFUJ9vDjz4Y4Imrrlw0CVksOHnSOLXzGNwhoFfZEicd7DQJ+C7uiNyxg3DIBS8IC6GWFnxYJqIQFUP88YpGA0bCAl1wI2RI3ogYiNEj8bkE1+Ba0R43Fn4HLFhz9a+DTdCMx6gnGDG+IOuMGItQ7fzNUwNGkM8F9orbEZFLyF2WGohQ7eJpiQvLn6xugpAIo6E2MCxpfEnQ/OzSbsXg41oMzovY6SrXgSVOVdw8c55v6jFNh2XeEurmd7OKzoySKsW7o8ZrAe14YucvFXeyCkOf+a8zycAKcACfACXACnAAnwN74K8AAiYdT5l3jQYgAAAAASUVORK5CYII=">
          <span>EC2 Instance<br>Types &amp; Pricing</span>
        </div>
        <div class="filters">
          <selector
            v-model="period.selection"
            v-bind:options="period.options"
            v-bind:format-label="formatSelectorLabel"
            v-bind:format-group-label="formatSelectorGroupLabel"/>
          <selector
            v-model="reservation.selection"
            v-bind:options="reservation.options"
            v-bind:format-label="formatSelectorLabel"
            v-bind:format-group-label="formatSelectorGroupLabel"/>
          <selector
            v-model="location.selection"
            v-bind:options="location.options"
            v-bind:format-label="formatSelectorLabel"
            v-bind:format-group-label="formatSelectorGroupLabel"/>
          <selector
            v-model="software.selection"
            v-bind:options="software.options"
            v-bind:enabled="software.enabled"
            v-bind:format-label="formatSelectorLabel"
            v-bind:format-group-label="formatSelectorGroupLabel"/>
        </div>
      </header>
      <instance-types-table
        class="instance-types"
        v-bind:instance-types="instanceTypes"
        v-bind:rate-multiplier="period.selection.rateMultiplier.rateMultiplier"
        v-on:selectInstanceType="selectInstanceType($event)"/>
      <div class="footer">
        The prices were <strong>last updated at {{buildDate | dateTime}}</strong> using <strong>data published at {{publicationDate | dateTime}}</strong>, your time.
        The prices and instance type details come from the from the <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html">AWS Price List API</a>.
        This page was build by <a href="http://twitter.com/iconara" title="Theo Hultberg">@iconara</a>, and you can find the code, as well as report bugs or leave feature requests at <a href="https://github.com/iconara/ec2pricing">github.com/iconara/ec2pricing</a>.
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "style/variables.less";

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: 'Helvetica Neue', 'Helvetica', sans-serif;
}

#app {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;

  a {
    color: @accent-color;
    text-decoration: none;
  }

  .progress {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 500%;
    font-weight: bold;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1rem;

    .title {
      display: flex;
      font-weight: bold;
      white-space: nowrap;
      margin-left: -0.2rem;
      margin-bottom: -0.4rem;

      span {
        margin-top: 0.3rem;
      }

      .cloud {
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
      }
    }

    .filters {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-end;

      & > * {
        margin-left: 1rem;
      }
    }
  }

  .instance-types {
    width: 100%;
  }

  .footer {
    margin-top: 1rem;
    font-size: 80%;
    line-height: 150%;
    color: #333;
  }
}
</style>

<script>
import Vue from 'vue'
import DatabaseLoader from './utils/DatabaseLoader'
import CostDatabase from './utils/CostDatabase'
import InstanceTypesTable from './components/InstanceTypesTable'
import Selector from './components/Selector'

const DATABASE_LOCATION = 'static/data/ec2.sqlite'

const RATE_MULTIPLIER_OPTIONS = [
  {id: 0, value: 'hour', enabled: true, rateMultiplier: 1},
  {id: 1, value: 'day', enabled: true, rateMultiplier: 24},
  {id: 2, value: 'week', enabled: true, rateMultiplier: 24 * 7},
  {id: 3, value: 'month', enabled: true, rateMultiplier: 24 * 30},
  {id: 4, value: 'year', enabled: true, rateMultiplier: 24 * 365}
]

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
const NA = 'NA'

const FILTER_CONFIG = {
  'period': {
    'rateMultiplier': {defaultValue: 'hour', options: RATE_MULTIPLIER_OPTIONS}
  },
  'reservation': {
    'purchaseOption': {collectionName: 'purchaseOptions', defaultValue: PARTIAL_UPFRONT, ignoredValues: ['']},
    'leaseContractLength': {collectionName: 'leaseContractLengths', defaultValue: ONE_YEAR, ignoredValues: ['']},
    'offeringClass': {collectionName: 'offeringClasses', defaultValue: STANDARD, ignoredValues: ['']}
  },
  'location': {
    'location': {collectionName: 'locations', defaultValue: US_EAST_1, ignoredValues: ['']},
    'tenancy': {collectionName: 'tenancies', defaultValue: SHARED, ignoredValues: ['', 'Host']}
  },
  'software': {
    'operatingSystem': {collectionName: 'operatingSystems', defaultValue: LINUX, ignoredValues: ['', NA]},
    'licenseModel': {collectionName: 'licenseModels', defaultValue: NO_LICENSE_REQUIRED, ignoredValues: ['', NA]},
    'preinstalledSoftware': {collectionName: 'preinstalledSoftwares', defaultValue: NA, ignoredValues: ['']}
  }
}

export default {
  name: 'app',

  components: {
    InstanceTypesTable,
    Selector
  },

  data () {
    const d = {
      loaded: false,
      progress: 0,
      publicationDate: null,
      buildDate: null,
      instanceTypes: []
    }
    for (let filterGroupName in FILTER_CONFIG) {
      let group = d[filterGroupName] = {defaults: {}, selection: {}, enabled: {}, options: {}}
      for (let name in FILTER_CONFIG[filterGroupName]) {
        group.defaults[name] = null
        group.selection[name] = null
        group.enabled[name] = true
        group.options[name] = []
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

      for (let filterGroupName in FILTER_CONFIG) {
        let filterGroup = this[filterGroupName]
        for (let filterName in FILTER_CONFIG[filterGroupName]) {
          let filterConfig = FILTER_CONFIG[filterGroupName][filterName]
          let options = filterConfig.options
          if (!options || options.length === 0) {
            options = this._db[filterConfig.collectionName]
            options = options.map(option => {
              return {
                id: option.id,
                value: option[filterName],
                enabled: true
              }
            })
            options = options.filter(option => filterConfig.ignoredValues.indexOf(option.value) === -1)
          }
          filterGroup.options[filterName] = options
          filterGroup.selection[filterName] = filterGroup.defaults[filterName] = options.find(option => option.value === filterConfig.defaultValue)
        }
      }

      this.$watch('reservation.selection', this.updateReservationOptions)
      this.$watch('software.selection', this.updateOperatingSystemOptions)
      this.$watch('reservation.selection', this.loadInstanceTypes)
      this.$watch('software.selection', this.loadInstanceTypes)
      this.$watch('location.selection', this.loadInstanceTypes)
      this.updateReservationOptions()
      this.updateOperatingSystemOptions()
      this.loadInstanceTypes()
    },

    loadInstanceTypes () {
      const selections = {
        purchaseOptionId: this.reservation.selection.purchaseOption.id,
        leaseContractLengthId: this.reservation.selection.leaseContractLength.id,
        offeringClassId: this.reservation.selection.offeringClass.id,
        locationId: this.location.selection.location.id,
        tenancyId: this.location.selection.tenancy.id,
        operatingSystemId: this.software.selection.operatingSystem.id,
        licenseModelId: this.software.selection.licenseModel.id,
        preinstalledSoftwareId: this.software.selection.preinstalledSoftware.id
      }
      const selectedInstanceTypes = this.instanceTypes.filter((it) => it.selected).map((it) => it.name)
      this.instanceTypes = []
      for (let instanceType of this._db.instanceTypes(selections)) {
        instanceType.selected = selectedInstanceTypes.indexOf(instanceType.name) !== -1
        this.instanceTypes.push(instanceType)
      }
    },

    updateReservationOptions () {
      const noUpfront = this.reservation.options.purchaseOption.find(option => option.value === NO_UPFRONT)
      const oneYear = this.reservation.options.leaseContractLength.find(option => option.value === ONE_YEAR)
      const threeYear = this.reservation.options.leaseContractLength.find(option => option.value === THREE_YEAR)
      const convertible = this.reservation.options.offeringClass.find(option => option.value === CONVERTIBLE)
      noUpfront.enabled = this.reservation.selection.leaseContractLength === oneYear
      oneYear.enabled = this.reservation.selection.offeringClass !== convertible
      threeYear.enabled = this.reservation.selection.purchaseOption !== noUpfront
      convertible.enabled = this.reservation.selection.leaseContractLength !== oneYear
      if (!noUpfront.enabled && this.reservation.selection.purchaseOption === noUpfront) {
        this.reservation.selection.purchaseOption = this.reservation.defaults.purchaseOption
      }
      if (!oneYear.enabled && this.reservation.selection.leaseContractLength === oneYear) {
        this.reservation.selection.leaseContractLength = this.reservation.defaults.leaseContractLength
      }
      if (!convertible.enabled && this.reservation.selection.offeringClass === convertible) {
        this.reservation.selection.offeringClass = this.reservation.defaults.offeringClass
      }
    },

    updateOperatingSystemOptions () {
      const licenseIncluded = this.software.options.licenseModel.find((option) => option.value === LICENSE_INCLUDED)
      const noLicenseRequired = this.software.options.licenseModel.find((option) => option.value === NO_LICENSE_REQUIRED)
      const bringYourOwnLicense = this.software.options.licenseModel.find((option) => option.value === BYO_LICENSE)
      const windowsSelected = this.software.selection.operatingSystem.value === WINDOWS
      this.software.enabled.licenseModel = windowsSelected
      noLicenseRequired.enabled = !windowsSelected
      if (this.software.enabled.licenseModel && this.software.selection.licenseModel === this.software.defaults.licenseModel) {
        this.software.selection.licenseModel = licenseIncluded
      } else if (!this.software.enabled.licenseModel && this.software.selection.licenseModel !== this.software.defaults.licenseModel) {
        this.software.selection.licenseModel = this.software.defaults.licenseModel
      }
      this.software.enabled.preinstalledSoftware = windowsSelected && this.software.selection.licenseModel === licenseIncluded
      if (!this.software.enabled.preinstalledSoftware && this.software.selection.preinstalledSoftware !== this.software.defaults.preinstalledSoftware) {
        this.software.selection.preinstalledSoftware = this.software.defaults.preinstalledSoftware
      }
    },

    selectInstanceType (instanceType) {
      instanceType.selected = !instanceType.selected
    },

    formatSelectorLabel (selector, selectedOptions) {
      if (selectedOptions === this.period.selection) {
        return `Price per ${selectedOptions.rateMultiplier.value}`
      } else if (selectedOptions === this.location.selection) {
        return selectedOptions.location.value
      } else if (selectedOptions === this.software.selection && selectedOptions.operatingSystem.value !== WINDOWS) {
        return selectedOptions.operatingSystem.value
      } else if (selectedOptions === this.software.selection && selectedOptions.operatingSystem.value === WINDOWS && selectedOptions.preinstalledSoftware.value === NA) {
        return `${selectedOptions.operatingSystem.value}, ${selectedOptions.licenseModel.value}`
      } else {
        return Object
          .values(selectedOptions)
          .filter(option => !!option)
          .map(option => option.value)
          .join(', ')
      }
    },

    formatSelectorGroupLabel (selector, groupKey) {
      let label = groupKey
      if (label === 'rateMultiplier') {
        return ''
      } else {
        label = label.replace(/\B[A-Z]/g, s => ' ' + s)
        label = label.substring(0, 1).toUpperCase() + label.substring(1)
        return label
      }
    }
  },

  filters: {
    dateTime (date) {
      if (date) {
        const zeroFill = (n) => n < 10 ? `0${n}` : n.toString()
        const dateString = [date.getFullYear(), zeroFill(date.getMonth()), zeroFill(date.getDate())].join('-')
        const timeString = [zeroFill(date.getHours()), zeroFill(date.getMinutes())].join(':')
        return `${dateString} ${timeString}`
      } else {
        return ''
      }
    }
  }
}
</script>
