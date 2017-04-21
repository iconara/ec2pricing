.mode csv AmazonEC2
.import /dev/stdin AmazonEC2

CREATE TABLE meta (
  key TEXT PRIMARY KEY,
  value TEXT
);

CREATE TABLE term_type (
  term_type_id INTEGER PRIMARY KEY,
  term_type TEXT NOT NULL
);

INSERT INTO term_type (term_type)
SELECT DISTINCT "TermType"
FROM "AmazonEC2"
EXCEPT
SELECT term_type FROM term_type;

CREATE TABLE purchase_option (
  purchase_option_id INTEGER PRIMARY KEY,
  purchase_option TEXT NOT NULL
);

INSERT INTO purchase_option (purchase_option)
SELECT DISTINCT "PurchaseOption"
FROM "AmazonEC2"
EXCEPT
SELECT purchase_option FROM purchase_option;

CREATE TABLE lease_contract_length (
  lease_contract_length_id INTEGER PRIMARY KEY,
  lease_contract_length TEXT NOT NULL
);

INSERT INTO lease_contract_length (lease_contract_length)
SELECT DISTINCT "LeaseContractLength"
FROM "AmazonEC2"
EXCEPT
SELECT lease_contract_length FROM lease_contract_length;

CREATE TABLE offering_class (
  offering_class_id INTEGER PRIMARY KEY,
  offering_class TEXT NOT NULL
);

INSERT INTO offering_class (offering_class)
SELECT DISTINCT "OfferingClass"
FROM "AmazonEC2"
EXCEPT
SELECT offering_class FROM offering_class;

CREATE TABLE location (
  location_id INTEGER PRIMARY KEY,
  location TEXT NOT NULL,
  region TEXT
);

INSERT INTO location (location)
SELECT DISTINCT "Location"
FROM "AmazonEC2"
EXCEPT
SELECT location FROM location;

CREATE TABLE instance_type (
  instance_type_id INTEGER PRIMARY KEY,
  instance_type TEXT NOT NULL,
  current_generation INTEGER NOT NULL,
  vcpus INTEGER NOT NULL,
  physical_processor TEXT NOT NULL,
  clock_speed TEXT NULL,
  memory TEXT NOT NULL,
  storage TEXT NOT NULL,
  network_performance TEXT NOT NULL,
  processor_architecture TEXT NOT NULL,
  gpus INTEGER NOT NULL
);

INSERT INTO instance_type (
  instance_type,
  current_generation,
  vcpus,
  physical_processor,
  clock_speed,
  memory,
  storage,
  network_performance,
  processor_architecture,
  gpus
)
SELECT DISTINCT
  "Instance Type",
  CASE "Current Generation" WHEN 'Yes' THEN 1 ELSE 0 END,
  "vCPU",
  "Physical Processor",
  "Clock Speed",
  "Memory",
  "Storage",
  "Network Performance",
  "Processor Architecture",
  "GPU"
FROM "AmazonEC2"
WHERE "Product Family" = 'Compute Instance'
EXCEPT
SELECT
  instance_type,
  current_generation,
  vcpus,
  physical_processor,
  clock_speed,
  memory,
  storage,
  network_performance,
  processor_architecture,
  gpus
FROM instance_type;

CREATE TABLE operating_system (
  operating_system_id INTEGER PRIMARY KEY,
  operating_system TEXT NOT NULL
);

INSERT INTO operating_system (operating_system)
SELECT DISTINCT "Operating System"
FROM "AmazonEC2"
EXCEPT
SELECT operating_system FROM operating_system;

CREATE TABLE tenancy (
  tenancy_id INTEGER PRIMARY KEY,
  tenancy TEXT NOT NULL
);

INSERT INTO tenancy (tenancy)
SELECT DISTINCT "Tenancy"
FROM "AmazonEC2"
EXCEPT
SELECT tenancy FROM tenancy;

CREATE TABLE license_model (
  license_model_id INTEGER PRIMARY KEY,
  license_model TEXT NOT NULL
);

INSERT INTO license_model (license_model)
SELECT DISTINCT "License Model"
FROM "AmazonEC2"
EXCEPT
SELECT license_model FROM license_model;

CREATE TABLE preinstalled_software (
  preinstalled_software_id INTEGER PRIMARY KEY,
  preinstalled_software TEXT NOT NULL
);

INSERT INTO preinstalled_software (preinstalled_software)
SELECT DISTINCT "Pre Installed S/W"
FROM "AmazonEC2"
EXCEPT
SELECT preinstalled_software FROM preinstalled_software;

