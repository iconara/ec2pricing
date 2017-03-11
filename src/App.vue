<template>
  <div id="app">
    <div class="progress" v-if="!loaded">
      {{progress}}%
    </div>
    <div v-else>
      <div>
        <filter-selector
          v-model="selections.purchaseOptionId"
          v-bind:options="purchaseOptions"
          v-bind:name="'purchaseOption'"/>

        <filter-selector
          v-model="selections.leaseContractLengthId"
          v-bind:options="leaseContractLengths"
          v-bind:name="'leaseContractLength'"/>

        <filter-selector
          v-model="selections.offeringClassId"
          v-bind:options="offeringClasses"
          v-bind:name="'offeringClass'"/>

        <filter-selector
          v-model="selections.locationId"
          v-bind:options="locations"
          v-bind:name="'location'"/>

        <filter-selector
          v-model="selections.operatingSystemId"
          v-bind:options="operatingSystems"
          v-bind:name="'operatingSystem'"/>

        <filter-selector
          v-model="selections.tenancyId"
          v-bind:options="tenancies"
          v-bind:name="'tenancy'"/>

        <filter-selector
          v-model="selections.licenseModelId"
          v-bind:options="licenseModels"
          v-bind:name="'licenseModel'"/>

        <filter-selector
          v-model="selections.preinstalledSoftwareId"
          v-bind:options="preinstalledSoftwares"
          v-bind:name="'preinstalledSoftware'"/>
      </div>
      <instance-types-table v-bind:instance-types="instanceTypes"></instance-types-table>
      <div>
        Data published by AWS at {{publicationDate}}
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseLoader from './utils/DatabaseLoader'
import CostDatabase from './utils/CostDatabase'
import InstanceTypesTable from './components/InstanceTypesTable'
import FilterSelector from './components/FilterSelector'

const DATABASE_LOCATION = 'static/data/ec2.sqlite'

const DIMENSION_META = [
  ['purchaseOption', 'purchaseOptionId', 'purchaseOptions'],
  ['leaseContractLength', 'leaseContractLengthId', 'leaseContractLengths'],
  ['offeringClass', 'offeringClassId', 'offeringClasses'],
  ['location', 'locationId', 'locations'],
  ['operatingSystem', 'operatingSystemId', 'operatingSystems'],
  ['tenancy', 'tenancyId', 'tenancies'],
  ['licenseModel', 'licenseModelId', 'licenseModels'],
  ['preinstalledSoftware', 'preinstalledSoftwareId', 'preinstalledSoftwares']
]

const DIMENSION_DEFAULTS = {
  'purchaseOption': '',
  'leaseContractLength': '',
  'offeringClass': '',
  'location': 'US East (N. Virginia)',
  'operatingSystem': 'Linux',
  'tenancy': 'Shared',
  'licenseModel': 'No License required',
  'preinstalledSoftware': 'NA'
}

function instanceTypeSort (it1, it2) {
  let [family1, size1] = it1.name.split('.')
  let [family2, size2] = it2.name.split('.')
  let familyResult = family1.localeCompare(family2)
  if (familyResult === 0) {
    return sizeToNumber(size1) - sizeToNumber(size2)
  } else {
    return familyResult
  }
}

function sizeToNumber (size) {
  let sizes = ['nano', 'micro', 'small', 'medium', 'large', 'xlarge']
  let n = sizes.indexOf(size)
  if (n > -1) {
    return n
  } else {
    let matches = size.match(/^(\d+)xlarge/)
    if (matches) {
      return sizes.length + parseInt(matches[1])
    } else {
      return -1
    }
  }
}

export default {
  name: 'app',

  components: {
    InstanceTypesTable,
    FilterSelector
  },

  data () {
    return {
      loaded: false,
      progress: 0,
      publicationDate: null,
      purchaseOptions: [],
      leaseContractLengths: [],
      offeringClasses: [],
      locations: [],
      operatingSystems: [],
      tenancies: [],
      licenseModels: [],
      preinstalledSoftwares: [],
      selections: {
        purchaseOptionId: null,
        leaseContractLengthId: null,
        offeringClassId: null,
        locationId: null,
        operatingSystemId: null,
        tenancyId: null,
        licenseModelId: null,
        preinstalledSoftwareId: null
      }
    }
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
        this.publicationDate = this.db.publicationDate()
        for (let [name, idName, collectionName] of DIMENSION_META) {
          let elements = this.db[collectionName]()
          let defaultElement = elements.find((element) => element[name] === DIMENSION_DEFAULTS[name])
          this[collectionName] = elements
          this.selections[idName] = defaultElement && defaultElement.id || 0
        }
      })
    }
  },

  computed: {
    instanceTypes () {
      if (this.db) {
        return this.db.instanceTypes(this.selections).sort(instanceTypeSort)
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
