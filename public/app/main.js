const app = new Vue({
  el: "#app",

  template: `
    <div class="app">
      <div class="progress" v-if="!loaded">
        {{progress}}%
      </div>
      <div v-else>
        <div>
          <select v-model="selectedPurchaseOptionId">
            <option v-for="purchaseOption in purchaseOptions" v-bind:value="purchaseOption.id">
              {{purchaseOption.purchaseOption}}
            </option>
          </select>

          <select v-model="selectedLeaseContractLengthId">
            <option v-for="leaseContractLength in leaseContractLengths" v-bind:value="leaseContractLength.id">
              {{leaseContractLength.leaseContractLength}}
            </option>
          </select>

          <select v-model="selectedOfferingClassId">
            <option v-for="offeringClass in offeringClasses" v-bind:value="offeringClass.id">
              {{offeringClass.offeringClass}}
            </option>
          </select>

          <select v-model="selectedLocationId">
            <option v-for="location in locations" v-bind:value="location.id">
              {{location.location}}
            </option>
          </select>

          <select v-model="selectedOperatingSystemId">
            <option v-for="operatingSystem in operatingSystems" v-bind:value="operatingSystem.id">
              {{operatingSystem.operatingSystem}}
            </option>
          </select>

          <select v-model="selectedTenancyId">
            <option v-for="tenancy in tenancies" v-bind:value="tenancy.id">
              {{tenancy.tenancy}}
            </option>
          </select>

          <select v-model="selectedLicenseModelId">
            <option v-for="licenseModel in licenseModels" v-bind:value="licenseModel.id">
              {{licenseModel.licenseModel}}
            </option>
          </select>

          <select v-model="selectedPreinstalledSoftwareId">
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
      </div>
    </div>
  `,

  data: {
    loaded: false,
    progress: 0,
    purchaseOptions: [],
    leaseContractLengths: [],
    offeringClasses: [],
    locations: [],
    operatingSystems: [],
    tenancies: [],
    licenseModels: [],
    preinstalledSoftwares: [],
    selectedPurchaseOptionId: null,
    selectedLeaseContractLengthId: null,
    selectedOfferingClassId: null,
    selectedLocationId: null,
    selectedOperatingSystemId: null,
    selectedTenancyId: null,
    selectedLicenseModelId: null,
    selectedPreinstalledSoftwareId: null
  },

  methods: {
    start() {
      this.load()
    },

    load() {
      let loader = new DatabaseLoader("data/ec2.sqlite")

      loader.onProgress((loaded, total) => {
        this.progress = Math.round(loaded/total * 100)
      })

      loader.loadDatabase().then((db) => {
        this.db = db
        this.loaded = true

        db.each("SELECT purchase_option_id AS id, purchase_option AS purchaseOption FROM purchase_option", null, (row) => {
          this.purchaseOptions.push(row)
        })
        this.selectedPurchaseOptionId = this.purchaseOptions.find((po) => po.purchaseOption == "").id

        db.each("SELECT lease_contract_length_id AS id, lease_contract_length AS leaseContractLength FROM lease_contract_length", null, (row) => {
          this.leaseContractLengths.push(row)
        })
        this.selectedLeaseContractLengthId = this.leaseContractLengths.find((lcl) => lcl.leaseContractLength == "").id

        db.each("SELECT offering_class_id AS id, offering_class AS offeringClass FROM offering_class", null, (row) => {
          this.offeringClasses.push(row)
        })
        this.selectedOfferingClassId = this.offeringClasses.find((oc) => oc.offeringClass == "").id

        db.each("SELECT location_id AS id, location FROM location", null, (row) => {
          this.locations.push(row)
        })
        this.selectedLocationId = this.locations.find((l) => l.location == "US East (N. Virginia)").id

        db.each("SELECT operating_system_id AS id, operating_system AS operatingSystem FROM operating_system", null, (row) => {
          this.operatingSystems.push(row)
        })
        this.selectedOperatingSystemId = this.operatingSystems.find((os) => os.operatingSystem == "Linux").id

        db.each("SELECT tenancy_id AS id, tenancy FROM tenancy", null, (row) => {
          this.tenancies.push(row)
        })
        this.selectedTenancyId = this.tenancies.find((t) => t.tenancy == "Shared").id

        db.each("SELECT license_model_id AS id, license_model AS licenseModel FROM license_model", null, (row) => {
          this.licenseModels.push(row)
        })
        this.selectedLicenseModelId = this.licenseModels.find((lm) => lm.licenseModel == "No License required").id

        db.each("SELECT preinstalled_software_id AS id, preinstalled_software AS preinstalledSoftware FROM preinstalled_software", null, (row) => {
          this.preinstalledSoftwares.push(row)
        })
        this.selectedPreinstalledSoftwareId = this.preinstalledSoftwares.find((ps) => ps.preinstalledSoftware == "NA").id
      })
    },

    instanceTypeSort(it1, it2) {
      let [family1, size1] = it1.name.split(".")
      let [family2, size2] = it2.name.split(".")
      let familyResult = family1.localeCompare(family2)
      if (familyResult == 0) {
        return this.sizeToNumber(size1) - this.sizeToNumber(size2)
      } else {
        return familyResult
      }
    },

    sizeToNumber(size) {
      let sizes = ["nano", "micro", "small", "medium", "large", "xlarge"]
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
  },

  computed: {
    instanceTypes() {
      if (this.db) {
        let sql = `
          SELECT
            instance_type AS name,
            vcpus,
            memory,
            storage,
            network_performance AS networkPerformance,
            hourly_rate AS hourlyRate
          FROM instance_type it
          LEFT JOIN cost c ON (it.instance_type_id = c.instance_type_id)
          WHERE purchase_option_id = :purchaseOptionId
          AND lease_contract_length_id = :leaseContractLengthId
          AND offering_class_id = :offeringClassId
          AND location_id = :locationId
          AND operating_system_id = :operatingSystemId
          AND tenancy_id = :tenancyId
          AND license_model_id = :licenseModelId
          AND preinstalled_software_id = :preinstalledSoftwareId
        `
        let statement = this.db.prepare(sql)
        statement.bind({
          ":purchaseOptionId": this.selectedPurchaseOptionId,
          ":leaseContractLengthId": this.selectedLeaseContractLengthId,
          ":offeringClassId": this.selectedOfferingClassId,
          ":locationId": this.selectedLocationId,
          ":operatingSystemId": this.selectedOperatingSystemId,
          ":tenancyId": this.selectedTenancyId,
          ":licenseModelId": this.selectedLicenseModelId,
          ":preinstalledSoftwareId": this.selectedPreinstalledSoftwareId
        })
        let rows = []
        while (statement.step()) {
          rows.push(statement.getAsObject())
        }
        statement.free()
        rows.sort((it1, it2) => this.instanceTypeSort(it1, it2))
        return rows
      } else {
        return []
      }
    }
  }
})