CREATE TEMPORARY TABLE hourly_rate (
  purchase_option_id INTEGER NOT NULL,
  lease_contract_length_id INTEGER NOT NULL,
  offering_class_id INTEGER NOT NULL,
  location_id INTEGER NOT NULL,
  instance_type_id INTEGER NOT NULL,
  operating_system_id INTEGER NOT NULL,
  tenancy_id INTEGER NOT NULL,
  license_model_id INTEGER NOT NULL,
  preinstalled_software_id INTEGER NOT NULL,
  hourly_rate TEXT NOT NULL,
  FOREIGN KEY (purchase_option_id) REFERENCES purchase_option (purchase_option_id),
  FOREIGN KEY (lease_contract_length_id) REFERENCES lease_contract_length (lease_contract_length_id),
  FOREIGN KEY (offering_class_id) REFERENCES offering_class (offering_class_id),
  FOREIGN KEY (location_id) REFERENCES location (location_id),
  FOREIGN KEY (instance_type_id) REFERENCES instance_type (instance_type_id),
  FOREIGN KEY (operating_system_id) REFERENCES operating_system (operating_system_id),
  FOREIGN KEY (tenancy_id) REFERENCES tenancy (tenancy_id),
  FOREIGN KEY (license_model_id) REFERENCES license_model (license_model_id),
  FOREIGN KEY (preinstalled_software_id) REFERENCES preinstalled_software (preinstalled_software_id),
  PRIMARY KEY (
    purchase_option_id,
    lease_contract_length_id,
    offering_class_id,
    location_id,
    instance_type_id,
    operating_system_id,
    tenancy_id,
    license_model_id,
    preinstalled_software_id
  )
);

INSERT INTO hourly_rate
SELECT
  po.purchase_option_id,
  lcl.lease_contract_length_id,
  oc.offering_class_id,
  l.location_id,
  it.instance_type_id,
  os.operating_system_id,
  t.tenancy_id,
  lm.license_model_id,
  ps.preinstalled_software_id,
  CASE
  WHEN "PricePerUnit" LIKE '%0' THEN SUBSTR("PricePerUnit", 0, INSTR("PricePerUnit", '.') + 2) || RTRIM(SUBSTR("PricePerUnit", INSTR("PricePerUnit", '.') + 2), '0')
  ELSE "PricePerUnit"
  END
FROM "AmazonEC2" raw
LEFT JOIN purchase_option po ON po.purchase_option = "PurchaseOption"
LEFT JOIN lease_contract_length lcl ON lcl.lease_contract_length = "LeaseContractLength"
LEFT JOIN offering_class oc ON oc.offering_class = "OfferingClass"
LEFT JOIN location l ON l.location = raw."Location"
LEFT JOIN instance_type it ON it.instance_type = "Instance Type"
LEFT JOIN operating_system os ON os.operating_system = "Operating System"
LEFT JOIN tenancy t ON t.tenancy = raw."Tenancy"
LEFT JOIN license_model lm ON lm.license_model = "License Model"
LEFT JOIN preinstalled_software ps ON ps.preinstalled_software = "Pre Installed S/W"
WHERE "Product Family" = 'Compute Instance'
AND "Unit" IN ('Hrs', 'hrs')
AND "EBS Optimized" <> 'Yes';

CREATE TEMPORARY TABLE upfront_cost (
  purchase_option_id INTEGER NOT NULL,
  lease_contract_length_id INTEGER NOT NULL,
  offering_class_id INTEGER NOT NULL,
  location_id INTEGER NOT NULL,
  instance_type_id INTEGER NOT NULL,
  operating_system_id INTEGER NOT NULL,
  tenancy_id INTEGER NOT NULL,
  license_model_id INTEGER NOT NULL,
  preinstalled_software_id INTEGER NOT NULL,
  upfront_cost TEXT NULL,
  FOREIGN KEY (purchase_option_id) REFERENCES purchase_option (purchase_option_id),
  FOREIGN KEY (lease_contract_length_id) REFERENCES lease_contract_length (lease_contract_length_id),
  FOREIGN KEY (offering_class_id) REFERENCES offering_class (offering_class_id),
  FOREIGN KEY (location_id) REFERENCES location (location_id),
  FOREIGN KEY (instance_type_id) REFERENCES instance_type (instance_type_id),
  FOREIGN KEY (operating_system_id) REFERENCES operating_system (operating_system_id),
  FOREIGN KEY (tenancy_id) REFERENCES tenancy (tenancy_id),
  FOREIGN KEY (license_model_id) REFERENCES license_model (license_model_id),
  FOREIGN KEY (preinstalled_software_id) REFERENCES preinstalled_software (preinstalled_software_id),
  PRIMARY KEY (
    purchase_option_id,
    lease_contract_length_id,
    offering_class_id,
    location_id,
    instance_type_id,
    operating_system_id,
    tenancy_id,
    license_model_id,
    preinstalled_software_id
  )
);

