import Vue from 'vue'
import InstanceTypesTable from '@/components/InstanceTypesTable'

describe('InstanceTypesTable', (done) => {
  let instanceTypes = null
  let rateMultiplier = null

  beforeEach(() => {
    instanceTypes = [
      {name: 'm3.xlarge', vcpus: 4, memory: 15, storage: {disks: 2, size: 40, totalSize: 80, type: 'SSD'}, networkPerformance: 'High', onDemandHourlyRate: '0.266', reservedHourlyRate: '0.07', upfrontCost: '842'},
      {name: 'm3.medium', vcpus: 1, memory: 3.75, storage: {disks: 1, size: 4, totalSize: 4, type: 'SSD'}, networkPerformance: 'Moderate', onDemandHourlyRate: '0.067', reservedHourlyRate: '0.017', upfrontCost: '211'},
      {name: 'm3.large', vcpus: 2, memory: 7.5, storage: {disks: 1, size: 32, totalSize: 32, type: 'SSD'}, networkPerformance: 'Moderate', onDemandHourlyRate: '0.133', reservedHourlyRate: '0.035', upfrontCost: '421'},
      {name: 'm3.2xlarge', vcpus: 8, memory: 30, storage: {disks: 2, size: 80, totalSize: 160, type: 'SSD'}, networkPerformance: 'High', onDemandHourlyRate: '0.532', reservedHourlyRate: '0.139', upfrontCost: '1683'},
      {name: 'c4.8xlarge', vcpus: 36, memory: 60, storage: {ebsOnly: true, type: 'EBS'}, networkPerformance: '10 Gigabit', onDemandHourlyRate: '1.591', reservedHourlyRate: '0.483', upfrontCost: '4231'},
      {name: 'm1.xlarge', vcpus: 4, memory: 15, storage: {disks: 4, size: 420, totalSize: 1680, type: 'HDD'}, networkPerformance: 'High', onDemandHourlyRate: '0.35', reservedHourlyRate: '0.082', upfrontCost: '$987'},
      {name: 'x1.32xlarge', vcpus: 128, memory: 1952, storage: {disks: 2, size: 1920, totalSize: 3840, type: 'HDD'}, networkPerformance: 'High', onDemandHourlyRate: '13.33835', reservedHourlyRate: '3.914', upfrontCost: '34285'}
    ]
    rateMultiplier = 1
  })

  const withMountedComponent = function (body) {
    const Constructor = Vue.extend(InstanceTypesTable)
    const component = new Constructor().$mount()
    component.instanceTypes = instanceTypes
    component.rateMultiplier = rateMultiplier
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
      expect(columns[3].textContent).to.equal('1 × 4 GB SSD')
      expect(columns[4].textContent).to.match(/moderate/i)
      expect(columns[5].textContent).to.match(/0\.067/)
      expect(columns[6].textContent).to.match(/0\.017/)
      expect(columns[7].textContent).to.match(/211/)
      done()
    })
  })

  it('formats the memory column as a number and adds "GiB"', (done) => {
    withMountedComponent((component) => {
      const m3MediumColumns = component.$el.querySelectorAll('table tbody tr:nth-child(3) td')
      const x132XLargeColumns = component.$el.querySelectorAll('table tbody tr:nth-child(7) td')
      expect(m3MediumColumns[2].textContent).to.equal('3.75 GiB')
      expect(x132XLargeColumns[2].textContent).to.equal('1,952 GiB')
      done()
    })
  })

  it('formats the storage column with the number of disks, their size, their type and adds "GB"', (done) => {
    withMountedComponent((component) => {
      const m3MediumColumns = component.$el.querySelectorAll('table tbody tr:nth-child(3) td')
      const x132XLargeColumns = component.$el.querySelectorAll('table tbody tr:nth-child(7) td')
      expect(m3MediumColumns[3].textContent).to.equal('1 × 4 GB SSD')
      expect(x132XLargeColumns[3].textContent).to.equal('2 × 1,920 GB HDD')
      done()
    })
  })

  it('formats the storage column as "(EBS only)" when the instance doesn\'t have instance storage', (done) => {
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

  it('displays "n/a" when an instance type does not have an on demand rate', (done) => {
    instanceTypes.find((it) => it.name === 'm3.large').onDemandHourlyRate = null
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(4) td')
      expect(columns[5].textContent).to.equal('n/a')
      done()
    })
  })

  it('displays "n/a" when an instance type does not have a reserved rate', (done) => {
    instanceTypes.find((it) => it.name === 'm3.large').reservedHourlyRate = null
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(4) td')
      expect(columns[6].textContent).to.equal('n/a')
      done()
    })
  })

  it('displays "n/a" when an instance type does not have an upfront cost', (done) => {
    instanceTypes.find((it) => it.name === 'm3.large').upfrontCost = null
    withMountedComponent((component) => {
      const columns = component.$el.querySelectorAll('table tbody tr:nth-child(4) td')
      expect(columns[7].textContent).to.equal('n/a')
      done()
    })
  })

  describe('when the rate multiplier prop is set', () => {
    beforeEach(() => {
      rateMultiplier = 3
    })

    it('multiplies the on demand rate with the rate multiplier', (done) => {
      withMountedComponent((component) => {
        const columns = component.$el.querySelectorAll('table tbody tr:nth-child(4) td')
        expect(columns[5].textContent).to.equal('$0.399')
        done()
      })
    })

    it('multiplies the reserved rate with the rate multiplier', (done) => {
      withMountedComponent((component) => {
        const columns = component.$el.querySelectorAll('table tbody tr:nth-child(4) td')
        expect(columns[6].textContent).to.equal('$0.105')
        done()
      })
    })

    it('does not multiply the upfront cost with the rate multiplier', (done) => {
      withMountedComponent((component) => {
        const columns = component.$el.querySelectorAll('table tbody tr:nth-child(1) td')
        expect(columns[7].textContent).to.equal('$4,231')
        done()
      })
    })
  })
})
