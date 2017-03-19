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
      expect(Comparators.memory({memory: '7.5 GiB'}, {memory: '15 GiB'})).to.equal(-1)
      expect(Comparators.memory({memory: '3.75 GiB'}, {memory: '3.8 GiB'})).to.equal(-1)
    })

    it('returns 1 when the first instance type has more memory than the second', () => {
      expect(Comparators.memory({memory: '128 GiB'}, {memory: '0.5 GiB'})).to.equal(1)
    })

    it('returns 0 when the instance types have the same amount of memory', () => {
      expect(Comparators.memory({memory: '0.613 GiB'}, {memory: '0.613 GiB'})).to.equal(0)
      expect(Comparators.memory({memory: '244 GiB'}, {memory: '244 GiB'})).to.equal(0)
    })

    xit('takes the unit into account', () => {
      expect(Comparators.memory({memory: '0.5 GiB'}, {memory: '512 MiB'})).to.equal(0)
    })
  })

  describe('storage', () => {
    it('returns -1 when the first instance type has less storage than the second', () => {
      expect(Comparators.storage({storage: '1 x 350 HDD'}, {storage: '2 x 320 SSD'})).to.equal(-1)
      expect(Comparators.storage({storage: '2 x 840 GB HDD'}, {storage: '1 x 1,920 HDD'})).to.equal(-1)
    })

    it('returns 1 when the first instance type has more storage than the second', () => {
      expect(Comparators.storage({storage: '2 x 320 SSD'}, {storage: '1 x 4 SSD'})).to.equal(1)
    })

    it('returns 0 when the instance types have the same amount of storage', () => {
      expect(Comparators.storage({storage: '2 x 320 SSD'}, {storage: '2 x 320 SSD'})).to.equal(0)
      expect(Comparators.storage({storage: '2 x 800 SSD'}, {storage: '4 x 400 SSD'})).to.equal(0)
    })

    it('interprets "EBS only" as no storage', () => {
      expect(Comparators.storage({storage: 'EBS only'}, {storage: '2 x 320 SSD'})).to.equal(-1)
      expect(Comparators.storage({storage: '2 x 840 GB HDD'}, {storage: 'EBS only'})).to.equal(1)
      expect(Comparators.storage({storage: 'EBS only'}, {storage: 'EBS only'})).to.equal(0)
    })

    it('ignores the type of disk', () => {
      expect(Comparators.storage({storage: '2 x 4 SSD'}, {storage: '2 x 4 HDD'})).to.equal(0)
      expect(Comparators.storage({storage: '2 x 4 SSD'}, {storage: '2 x 4'})).to.equal(0)
    })

    it('assumes one disk when no multiplier is included', () => {
      expect(Comparators.storage({storage: '2 x 4 SSD'}, {storage: '8 SSD'})).to.equal(0)
    })

    it('assumes that the sizes are in GB when no unit is included', () => {
      expect(Comparators.storage({storage: '2 x 4 SSD'}, {storage: '2 x 4 GB SSD'})).to.equal(0)
    })

    xit('takes the unit into account', () => {
      expect(Comparators.storage({storage: '2 x 4 SSD'}, {storage: '8000 MB SSD'})).to.equal(0)
    })
  })
})
