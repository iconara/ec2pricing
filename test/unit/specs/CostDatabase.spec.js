import CostDatabase from '@/utils/CostDatabase'

class FakeDb {
  constructor () {
    this.statements = []
    this.results = new Map()
  }

  setResult (sql, result) {
    this.results.set(sql, result)
  }

  findResult (sql) {
    for (let [pattern, result] of this.results) {
      if (pattern.test && pattern.test(sql)) {
        return result
      } else if (pattern === sql) {
        return result
      }
    }
    return null
  }

  prepare (sql) {
    let statement = new FakeStatement(sql, this.findResult(sql))
    this.statements.push(statement)
    return statement
  }
}

class FakeStatement {
  constructor (sql, result) {
    this.sql = sql
    this.index = -1
    this.result = result
    this.freed = false
  }

  bind (parameters) {
    this.parameters = parameters
  }

  step () {
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
    database.setResult(/FROM lease_contract_length/, [{id: 0, leaseContractLength: ''}])
    database.setResult(/FROM offering_class/, [{id: 0, offeringClass: ''}])
    costDatabase = new CostDatabase(database).setup()
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
        let expected = [{id: 0}]
        expected[0][name] = ''
        expect(costDatabase[collectionName]).to.deep.equal(expected)
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
})
