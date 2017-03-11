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

  publicationDate () {
    return this._rows('SELECT value FROM meta WHERE key = \'publication_date\'')[0].value
  }

  purchaseOptions () {
    return this._rows('SELECT purchase_option_id AS id, purchase_option AS purchaseOption FROM purchase_option')
  }

  leaseContractLengths () {
    return this._rows('SELECT lease_contract_length_id AS id, lease_contract_length AS leaseContractLength FROM lease_contract_length')
  }

  offeringClasses () {
    return this._rows('SELECT offering_class_id AS id, offering_class AS offeringClass FROM offering_class')
  }

  locations () {
    return this._rows('SELECT location_id AS id, location FROM location')
  }

  operatingSystems () {
    return this._rows('SELECT operating_system_id AS id, operating_system AS operatingSystem FROM operating_system')
  }

  tenancies () {
    return this._rows('SELECT tenancy_id AS id, tenancy FROM tenancy')
  }

  licenseModels () {
    return this._rows('SELECT license_model_id AS id, license_model AS licenseModel FROM license_model')
  }

  preinstalledSoftwares () {
    return this._rows('SELECT preinstalled_software_id AS id, preinstalled_software AS preinstalledSoftware FROM preinstalled_software')
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
