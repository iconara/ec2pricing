import Comparators from '@/utils/Comparators'

describe('Comparators', () => {
  describe('name', () => {
    it('returns -1 when the first instance type\'s family lexicographically sorts before the second', () => {
      expect(Comparators.name({name: 'm1.medium'}, {name: 'm3.large'})).to.equal(-1)
    })

    it('returns 1 when the first instance type\'s family lexicographically sorts after the second', () => {
      expect(Comparators.name({name: 'm3.large'}, {name: 'm1.medium'})).to.equal(1)
      expect(Comparators.name({name: 'm1.xlarge'}, {name: 'c1.medium'})).to.equal(1)
    })

    it('returns 0 when given the same instance type twice', () => {
      expect(Comparators.name({name: 'm1.medium'}, {name: 'm1.medium'})).to.equal(0)
    })

    describe('with two instance types in the same family', () => {
      it('returns -1 when the first instance type is smaller than the second', () => {
        expect(Comparators.name({name: 'm1.small'}, {name: 'm1.medium'})).to.equal(-1)
        expect(Comparators.name({name: 'd2.xlarge'}, {name: 'd2.4xlarge'})).to.equal(-1)
        expect(Comparators.name({name: 't2.nano'}, {name: 't2.micro'})).to.equal(-1)
      })

      it('returns 1 when the first instance type is larger than the second', () => {
        expect(Comparators.name({name: 'm1.large'}, {name: 'm1.medium'})).to.equal(1)
        expect(Comparators.name({name: 'm1.xlarge'}, {name: 'm1.large'})).to.equal(1)
        expect(Comparators.name({name: 'i3.8xlarge'}, {name: 'i3.xlarge'})).to.equal(1)
      })

      it('returns 0 when the sizes are the same', () => {
        expect(Comparators.name({name: 'm1.medium'}, {name: 'm1.medium'})).to.equal(0)
      })
    })

    describe('with a size that is not supported', () => {
      it('returns a value that makes that instance type sort after all other instance types in the same family', () => {
        expect(Comparators.name({name: 'r3.humongous'}, {name: 'r3.8xlarge'})).to.equal(1)
        expect(Comparators.name({name: 'r3.8xlarge'}, {name: 'r3.humongous'})).to.equal(-1)
      })
    })

    describe('with a size that is on the form Nxlarge', () => {
      it('supports any multiple', () => {
        expect(Comparators.name({name: 'r3.128xlarge'}, {name: 'r3.256xlarge'})).to.equal(-1)
        expect(Comparators.name({name: 'r3.1024xlarge'}, {name: 'r3.1xlarge'})).to.equal(1)
      })
    })
  })

  describe('vcpus', () => {
    it('returns -1 when the first instance type has fewer vCPUs than the second', () => {
      expect(Comparators.vcpus({vcpus: 1}, {vcpus: 2})).to.equal(-1)
    })

    it('returns 1 when the first instance type has more vCPUs than the second', () => {
      expect(Comparators.vcpus({vcpus: 3}, {vcpus: 2})).to.equal(1)
    })

    it('returns 0 when the instance types have the same number of vCPUs', () => {
      expect(Comparators.vcpus({vcpus: 2}, {vcpus: 2})).to.equal(0)
    })
  })

  describe('memory', () => {
    it('returns -1 when the first instance type has less memory than the second', () => {
      expect(Comparators.memory({memory: 7.5}, {memory: 15})).to.equal(-1)
      expect(Comparators.memory({memory: 3.75}, {memory: 3.8})).to.equal(-1)
    })

    it('returns 1 when the first instance type has more memory than the second', () => {
      expect(Comparators.memory({memory: 128}, {memory: 0.5})).to.equal(1)
    })

    it('returns 0 when the instance types have the same amount of memory', () => {
      expect(Comparators.memory({memory: 0.613}, {memory: 0.613})).to.equal(0)
      expect(Comparators.memory({memory: 244}, {memory: 244})).to.equal(0)
    })

    xit('takes the unit into account', () => {
      expect(Comparators.memory({memory: 0.5}, {memory: 512})).to.equal(0)
    })
  })

  describe('storage', () => {
    it('returns -1 when the first instance type has less storage than the second', () => {
      expect(Comparators.storage({storage: {totalSize: 350}}, {storage: {totalSize: 640}})).to.equal(-1)
      expect(Comparators.storage({storage: {totalSize: 1680}}, {storage: {totalSize: 1920}})).to.equal(-1)
    })

    it('returns 1 when the first instance type has more storage than the second', () => {
      expect(Comparators.storage({storage: {totalSize: 640}}, {storage: {totalSize: 4}})).to.equal(1)
    })

    it('returns 0 when the instance types have the same amount of storage', () => {
      expect(Comparators.storage({storage: {totalSize: 640}}, {storage: {totalSize: 640}})).to.equal(0)
      expect(Comparators.storage({storage: {totalSize: 1600}}, {storage: {totalSize: 1600}})).to.equal(0)
    })

    it('interprets "EBS only" as no storage', () => {
      expect(Comparators.storage({storage: {ebsOnly: true, totalSize: 0}}, {storage: {totalSize: 640}})).to.equal(-1)
      expect(Comparators.storage({storage: {totalSize: 1680}}, {storage: {ebsOnly: true, totalSize: 0}})).to.equal(1)
      expect(Comparators.storage({storage: {ebsOnly: true, totalSize: 0}}, {storage: {ebsOnly: true, totalSize: 0}})).to.equal(0)
    })

    it('ignores the type of disk', () => {
      expect(Comparators.storage({storage: {totalSize: 8, type: 'SSD'}}, {storage: {totalSize: 8, type: 'HDD'}})).to.equal(0)
    })

    it('ignores the number of disks', () => {
      expect(Comparators.storage({storage: {disks: 2, size: 4, totalSize: 8}}, {storage: {disks: 1, size: 8, totalSize: 8}})).to.equal(0)
    })
  })

  describe('networkPerformance', () => {
    it('returns -1 when the first instance type has lower network performance than the second', () => {
      expect(Comparators.networkPerformance({networkPerformance: 'very low'}, {networkPerformance: 'low'})).to.equal(-1)
      expect(Comparators.networkPerformance({networkPerformance: 'low'}, {networkPerformance: 'high'})).to.equal(-1)
    })

    it('returns 1 when the first instance type has higher network performance than the second', () => {
      expect(Comparators.networkPerformance({networkPerformance: '20 gigabit'}, {networkPerformance: 'up to 10 gigabit'})).to.equal(1)
    })

    it('returns 0 when the instance types have the same network performance', () => {
      expect(Comparators.networkPerformance({networkPerformance: 'moderate'}, {networkPerformance: 'moderate'})).to.equal(0)
      expect(Comparators.networkPerformance({networkPerformance: 'high'}, {networkPerformance: 'high'})).to.equal(0)
    })
  })

  describe('onDemandHourlyRate', () => {
    it('returns -1 when the first instance type is cheaper than the second', () => {
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '0.1'}, {onDemandHourlyRate: '0.2'})).to.equal(-1)
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '0.101'}, {onDemandHourlyRate: '0.11'})).to.equal(-1)
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '2'}, {onDemandHourlyRate: '12'})).to.equal(-1)
    })

    it('returns 1 when the first instance type is more expensive than the second', () => {
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '12'}, {onDemandHourlyRate: '3'})).to.equal(1)
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '0.23'}, {onDemandHourlyRate: '0.22'})).to.equal(1)
    })

    it('returns 0 when the instance types have the same cost', () => {
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '0.2'}, {onDemandHourlyRate: '0.2'})).to.equal(0)
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '22'}, {onDemandHourlyRate: '22'})).to.equal(0)
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '22.0'}, {onDemandHourlyRate: '22'})).to.equal(0)
      expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '0.2'}, {onDemandHourlyRate: '0.200'})).to.equal(0)
    })

    describe('when one of the rates is null', () => {
      it('returns a value that makes the instance type without a rate sort as if the rate were zero', () => {
        expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: null}, {onDemandHourlyRate: '0.200'})).to.equal(-1)
        expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: '0.200'}, {onDemandHourlyRate: null})).to.equal(1)
      })
    })

    describe('when both the rates are null or undefined', () => {
      it('returns 0', () => {
        expect(Comparators.onDemandHourlyRate({onDemandHourlyRate: null}, {onDemandHourlyRate: null})).to.equal(0)
        expect(Comparators.onDemandHourlyRate({}, {onDemandHourlyRate: null})).to.equal(0)
        expect(Comparators.onDemandHourlyRate({}, {})).to.equal(0)
      })
    })
  })

  describe('reservedHourlyRate', () => {
    it('returns -1 when the first instance type is cheaper than the second', () => {
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '0.1'}, {reservedHourlyRate: '0.2'})).to.equal(-1)
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '0.101'}, {reservedHourlyRate: '0.11'})).to.equal(-1)
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '2'}, {reservedHourlyRate: '12'})).to.equal(-1)
    })

    it('returns 1 when the first instance type is more expensive than the second', () => {
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '12'}, {reservedHourlyRate: '3'})).to.equal(1)
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '0.23'}, {reservedHourlyRate: '0.22'})).to.equal(1)
    })

    it('returns 0 when the instance types have the same cost', () => {
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '0.2'}, {reservedHourlyRate: '0.2'})).to.equal(0)
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '22'}, {reservedHourlyRate: '22'})).to.equal(0)
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '22.0'}, {reservedHourlyRate: '22'})).to.equal(0)
      expect(Comparators.reservedHourlyRate({reservedHourlyRate: '0.2'}, {reservedHourlyRate: '0.200'})).to.equal(0)
    })

    describe('when one of the rates is null', () => {
      it('returns a value that makes the instance type without a rate sort as if the rate were zero', () => {
        expect(Comparators.reservedHourlyRate({reservedHourlyRate: null}, {reservedHourlyRate: '0.200'})).to.equal(-1)
        expect(Comparators.reservedHourlyRate({reservedHourlyRate: '0.200'}, {reservedHourlyRate: null})).to.equal(1)
      })
    })

    describe('when both the rates are null or undefined', () => {
      it('returns 0', () => {
        expect(Comparators.reservedHourlyRate({reservedHourlyRate: null}, {reservedHourlyRate: null})).to.equal(0)
        expect(Comparators.reservedHourlyRate({}, {reservedHourlyRate: null})).to.equal(0)
        expect(Comparators.reservedHourlyRate({}, {})).to.equal(0)
      })
    })
  })

  describe('upfrontCost', () => {
    it('returns -1 when the first instance type is cheaper than the second', () => {
      expect(Comparators.upfrontCost({upfrontCost: '124.1'}, {upfrontCost: '124.2'})).to.equal(-1)
      expect(Comparators.upfrontCost({upfrontCost: '101'}, {upfrontCost: '1100'})).to.equal(-1)
      expect(Comparators.upfrontCost({upfrontCost: '2'}, {upfrontCost: '12'})).to.equal(-1)
    })

    it('returns 1 when the first instance type is more expensive than the second', () => {
      expect(Comparators.upfrontCost({upfrontCost: '12'}, {upfrontCost: '3'})).to.equal(1)
      expect(Comparators.upfrontCost({upfrontCost: '1240.23'}, {upfrontCost: '10.22'})).to.equal(1)
    })

    it('returns 0 when the instance types have the same cost', () => {
      expect(Comparators.upfrontCost({upfrontCost: '2000'}, {upfrontCost: '2000'})).to.equal(0)
      expect(Comparators.upfrontCost({upfrontCost: '22'}, {upfrontCost: '22'})).to.equal(0)
      expect(Comparators.upfrontCost({upfrontCost: '22.0'}, {upfrontCost: '22'})).to.equal(0)
      expect(Comparators.upfrontCost({upfrontCost: '0.2'}, {upfrontCost: '0.200'})).to.equal(0)
    })

    describe('when one of the rates is null', () => {
      it('returns a value that makes the instance type without a rate sort as if the rate were zero', () => {
        expect(Comparators.upfrontCost({upfrontCost: null}, {upfrontCost: '20'})).to.equal(-1)
        expect(Comparators.upfrontCost({upfrontCost: '200'}, {upfrontCost: null})).to.equal(1)
      })
    })

    describe('when both the rates are null or undefined', () => {
      it('returns 0', () => {
        expect(Comparators.upfrontCost({upfrontCost: null}, {upfrontCost: null})).to.equal(0)
        expect(Comparators.upfrontCost({}, {upfrontCost: null})).to.equal(0)
        expect(Comparators.upfrontCost({}, {})).to.equal(0)
      })
    })
  })
})
