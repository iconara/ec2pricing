<template>
  <div id="app">
    <div class="progress" v-if="!loaded">
      {{progress}}%
    </div>
    <div v-else>
      <div>
        <filter-selector
          v-for="[name, idName, collectionName] in filterMeta"
          v-bind:key="name"
          v-model="selections[idName]"
          v-bind:options="filters[collectionName]"
          v-bind:name="name"/>
      </div>
      <instance-types-table
        v-bind:instance-types="instanceTypes"/>
      <div>
        Data published by AWS at {{publicationDate}}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import DatabaseLoader from './utils/DatabaseLoader'
import CostDatabase from './utils/CostDatabase'
import Comparators from './utils/Comparators'
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
        this.db = new CostDatabase(db)
        this.loaded = true
        Vue.nextTick(this.setup)
      })
    },

    setup () {
      this.db.setup()
      this.publicationDate = this.db.publicationDate()
      for (let [name, idName, collectionName] of FILTER_META) {
        let elements = this.db[collectionName]()
        let defaultElement = elements.find((element) => element[name] === FILTER_DEFAULTS[name])
        this.filters[collectionName] = elements.filter((element) => FILTER_BLACKLISTS[name].indexOf(element[name]) === -1)
        this.selections[idName] = defaultElement && defaultElement.id || 0
      }
    }
  },

  computed: {
    instanceTypes () {
      if (this.db) {
        return this.db.instanceTypes(this.selections).sort(Comparators.instanceType)
      } else {
        return []
      }
    }
  }
}
</script>

<style>
#app {
}
</style>
