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
    hourly_rate AS hourlyRate,
    upfront_cost AS upfrontCost
  FROM instance_type it
  LEFT JOIN cost c ON (
    it.instance_type_id = c.instance_type_id
    AND ${DIMENSION_FILTERS.join(' AND ')}
  )
  ORDER BY instance_type
`

export default class CostDatabase {
  constructor (db) {
    this.db = db
    this._dimensionRowsCache = {}
  }

  setup () {
    this._onDemandPurchaseOptionId = this.purchaseOptions.find((po) => po.purchaseOption === '').id
    this._onDemandLeaseContractLengthId = this.leaseContractLengths.find((lcl) => lcl.leaseContractLength === '').id
    this._onDemandOfferingClassId = this.offeringClasses.find((oc) => oc.offeringClass === '').id
    return this
  }

  _rows (sql, parameters) {
    let statement = this.db.prepare(sql)
    if (parameters) {
      statement.bind(parameters)
    }
    let rows = []
    while (statement.step()) {
      rows.push(statement.getAsObject())
    }
    statement.free()
    return rows
  }

  _dimensionRows (dimensionName) {
    if (!(dimensionName in this._dimensionRowsCache)) {
      let [snakeCaseName, camelCaseName] = DIMENSION_NAMES.find(([_, camelCaseName]) => camelCaseName === dimensionName)
      this._dimensionRowsCache[dimensionName] = this._rows(`
        SELECT
          ${snakeCaseName}_id AS id,
          ${snakeCaseName} AS ${camelCaseName}
        FROM ${snakeCaseName}
      `)
    }
    return this._dimensionRowsCache[dimensionName]
  }

  get publicationDate () {
    if (!this._publicationDate) {
      let rows = this._rows('SELECT value FROM meta WHERE key = \'publication_date\' LIMIT 1')
      this._publicationDate = new Date(rows[0].value)
    }
    return this._publicationDate
  }

  get buildDate () {
    if (!this._buildDate) {
      let rows = this._rows('SELECT value FROM meta WHERE key = \'build_date\' LIMIT 1')
      this._buildDate = new Date(rows[0].value)
    }
    return this._buildDate
  }

  get purchaseOptions () {
    return this._dimensionRows('purchaseOption')
  }

  get leaseContractLengths () {
    return this._dimensionRows('leaseContractLength')
  }

  get offeringClasses () {
    return this._dimensionRows('offeringClass')
  }

  get locations () {
    return this._dimensionRows('location')
  }

  get operatingSystems () {
    return this._dimensionRows('operatingSystem')
  }

  get tenancies () {
    return this._dimensionRows('tenancy')
  }

  get licenseModels () {
    return this._dimensionRows('licenseModel')
  }

  get preinstalledSoftwares () {
    return this._dimensionRows('preinstalledSoftware')
  }

  instanceTypes (selectedIds) {
    let parameters = {}
    for (let pair of DIMENSION_NAMES) {
      let camelCaseName = pair[1]
      parameters[`:${camelCaseName}Id`] = selectedIds[`${camelCaseName}Id`]
    }
    let reservedRows = this._rows(INSTANCE_TYPES_SQL, parameters)
    parameters[':purchaseOptionId'] = this._onDemandPurchaseOptionId
    parameters[':leaseContractLengthId'] = this._onDemandLeaseContractLengthId
    parameters[':offeringClassId'] = this._onDemandOfferingClassId
    let onDemandRows = this._rows(INSTANCE_TYPES_SQL, parameters)
    let mergedRows = []
    for (let i = 0; i < onDemandRows.length; i++) {
      let mergedRow = Object.assign({}, reservedRows[i])
      mergedRow.onDemandHourlyRate = onDemandRows[i].hourlyRate
      mergedRow.reservedHourlyRate = reservedRows[i].hourlyRate
      mergedRows.push(mergedRow)
    }
    return mergedRows
  }
}
