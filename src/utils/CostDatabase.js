const DIMENSION_NAMES = [
  ['purchase_option', 'purchaseOption'],
  ['lease_contract_length', 'leaseContractLength'],
  ['offering_class', 'offeringClass'],
  ['location', 'location'],
  ['operating_system', 'operatingSystem'],
  ['tenancy', 'tenancy'],
  ['license_model', 'licenseModel'],
  ['preinstalled_software', 'preinstalledSoftware']
]

const DIMENSION_FILTERS = DIMENSION_NAMES.map(([snakeCaseName, camelCaseName]) => `${snakeCaseName}_id = :${camelCaseName}Id`)

const INSTANCE_TYPES_SQL = `
  SELECT
    instance_type AS name,
    vcpus,
    memory,
    storage,
    network_performance AS networkPerformance,
    hourly_rate AS hourlyRate
  FROM instance_type it
  LEFT JOIN cost c ON (
    it.instance_type_id = c.instance_type_id
    AND ${DIMENSION_FILTERS.join(' AND ')}
  )
`

export default class CostDatabase {
  constructor (db) {
    this.db = db
  }

  _rows (sql) {
    let statement = this.db.prepare(sql)
    let rows = []
    while (statement.step()) {
      rows.push(statement.getAsObject())
    }
    statement.free()
    return rows
  }

  _dimensionRows (dimensionName) {
    let [snakeCaseName, camelCaseName] = DIMENSION_NAMES.find((pair) => pair[1] === dimensionName)
    return this._rows(`
      SELECT
        ${snakeCaseName}_id AS id,
        ${snakeCaseName} AS ${camelCaseName}
      FROM ${snakeCaseName}
    `)
  }

  publicationDate () {
    return this._rows('SELECT value FROM meta WHERE key = \'publication_date\'')[0].value
  }

  purchaseOptions () {
    return this._dimensionRows('purchaseOption')
  }

  leaseContractLengths () {
    return this._dimensionRows('leaseContractLength')
  }

  offeringClasses () {
    return this._dimensionRows('offeringClass')
  }

  locations () {
    return this._dimensionRows('location')
  }

  operatingSystems () {
    return this._dimensionRows('operatingSystem')
  }

  tenancies () {
    return this._dimensionRows('tenancy')
  }

  licenseModels () {
    return this._dimensionRows('licenseModel')
  }

  preinstalledSoftwares () {
    return this._dimensionRows('preinstalledSoftware')
  }

  instanceTypes (selectedIds) {
    let statement = this.db.prepare(INSTANCE_TYPES_SQL)
    let parameters = {}
    for (let pair of DIMENSION_NAMES) {
      let camelCaseName = pair[1]
      parameters[`:${camelCaseName}Id`] = selectedIds[`${camelCaseName}Id`]
    }
    statement.bind(parameters)
    let rows = []
    while (statement.step()) {
      rows.push(statement.getAsObject())
    }
    statement.free()
    return rows
  }
}
