<template>
  <div id="app">
    <div class="progress" v-if="!loaded">
      {{progress}}%
    </div>
    <div v-else>
      <div>
        <select v-model="selections.purchaseOptionId">
          <option v-for="purchaseOption in purchaseOptions" v-bind:value="purchaseOption.id">
            {{purchaseOption.purchaseOption}}
          </option>
        </select>

        <select v-model="selections.leaseContractLengthId">
          <option v-for="leaseContractLength in leaseContractLengths" v-bind:value="leaseContractLength.id">
            {{leaseContractLength.leaseContractLength}}
          </option>
        </select>

        <select v-model="selections.offeringClassId">
          <option v-for="offeringClass in offeringClasses" v-bind:value="offeringClass.id">
            {{offeringClass.offeringClass}}
          </option>
        </select>

        <select v-model="selections.locationId">
          <option v-for="location in locations" v-bind:value="location.id">
            {{location.location}}
          </option>
        </select>

        <select v-model="selections.operatingSystemId">
          <option v-for="operatingSystem in operatingSystems" v-bind:value="operatingSystem.id">
            {{operatingSystem.operatingSystem}}
          </option>
        </select>

        <select v-model="selections.tenancyId">
          <option v-for="tenancy in tenancies" v-bind:value="tenancy.id">
            {{tenancy.tenancy}}
          </option>
        </select>

        <select v-model="selections.licenseModelId">
          <option v-for="licenseModel in licenseModels" v-bind:value="licenseModel.id">
            {{licenseModel.licenseModel}}
          </option>
        </select>

        <select v-model="selections.preinstalledSoftwareId">
          <option v-for="preinstalledSoftware in preinstalledSoftwares" v-bind:value="preinstalledSoftware.id">
            {{preinstalledSoftware.preinstalledSoftware}}
          </option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>CPUs</th>
            <th>RAM</th>
            <th>Disk</th>
            <th>Network performance</th>
            <th>Hourly rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="instanceType in instanceTypes">
            <td>{{instanceType.name}}</td>
            <td>{{instanceType.vcpus}}</td>
            <td>{{instanceType.memory}}</td>
            <td>{{instanceType.storage}}</td>
            <td>{{instanceType.networkPerformance}}</td>
            <td>{{instanceType.hourlyRate}}</td>
          </tr>
        </tbody>
      </table>
      <div>
        Data published by AWS at {{publicationDate}}
      </div>
    </div>
  </div>
</template>

<script>
import DatabaseLoader from './utils/DatabaseLoader'
import CostDatabase from './utils/CostDatabase'

const DATABASE_LOCATION = 'static/data/ec2.sqlite'

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
        this.purchaseOptions = this.db.purchaseOptions()
        this.leaseContractLengths = this.db.leaseContractLengths()
        this.offeringClasses = this.db.offeringClasses()
        this.locations = this.db.locations()
        this.operatingSystems = this.db.operatingSystems()
        this.tenancies = this.db.tenancies()
        this.licenseModels = this.db.licenseModels()
        this.preinstalledSoftwares = this.db.preinstalledSoftwares()
        this.selections = {
          purchaseOptionId: this.purchaseOptions.find((po) => po.purchaseOption === '').id,
          leaseContractLengthId: this.leaseContractLengths.find((lcl) => lcl.leaseContractLength === '').id,
          offeringClassId: this.offeringClasses.find((oc) => oc.offeringClass === '').id,
          locationId: this.locations.find((l) => l.location === 'US East (N. Virginia)').id,
          operatingSystemId: this.operatingSystems.find((os) => os.operatingSystem === 'Linux').id,
          tenancyId: this.tenancies.find((t) => t.tenancy === 'Shared').id,
          licenseModelId: this.licenseModels.find((lm) => lm.licenseModel === 'No License required').id,
          preinstalledSoftwareId: this.preinstalledSoftwares.find((ps) => ps.preinstalledSoftware === 'NA').id
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
