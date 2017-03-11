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
    let sql = `
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
        AND purchase_option_id = :purchaseOptionId
        AND lease_contract_length_id = :leaseContractLengthId
        AND offering_class_id = :offeringClassId
        AND location_id = :locationId
        AND operating_system_id = :operatingSystemId
        AND tenancy_id = :tenancyId
        AND license_model_id = :licenseModelId
        AND preinstalled_software_id = :preinstalledSoftwareId
      )
    `
    let statement = this.db.prepare(sql)
    statement.bind({
      ':purchaseOptionId': selectedIds.selectedPurchaseOptionId,
      ':leaseContractLengthId': selectedIds.selectedLeaseContractLengthId,
      ':offeringClassId': selectedIds.selectedOfferingClassId,
      ':locationId': selectedIds.selectedLocationId,
      ':operatingSystemId': selectedIds.selectedOperatingSystemId,
      ':tenancyId': selectedIds.selectedTenancyId,
      ':licenseModelId': selectedIds.selectedLicenseModelId,
      ':preinstalledSoftwareId': selectedIds.selectedPreinstalledSoftwareId
    })
    let rows = []
    while (statement.step()) {
      rows.push(statement.getAsObject())
    }
    statement.free()
    return rows
  }
}
