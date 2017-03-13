import Vue from 'vue'
import InstanceTypesTable from '@/components/InstanceTypesTable'

describe('InstanceTypesTable', (done) => {
  const instanceTypes = [
    {name: 'm3.xlarge', vcpus: 4, memory: '15 Gib', storage: '2 x 40 SSD', networkPerformance: 'High', onDemandHourlyRate: '0.266', reservedHourlyRate: '0.07', upfrontCost: '842'},
    {name: 'm3.medium', vcpus: 1, memory: '3.75 GiB', storage: '1 x 4 SSD', networkPerformance: 'Moderate', onDemandHourlyRate: '0.067', reservedHourlyRate: '0.017', upfrontCost: '211'},
    {name: 'm3.large', vcpus: 2, memory: '7.5 GiB', storage: '1 x 32 SSD', networkPerformance: 'Moderate', onDemandHourlyRate: '0.133', reservedHourlyRate: '0.035', upfrontCost: '421'},
    {name: 'm3.2xlarge', vcpus: 8, memory: '30 GiB', storage: '2 x 80 SSD', networkPerformance: 'High', onDemandHourlyRate: '0.532', reservedHourlyRate: '0.139', upfrontCost: '1683'},
    {name: 'c4.8xlarge', vcpus: 36, memory: '60 GiB', storage: 'EBS only', networkPerformance: '10 Gigabit', onDemandHourlyRate: '1.591', reservedHourlyRate: '0.483', upfrontCost: '4231'},
    {name: 'm1.xlarge', vcpus: 4, memory: '15 GiB', storage: '4 x 420', networkPerformance: 'Hight', onDemandHourlyRate: '0.35', reservedHourlyRate: '0.082', upfrontCost: '$987'}
  ]

  const withMountedComponent = function (body) {
    const Constructor = Vue.extend(InstanceTypesTable)
    const component = new Constructor().$mount()
    component.instanceTypes = instanceTypes
    Vue.nextTick(body.bind(null, component))
  }

  it('renders a table row for each instance type', (done) => {
    withMountedComponent((component) => {
      const rows = component.$el.querySelectorAll('table tbody tr')
      expect(rows.length).to.equal(instanceTypes.length)
      done()
    })
  })

  it('sorts the instances by family and size', (done) => {
    withMountedComponent((component) => {
      const nameColumns = component.$el.querySelectorAll('table tbody tr td:first-child')
      expect(nameColumns[0].textContent).to.equal('c4.8xlarge')
      expect(nameColumns[1].textContent).to.equal('m1.xlarge')
      expect(nameColumns[5].textContent).to.equal('m3.2xlarge')
      done()
    })
  })

  it('renders a column for each property', (done) => {
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(3) td')
      expect(columns.length).to.equal(8)
      expect(columns[0].textContent).to.equal('m3.medium')
      expect(columns[1].textContent).to.equal('1')
      expect(columns[2].textContent).to.equal('3.75 GiB')
      expect(columns[3].textContent).to.equal('1 x 4 SSD')
      expect(columns[4].textContent).to.match(/moderate/i)
      expect(columns[5].textContent).to.match(/0\.067/)
      expect(columns[6].textContent).to.match(/0\.017/)
      expect(columns[7].textContent).to.match(/211/)
      done()
    })
  })

  it('fixes capitalization issues in the memory column', (done) => {
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(5) td')
      expect(columns[0].textContent).to.equal('m3.xlarge')
      expect(columns[2].textContent).to.equal('15 GiB')
      done()
    })
  })

  it('adds "HDD" to the storage column when it\'s missing', (done) => {
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(2) td')
      expect(columns[3].textContent).to.equal('4 x 420 HDD')
      done()
    })
  })

  it('parenthesizes "EBS only" in the storage column', (done) => {
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(1) td')
      expect(columns[3].textContent).to.equal('(EBS only)')
      done()
    })
  })

  it('downcases the strings in the network performance column', (done) => {
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(4) td')
      expect(columns[4].textContent).to.equal('moderate')
      done()
    })
  })

  it('adds a $ to the on demand hourly rate', (done) => {
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(4) td')
      expect(columns[5].textContent).to.equal('$0.133')
      done()
    })
  })

  it('adds a $ to the reserved hourly rate', (done) => {
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(4) td')
      expect(columns[6].textContent).to.equal('$0.035')
      done()
    })
  })

  it('adds a $ and thousands separators to the upfront cost', (done) => {
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(1) td')
      expect(columns[7].textContent).to.equal('$4,231')
      done()
    })
  })
})
