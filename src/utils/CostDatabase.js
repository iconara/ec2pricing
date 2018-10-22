const COLUMN_NAMES = {
  'purchaseOption': 'purchase_option',
  'leaseContractLength': 'lease_contract_length',
  'offeringClass': 'offering_class',
  'location': 'location',
  'operatingSystem': 'operating_system',
  'tenancy': 'tenancy',
  'licenseModel': 'license_model',
  'preinstalledSoftware': 'preinstalled_software'
}

const FILTER_SQL = []

for (let propertyName in COLUMN_NAMES) {
  let columnName = COLUMN_NAMES[propertyName]
  FILTER_SQL.push(`${columnName}_id = :${propertyName}Id`)
}

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
    AND ${FILTER_SQL.join(' AND ')}
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
      const columnName = COLUMN_NAMES[dimensionName]
      const tableName = columnName
      this._dimensionRowsCache[dimensionName] = this._rows(`
        SELECT
          ${columnName}_id AS id,
          ${columnName} AS ${dimensionName}
        FROM ${tableName}
      `)
    }
    return this._dimensionRowsCache[dimensionName]
  }

  _leaseContractLengthInHours (leaseContractLengthId) {
    if (!this._leaseContractLengthsInHours) {
      let acc = this._leaseContractLengthsInHours = {}
      for (let leaseContractLength of this.leaseContractLengths) {
        let match = leaseContractLength.leaseContractLength.match(/^(\d+)yr$/)
        if (match) {
          acc[leaseContractLength.id] = 24 * 365.25 * parseInt(match[1])
        }
      }
    }
    return this._leaseContractLengthsInHours[leaseContractLengthId]
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
    for (let propertyName in COLUMN_NAMES) {
      parameters[`:${propertyName}Id`] = selectedIds[`${propertyName}Id`]
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
      let reservedHourlyRateNum = parseFloat(mergedRow.reservedHourlyRate)
      let reservedUpfrontCostNum = parseFloat(mergedRow.upfrontCost)
      let reservedHours = this._leaseContractLengthInHours(selectedIds.leaseContractLengthId)
      if (!(isNaN(reservedHourlyRateNum) || isNaN(reservedUpfrontCostNum) || isNaN(reservedHours))) {
        mergedRow.reservedEffectiveHourlyRate = reservedHourlyRateNum + reservedUpfrontCostNum / reservedHours
      } else {
        mergedRow.reservedEffectiveHourlyRate = reservedHourlyRateNum
      }
      mergedRows.push(mergedRow)
    }
    return mergedRows.map((it) => this.parseInstanceType(it))
  }

  parseInstanceType (rawInstanceType) {
    const instanceType = Object.assign({}, rawInstanceType)
    instanceType.memory = parseFloat(instanceType.memory.replace(',', ''))
    instanceType.storage = this.parseStorage(instanceType.storage)
    instanceType.networkPerformance = instanceType.networkPerformance.toLowerCase()
    return instanceType
  }

  parseStorage (storageStr) {
    if (storageStr.indexOf('EBS') > -1) {
      return {ebsOnly: true, totalSize: 0, type: 'EBS'}
    } else {
      let [_, diskCount, diskSize, type] = storageStr.match(/^(?:(\d+) x )?([\d,.]+)(?: GB)?(?: (HDD|SSD|NVMe SSD))?$/)
      diskCount = parseInt(diskCount || '1')
      if (type === 'NVMe SSD') {
        diskSize = Math.floor(parseFloat(diskSize) * 1000)
      } else {
        diskSize = parseInt(diskSize.replace(',', ''))
      }
      type = type || 'HDD'
      return {disks: diskCount, size: diskSize, totalSize: diskCount * diskSize, type: type}
    }
  }
}
