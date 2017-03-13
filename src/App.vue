<template>
  <div id="app">
    <div class="progress" v-if="!loaded">
      {{progress}}%
    </div>
    <div v-else>
      <div class="filters">
        <filter-selector
          v-for="[name, idName, collectionName] in filterMeta"
          v-bind:key="name"
          v-model="selections[idName]"
          v-bind:options="filters[collectionName]"
          v-bind:name="name"/>
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
  font-family: sans-serif;
}

#app {
  padding: 1rem;

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

const FILTER_META = [
  ['purchaseOption', 'purchaseOptionId', 'purchaseOptions'],
  ['leaseContractLength', 'leaseContractLengthId', 'leaseContractLengths'],
  ['offeringClass', 'offeringClassId', 'offeringClasses'],
  ['location', 'locationId', 'locations'],
  ['operatingSystem', 'operatingSystemId', 'operatingSystems'],
  ['tenancy', 'tenancyId', 'tenancies'],
  ['licenseModel', 'licenseModelId', 'licenseModels'],
  ['preinstalledSoftware', 'preinstalledSoftwareId', 'preinstalledSoftwares']
]

const FILTER_DEFAULTS = {
  'purchaseOption': 'Partial Upfront',
  'leaseContractLength': '1yr',
  'offeringClass': 'standard',
  'location': 'US East (N. Virginia)',
  'operatingSystem': 'Linux',
  'tenancy': 'Shared',
  'licenseModel': 'No License required',
  'preinstalledSoftware': 'NA'
}

const FILTER_BLACKLISTS = {
  'purchaseOption': [''],
  'leaseContractLength': [''],
  'offeringClass': [''],
  'location': [''],
  'operatingSystem': [''],
  'tenancy': ['', 'Host'],
  'licenseModel': [''],
  'preinstalledSoftware': ['']
}

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
      filterMeta: FILTER_META,
      filters: {},
      selections: {}
    }
    for (let [_, idName, collectionName] of FILTER_META) {
      d.filters[collectionName] = []
      d.selections[idName] = null
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
      for (let [name, idName, collectionName] of FILTER_META) {
        let elements = this._db[collectionName]
        let defaultElement = elements.find((element) => element[name] === FILTER_DEFAULTS[name])
        this.filters[collectionName] = elements.filter((element) => FILTER_BLACKLISTS[name].indexOf(element[name]) === -1)
        this.selections[idName] = defaultElement && defaultElement.id || 0
      }
    }
  },

  computed: {
    instanceTypes () {
      if (this._db) {
        return this._db.instanceTypes(this.selections)
      } else {
        return []
      }
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
