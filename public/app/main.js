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
          </tr>
        </thead>
        <tbody>
          <tr v-for="instanceType in instanceTypes">
            <td>{{instanceType.name}}</td>
            <td>{{instanceType.vcpus}}</td>
            <td>{{instanceType.memory}}</td>
            <td>{{instanceType.storage}}</td>
            <td>{{instanceType.networkPerformance}}</td>
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
        db.each("SELECT * FROM instance_type", null, (row) => {
          if (row.instance_type.length > 0) {
            this.instanceTypes.push({
              name: row.instance_type,
              vcpus: row.vcpus,
              memory: row.memory,
              storage: row.storage,
              networkPerformance: row.network_performance
            })
          }
        })
      })
    }
  }
})
