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
    it.instance_type AS name,
    it.vcpus,
    it.memory,
    it.storage,
    it.network_performance AS networkPerformance,
    ac.on_demand_hourly_rate AS onDemandHourlyRate,
    ac.reserved_hourly_rate AS reservedHourlyRate,
    ac.upfront_cost AS upfrontCost
  FROM
    instance_type it LEFT JOIN (
      SELECT
        c1.instance_type_id,
        c1.location_id,
        c1.operating_system_id,
        c1.tenancy_id,
        c1.license_model_id,
        c1.preinstalled_software_id,
        c1.hourly_rate AS on_demand_hourly_rate,
        c2.hourly_rate AS reserved_hourly_rate,
        c2.upfront_cost
      FROM cost c1 LEFT JOIN cost c2 ON (
        c1.instance_type_id = c2.instance_type_id
        AND c1.location_id = c2.location_id
        AND c1.operating_system_id = c2.operating_system_id
        AND c1.tenancy_id = c2.tenancy_id
        AND c1.license_model_id = c2.license_model_id
        AND c1.preinstalled_software_id = c2.preinstalled_software_id
      )
      WHERE c1.purchase_option_id = :onDemandPurchaseOptionId
      AND c1.lease_contract_length_id = :onDemandLeaseContractLengthId
      AND c1.offering_class_id = :onDemandOfferingClassId
      AND c2.purchase_option_id = :purchaseOptionId
      AND c2.lease_contract_length_id = :leaseContractLengthId
      AND c2.offering_class_id = :offeringClassId
    ) ac ON (
      it.instance_type_id = ac.instance_type_id
      AND ac.location_id = :locationId
      AND ac.operating_system_id = :operatingSystemId
      AND ac.tenancy_id = :tenancyId
      AND ac.license_model_id = :licenseModelId
      AND ac.preinstalled_software_id = :preinstalledSoftwareId
    )
`

export default class CostDatabase {
  constructor (db) {
    this.db = db
  }

  setup () {
    this._onDemandPurchaseOptionId = this.purchaseOptions().find((po) => po.purchaseOption === '').id
    this._onDemandLeaseContractLengthId = this.leaseContractLengths().find((lcl) => lcl.leaseContractLength === '').id
    this._onDemandOfferingClassId = this.offeringClasses().find((oc) => oc.offeringClass === '').id
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
    let [snakeCaseName, camelCaseName] = DIMENSION_NAMES.find(([_, camelCaseName]) => camelCaseName === dimensionName)
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
    let parameters = {
      ':onDemandPurchaseOptionId': this._onDemandPurchaseOptionId,
      ':onDemandLeaseContractLengthId': this._onDemandLeaseContractLengthId,
      ':onDemandOfferingClassId': this._onDemandOfferingClassId
    }
    for (let pair of DIMENSION_NAMES) {
      let camelCaseName = pair[1]
      parameters[`:${camelCaseName}Id`] = selectedIds[`${camelCaseName}Id`]
    }
    return this._rows(INSTANCE_TYPES_SQL, parameters)
  }
}
