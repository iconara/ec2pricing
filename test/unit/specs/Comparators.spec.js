import Comparators from '@/utils/Comparators'

describe('Comparators', () => {
  describe('instanceType', () => {
    it('returns -1 when the first instance type\'s family lexicographically sorts before the second', () => {
      expect(Comparators.instanceType({name: 'm1.medium'}, {name: 'm3.large'})).to.equal(-1)
    })

    it('returns 1 when the first instance type\'s family lexicographically sorts after the second', () => {
      expect(Comparators.instanceType({name: 'm3.large'}, {name: 'm1.medium'})).to.equal(1)
    })

    it('returns 0 when given the same instance type twice', () => {
      expect(Comparators.instanceType({name: 'm1.medium'}, {name: 'm1.medium'})).to.equal(0)
    })

    describe('with two instance types in the same family', () => {
      it('returns -1 when the first instance type is smaller than the second', () => {
        expect(Comparators.instanceType({name: 'm1.small'}, {name: 'm1.medium'})).to.equal(-1)
        expect(Comparators.instanceType({name: 'd2.xlarge'}, {name: 'd2.4xlarge'})).to.equal(-1)
        expect(Comparators.instanceType({name: 't2.nano'}, {name: 't2.micro'})).to.equal(-1)
      })

      it('returns 1 when the first instance type is larger than the second', () => {
        expect(Comparators.instanceType({name: 'm1.large'}, {name: 'm1.medium'})).to.equal(1)
        expect(Comparators.instanceType({name: 'm1.xlarge'}, {name: 'm1.large'})).to.equal(1)
        expect(Comparators.instanceType({name: 'i3.8xlarge'}, {name: 'i3.xlarge'})).to.equal(1)
      })

      it('returns 0 when the sizes are the same', () => {
        expect(Comparators.instanceType({name: 'm1.medium'}, {name: 'm1.medium'})).to.equal(0)
      })
    })

    describe('with a size that is not supported', () => {
      it('returns a value that makes that instance type sort after all other instance types in the same family', () => {
        expect(Comparators.instanceType({name: 'r3.humongous'}, {name: 'r3.8xlarge'})).to.equal(1)
        expect(Comparators.instanceType({name: 'r3.8xlarge'}, {name: 'r3.humongous'})).to.equal(-1)
      })
    })

    describe('with a size that is on the form Nxlarge', () => {
      it('supports any multiple', () => {
        expect(Comparators.instanceType({name: 'r3.128xlarge'}, {name: 'r3.256xlarge'})).to.equal(-1)
        expect(Comparators.instanceType({name: 'r3.1024xlarge'}, {name: 'r3.1xlarge'})).to.equal(1)
      })
    })
  })
})
