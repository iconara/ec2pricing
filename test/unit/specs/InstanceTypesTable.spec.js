import Vue from 'vue'
import InstanceTypesTable from '@/components/InstanceTypesTable'

describe('InstanceTypesTable', (done) => {
  const instanceTypes = [
    {name: 'm3.medium', vcpus: 1, memory: '3.75 GiB', storage: '1 x 4 SSD', networkPerformance: 'Moderate', hourlyRate: '0.067'},
    {name: 'm3.large', vcpus: 2, memory: '7.5 GiB', storage: '1 x 32 SSD', networkPerformance: 'Moderate', hourlyRate: '0.133'},
    {name: 'm3.xlarge', vcpus: 4, memory: '15 GiB', storage: '2 x 40 SSD', networkPerformance: 'High', hourlyRate: '0.266'},
    {name: 'm3.2xlarge', vcpus: 8, memory: '30 GiB', storage: '2 x 80 SSD', networkPerformance: 'High', hourlyRate: '0.532'}
  ]

  it('renders a table row for each instance type', (done) => {
    const Constructor = Vue.extend(InstanceTypesTable)
    const vm = new Constructor().$mount()
    vm.instanceTypes = instanceTypes
    Vue.nextTick(() => {
      const rows = vm.$el.querySelectorAll('table tbody tr')
      expect(rows.length).to.equal(instanceTypes.length)
      done()
    })
  })

  it('renders a column for each property', (done) => {
    const Constructor = Vue.extend(InstanceTypesTable)
    const vm = new Constructor().$mount()
    vm.instanceTypes = instanceTypes
    Vue.nextTick(() => {
      const columns = vm.$el.querySelectorAll('table tbody tr:first-child td')
      expect(columns.length).to.equal(6)
      expect(columns[0].textContent).to.equal('m3.medium')
      expect(columns[1].textContent).to.equal('1')
      expect(columns[2].textContent).to.equal('3.75 GiB')
      expect(columns[3].textContent).to.equal('1 x 4 SSD')
      expect(columns[4].textContent).to.equal('Moderate')
      expect(columns[5].textContent).to.equal('0.067')
      done()
    })
  })
})
