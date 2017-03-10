const app = new Vue({
  el: "#app",

  template: `
    <div class="app">
      <div class="progress" v-if="!loaded">
        {{progress}}%
      </div>
      <table v-if="loaded">
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
  `,

  data: {
    loaded: false,
    progress: 0,
    instanceTypes: []
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
        this.loaded = true
        let sql = `
          SELECT
            instance_type,
            vcpus,
            memory,
            storage,
            network_performance,
            hourly_rate
          FROM instance_type it
          LEFT JOIN cost c ON (it.instance_type_id = c.instance_type_id)
          NATURAL JOIN purchase_option
          NATURAL JOIN lease_contract_length
          NATURAL JOIN offering_class
          NATURAL JOIN location
          NATURAL JOIN operating_system
          NATURAL JOIN tenancy
          NATURAL JOIN license_model
          NATURAL JOIN preinstalled_software
          WHERE purchase_option_id = 0
          AND lease_contract_length_id = 0
          AND offering_class_id = 0
          AND location_id = 9
          AND operating_system_id = 1
          AND tenancy_id = 3
          AND license_model_id = 4
          AND preinstalled_software_id = 1
        `
        db.each(sql, null, (row) => {
          this.instanceTypes.push({
            name: row.instance_type,
            vcpus: row.vcpus,
            memory: row.memory,
            storage: row.storage,
            networkPerformance: row.network_performance,
            hourlyRate: row.hourly_rate
          })
          this.instanceTypes.sort((it1, it2) => this.instanceTypeSort(it1, it2))
        })
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
  }
})
