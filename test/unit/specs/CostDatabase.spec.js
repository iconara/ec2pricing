import CostDatabase from '@/utils/CostDatabase'

class FakeDb {
  constructor () {
    this.statements = []
    this.results = new Map()
  }

  setResult (sql, result) {
    this.results.set(sql, result)
  }

  findResult (statement) {
    for (let [pattern, result] of this.results) {
      if (typeof pattern === 'function' && pattern(statement)) {
        return result
      } else if (pattern.test && pattern.test(statement.sql)) {
        return result
      } else if (pattern === statement.sql) {
        return result
      }
    }
    return null
  }

  prepare (sql) {
    let statement = new FakeStatement(sql, this)
    this.statements.push(statement)
    return statement
  }
}

class FakeStatement {
  constructor (sql, database) {
    this.sql = sql
    this.database = database
    this.index = -1
    this.freed = false
  }

  bind (parameters) {
    this.parameters = parameters && Object.assign({}, parameters)
  }

  step () {
    if (this.index === -1) {
      this.result = this.database.findResult(this)
    }
    this.index++
    return this.result && this.index < this.result.length
  }

  getAsObject () {
    return this.result[this.index]
  }

  free () {
    this.freed = true
  }
}

describe('CostDatabase', () => {
  let database
  let costDatabase

  beforeEach(() => {
    database = new FakeDb()
    database.setResult(/FROM purchase_option/, [{id: 0, purchaseOption: ''}])
    database.setResult(/FROM lease_contract_length/, [{id: 0, leaseContractLength: ''}, {id: 1, leaseContractLength: '3yr'}, {id: 2, leaseContractLength: '1yr'}])
    database.setResult(/FROM offering_class/, [{id: 0, offeringClass: ''}])
    costDatabase = new CostDatabase(database).setup()
  })

  afterEach(() => {
    expect(database.statements.every((statement) => statement.freed)).to.be.true
  })

  describe('publicationDate', () => {
    beforeEach(() => {
      database.setResult(/FROM meta WHERE key = 'publication_date'/, [{'value': '2017-03-19T09:42:37Z'}])
    })

    it('returns the publication date property from the meta table', () => {
      expect(costDatabase.publicationDate.getTime()).to.equal(new Date('2017-03-19T09:42:37Z').getTime())
    })

    it('caches the value', () => {
      let countBefore = database.statements.length
      costDatabase.publicationDate
      costDatabase.publicationDate
      costDatabase.publicationDate
      let countAfter = database.statements.length
      expect(countAfter).to.equal(countBefore + 1)
    })
  })

  describe('buildDate', () => {
    beforeEach(() => {
      database.setResult(/FROM meta WHERE key = 'build_date'/, [{'value': '2017-03-19T10:23:43Z'}])
    })

    it('returns the publication date property from the meta table', () => {
      expect(costDatabase.buildDate.getTime()).to.equal(new Date('2017-03-19T10:23:43Z').getTime())
    })

    it('caches the value', () => {
      let countBefore = database.statements.length
      costDatabase.buildDate
      costDatabase.buildDate
      costDatabase.buildDate
      let countAfter = database.statements.length
      expect(countAfter).to.equal(countBefore + 1)
    })
  })

  ;[
    ['purchaseOption', 'purchaseOptions', 'purchase_option'],
    ['leaseContractLength', 'leaseContractLengths', 'lease_contract_length'],
    ['offeringClass', 'offeringClasses', 'offering_class']
  ].forEach(([name, collectionName, tableName]) => {
    describe(collectionName, () => {
      let statement

      beforeEach(() => {
        statement = database.statements.find((statement) => statement.sql.indexOf(`FROM ${tableName}`) > -1)
      })

      it('renames the ID column "id"', () => {
        expect(statement.sql).to.include(`${tableName}_id AS id`)
      })

      it('converts the table\'s snake case names to camel case', () => {
        expect(statement.sql).to.include(`${tableName} AS ${name}`)
      })

      it('returns a list of objects with IDs and values', () => {
        let expected = {id: 0}
        expected[name] = ''
        expect(costDatabase[collectionName][0]).to.deep.equal(expected)
      })

      it('caches the results', () => {
        let countBefore = database.statements.length
        costDatabase[collectionName]
        costDatabase[collectionName]
        costDatabase[collectionName]
        let countAfter = database.statements.length
        expect(countAfter).to.equal(countBefore)
      })
    })
  })

  ;[
    ['location', 'locations', 'location'],
    ['operatingSystem', 'operatingSystems', 'operating_system'],
    ['tenancy', 'tenancies', 'tenancy'],
    ['licenseModel', 'licenseModels', 'license_model'],
    ['preinstalledSoftware', 'preinstalledSoftwares', 'preinstalled_software']
  ].forEach(([name, collectionName, tableName]) => {
    describe(collectionName, () => {
      const dummyResult = [{id: 0}, {id: 1}, {id: 2}]

      beforeEach(() => {
        dummyResult.forEach((element, index) => {
          element[name] = `value ${index}`
        })
        database.setResult(new RegExp(`FROM ${tableName}`), Object.assign([], dummyResult))
      })

      it('renames the ID column "id"', () => {
        costDatabase[collectionName]
        const statement = database.statements[database.statements.length - 1]
        expect(statement.sql).to.include(`${tableName}_id AS id`)
      })

      it('converts the table\'s snake case names to camel case', () => {
        costDatabase[collectionName]
        const statement = database.statements[database.statements.length - 1]
        expect(statement.sql).to.include(`${tableName} AS ${name}`)
      })

      it('returns a list of objects with IDs and values', () => {
        costDatabase[collectionName]
        const statement = database.statements[database.statements.length - 1]
        expect(costDatabase[collectionName]).to.deep.equal(dummyResult)
      })

      it('caches the results', () => {
        let countBefore = database.statements.length
        costDatabase[collectionName]
        costDatabase[collectionName]
        costDatabase[collectionName]
        let countAfter = database.statements.length
        expect(countAfter).to.equal(countBefore + 1)
      })
    })
  })

  describe('instanceTypes', () => {
    let result

    const selectedIds = {
      purchaseOptionId: 1,
      leaseContractLengthId: 2,
      offeringClassId: 3,
      locationId: 4,
      operatingSystemId: 5,
      tenancyId: 6,
      licenseModelId: 7,
      preinstalledSoftwareId: 8
    }

    const instanceTypeRows = [
      {name: 'y1.small', vcpus: 1, memory: '1 GiB', storage: '1 x 1 GB', networkPerformance: 'low to moderate'},
      {name: 'y1.medium', vcpus: 2, memory: '2 GiB', storage: '2 x 2', networkPerformance: 'Moderate'},
      {name: 'z1.medium', vcpus: 3, memory: '3 GiB', storage: '3 x 3 SSD', networkPerformance: 'High'},
      {name: 'z1.large', vcpus: 4, memory: '4.2 GiB', storage: '4 x 4 SSD', networkPerformance: 'up to 10 Gigabit'},
      {name: 'z1.64xlarge', vcpus: 128, memory: '2,048 GiB', storage: '4 x 16,384 HDD', networkPerformance: '20 gigabit'},
      {name: 'w1.nano', vcpus: 1, memory: '1 GiB', storage: 'EBS only', networkPerformance: 'very low'}
    ]

    let reservedPriceResult = null
    let onDemandPriceResult = null

    const reservedPriceStatement = (statement) => {
      return statement.sql.indexOf('FROM instance_type') > -1 &&
             statement.parameters[':purchaseOptionId'] === 1 &&
             statement.parameters[':leaseContractLengthId'] !== 0 &&
             statement.parameters[':offeringClassId'] === 3
    }

    const onDemandPriceStatement = (statement) => {
      return statement.sql.indexOf('FROM instance_type') > -1 &&
             statement.parameters[':purchaseOptionId'] === 0 &&
             statement.parameters[':leaseContractLengthId'] === 0 &&
             statement.parameters[':offeringClassId'] === 0
    }

    beforeEach(() => {
      reservedPriceResult = []
      onDemandPriceResult = []
      instanceTypeRows.forEach((row, index) => {
        let n = index + 1
        reservedPriceResult.push(Object.assign({hourlyRate: (n / 100).toString(), upfrontCost: n.toString()}, row))
        onDemandPriceResult.push(Object.assign({hourlyRate: (n / 10).toString()}, row))
      })
    })

    beforeEach(() => {
      database.setResult(reservedPriceStatement, reservedPriceResult)
      database.setResult(onDemandPriceStatement, onDemandPriceResult)
      result = costDatabase.instanceTypes(selectedIds)
    })

    it('loads the prices for reserved instances', () => {
      const statement = database.statements.find(reservedPriceStatement)
      expect(statement).to.exist
      expect(statement.parameters[':purchaseOptionId']).to.equal(1)
      expect(statement.parameters[':leaseContractLengthId']).to.equal(2)
      expect(statement.parameters[':offeringClassId']).to.equal(3)
      expect(statement.parameters[':locationId']).to.equal(4)
      expect(statement.parameters[':operatingSystemId']).to.equal(5)
      expect(statement.parameters[':tenancyId']).to.equal(6)
      expect(statement.parameters[':licenseModelId']).to.equal(7)
      expect(statement.parameters[':preinstalledSoftwareId']).to.equal(8)
    })

    it('loads the prices for on demand instances, overriding the purchase option, lease contract length and offer code IDs for on demand', () => {
      const statement = database.statements.find(onDemandPriceStatement)
      expect(statement).to.exist
      expect(statement.parameters[':purchaseOptionId']).to.equal(0)
      expect(statement.parameters[':leaseContractLengthId']).to.equal(0)
      expect(statement.parameters[':offeringClassId']).to.equal(0)
      expect(statement.parameters[':locationId']).to.equal(4)
      expect(statement.parameters[':operatingSystemId']).to.equal(5)
      expect(statement.parameters[':tenancyId']).to.equal(6)
      expect(statement.parameters[':licenseModelId']).to.equal(7)
      expect(statement.parameters[':preinstalledSoftwareId']).to.equal(8)
    })

    it('joins the instance_type table with the cost table to ensure that every instance type is always in the result', () => {
      [reservedPriceStatement, onDemandPriceStatement].forEach((statementPredicate) => {
        const statement = database.statements.find(statementPredicate)
        expect(statement.sql).to.include('FROM instance_type')
        expect(statement.sql).to.include('LEFT JOIN cost')
      })
    })

    it('orders by instance type name so that the on demand and reserved price results are guaranteed to be in the same order', () => {
      [reservedPriceStatement, onDemandPriceStatement].forEach((statementPredicate) => {
        const statement = database.statements.find(statementPredicate)
        expect(statement.sql).to.include('ORDER BY instance_type')
      })
    })

    it('converts the table\'s snake case names to camel case', () => {
      [reservedPriceStatement, onDemandPriceStatement].forEach((statementPredicate) => {
        const statement = database.statements.find(statementPredicate)
        expect(statement.sql).to.include('instance_type AS name')
        expect(statement.sql).to.include('network_performance AS networkPerformance')
        expect(statement.sql).to.include('hourly_rate AS hourlyRate')
        expect(statement.sql).to.include('upfront_cost AS upfrontCost')
      })
    })

    it('filters on all dimensions', () => {
      [reservedPriceStatement, onDemandPriceStatement].forEach((statementPredicate) => {
        const statement = database.statements.find(statementPredicate)
        expect(statement.sql).to.include('purchase_option_id = :purchaseOptionId')
        expect(statement.sql).to.include('lease_contract_length_id = :leaseContractLengthId')
        expect(statement.sql).to.include('offering_class_id = :offeringClassId')
        expect(statement.sql).to.include('location_id = :locationId')
        expect(statement.sql).to.include('operating_system_id = :operatingSystemId')
        expect(statement.sql).to.include('tenancy_id = :tenancyId')
        expect(statement.sql).to.include('license_model_id = :licenseModelId')
        expect(statement.sql).to.include('preinstalled_software_id = :preinstalledSoftwareId')
      })
    })

    it('returns the combined prices for reserved and on demand instances', () => {
      const z1Medium = result.find((instanceType) => instanceType.name === 'z1.medium')
      expect(z1Medium.onDemandHourlyRate).to.equal('0.3')
      expect(z1Medium.reservedHourlyRate).to.equal('0.03')
      expect(z1Medium.upfrontCost).to.equal('3')
    })

    it('returns instance type details like the number of vCPUs', () => {
      const z1Medium = result.find((instanceType) => instanceType.name === 'z1.medium')
      expect(z1Medium.vcpus).to.equal(3)
    })

    it('parses the memory strings and returns the number of GiB', () => {
      const z1Medium = result.find((instanceType) => instanceType.name === 'z1.medium')
      const z1Large = result.find((instanceType) => instanceType.name === 'z1.large')
      const z164XLarge = result.find((instanceType) => instanceType.name === 'z1.64xlarge')
      expect(z1Medium.memory).to.deep.equal(3)
      expect(z1Large.memory).to.deep.equal(4.2)
      expect(z164XLarge.memory).to.deep.equal(2048)
    })

    it('parses the storage strings and returns the number of disks, their size and type separately', () => {
      const z1Medium = result.find((instanceType) => instanceType.name === 'z1.medium')
      const z164XLarge = result.find((instanceType) => instanceType.name === 'z1.64xlarge')
      expect(z1Medium.storage).to.deep.equal({disks: 3, size: 3, totalSize: 9, type: 'SSD'})
      expect(z164XLarge.storage).to.deep.equal({disks: 4, size: 16384, totalSize: 65536, type: 'HDD'})
    })

    it('parses the storage strings of EBS only instances and returns a flag, a zero total size and the type as "EBS"', () => {
      const w1Nano = result.find((instanceType) => instanceType.name === 'w1.nano')
      expect(w1Nano.storage).to.deep.equal({ebsOnly: true, totalSize: 0, type: 'EBS'})
    })

    it('assumes the disk type is HDD when none is specified', () => {
      const y1Medium = result.find((instanceType) => instanceType.name === 'y1.medium')
      expect(y1Medium.storage).to.deep.equal({disks: 2, size: 2, totalSize: 4, type: 'HDD'})
    })

    it('ignores "GB" in storage strings', () => {
      const y1Small = result.find((instanceType) => instanceType.name === 'y1.small')
      expect(y1Small.storage).to.deep.equal({disks: 1, size: 1, totalSize: 1, type: 'HDD'})
    })

    it('normalizes the network performance strings by lower casing them', () => {
      const y1Small = result.find((instanceType) => instanceType.name === 'y1.small')
      const z1Large = result.find((instanceType) => instanceType.name === 'z1.large')
      const z164xLarge = result.find((instanceType) => instanceType.name === 'z1.64xlarge')
      expect(y1Small.networkPerformance).to.equal('low to moderate')
      expect(z1Large.networkPerformance).to.equal('up to 10 gigabit')
      expect(z164xLarge.networkPerformance).to.equal('20 gigabit')
    })

    describe('when the lease contract length is "1yr"', () => {
      beforeEach(() => {
        selectedIds.leaseContractLengthId = 2
        result = costDatabase.instanceTypes(selectedIds)
      })

      it('returns the effective reserved rate as the reserved rate plus the upfront cost divided by the hours in a year', () => {
        const z1Medium = result.find((instanceType) => instanceType.name === 'z1.medium')
        expect(z1Medium.reservedEffectiveHourlyRate).to.be.within(0.0303, 0.0304)
      })
    })

    describe('when there is no upfront cost', () => {
      beforeEach(() => {
        selectedIds.leaseContractLengthId = 2
        reservedPriceResult.forEach(row => {
          if (row.name === 'z1.medium') {
            row.upfrontCost = null
          }
        })
        result = costDatabase.instanceTypes(selectedIds)
      })

      it('returns the effective reserved rate as the reserved rate', () => {
        const z1Medium = result.find((instanceType) => instanceType.name === 'z1.medium')
        expect(z1Medium.reservedEffectiveHourlyRate).to.be.within(0.02999, 0.03001)
      })
    })

    describe('when the lease contract length is "3yr"', () => {
      beforeEach(() => {
        selectedIds.leaseContractLengthId = 1
        result = costDatabase.instanceTypes(selectedIds)
      })

      it('returns the effective reserved rate as the reserved rate plus the upfront cost divided by the hours in three years', () => {
        const z1Medium = result.find((instanceType) => instanceType.name === 'z1.medium')
        expect(z1Medium.reservedEffectiveHourlyRate).to.be.within(0.0301, 0.0302)
      })
    })
  })
})