INSERT INTO upfront_cost
SELECT
  po.purchase_option_id,
  lcl.lease_contract_length_id,
  oc.offering_class_id,
  l.location_id,
  it.instance_type_id,
  os.operating_system_id,
  t.tenancy_id,
  lm.license_model_id,
  ps.preinstalled_software_id,
  "PricePerUnit"
FROM "AmazonEC2" raw
LEFT JOIN purchase_option po ON po.purchase_option = "PurchaseOption"
LEFT JOIN lease_contract_length lcl ON lcl.lease_contract_length = "LeaseContractLength"
LEFT JOIN offering_class oc ON oc.offering_class = "OfferingClass"
LEFT JOIN location l ON l.location = raw."Location"
LEFT JOIN instance_type it ON it.instance_type = "Instance Type"
LEFT JOIN operating_system os ON os.operating_system = "Operating System"
LEFT JOIN tenancy t ON t.tenancy = raw."Tenancy"
LEFT JOIN license_model lm ON lm.license_model = "License Model"
LEFT JOIN preinstalled_software ps ON ps.preinstalled_software = "Pre Installed S/W"
WHERE "Product Family" = 'Compute Instance'
AND "PriceDescription" = 'Upfront Fee'
AND "Unit" = 'Quantity';

CREATE TABLE cost (
  purchase_option_id INTEGER NOT NULL,
  lease_contract_length_id INTEGER NOT NULL,
  offering_class_id INTEGER NOT NULL,
  location_id INTEGER NOT NULL,
  instance_type_id INTEGER NOT NULL,
  operating_system_id INTEGER NOT NULL,
  tenancy_id INTEGER NOT NULL,
  license_model_id INTEGER NOT NULL,
  preinstalled_software_id INTEGER NOT NULL,
  hourly_rate TEXT NOT NULL,
  upfront_cost TEXT NULL,
  FOREIGN KEY (purchase_option_id) REFERENCES purchase_option (purchase_option_id),
  FOREIGN KEY (lease_contract_length_id) REFERENCES lease_contract_length (lease_contract_length_id),
  FOREIGN KEY (offering_class_id) REFERENCES offering_class (offering_class_id),
  FOREIGN KEY (location_id) REFERENCES location (location_id),
  FOREIGN KEY (instance_type_id) REFERENCES instance_type (instance_type_id),
  FOREIGN KEY (operating_system_id) REFERENCES operating_system (operating_system_id),
  FOREIGN KEY (tenancy_id) REFERENCES tenancy (tenancy_id),
  FOREIGN KEY (license_model_id) REFERENCES license_model (license_model_id),
  FOREIGN KEY (preinstalled_software_id) REFERENCES preinstalled_software (preinstalled_software_id),
  PRIMARY KEY (
    purchase_option_id,
    lease_contract_length_id,
    offering_class_id,
    location_id,
    instance_type_id,
    operating_system_id,
    tenancy_id,
    license_model_id,
    preinstalled_software_id
  )
);

INSERT INTO cost
SELECT
  hr.purchase_option_id,
  hr.lease_contract_length_id,
  hr.offering_class_id,
  hr.location_id,
  hr.instance_type_id,
  hr.operating_system_id,
  hr.tenancy_id,
  hr.license_model_id,
  hr.preinstalled_software_id,
  hr.hourly_rate,
  uc.upfront_cost
FROM hourly_rate hr LEFT JOIN upfront_cost uc ON (
  hr.purchase_option_id = uc.purchase_option_id
  AND hr.lease_contract_length_id = uc.lease_contract_length_id
  AND hr.offering_class_id = uc.offering_class_id
  AND hr.location_id = uc.location_id
  AND hr.instance_type_id = uc.instance_type_id
  AND hr.operating_system_id = uc.operating_system_id
  AND hr.tenancy_id = uc.tenancy_id
  AND hr.license_model_id = uc.license_model_id
  AND hr.preinstalled_software_id = uc.preinstalled_software_id
);

DROP TABLE "AmazonEC2";

VACUUM;
