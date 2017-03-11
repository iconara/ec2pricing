.PHONY: deps dev test db

deps: static/lib/sql.js
	npm install

dev:
	npm run dev

test:
	npm run unit

db: static/data/ec2.sqlite

tmp/data/AmazonEC2.csv: tmp/data
	curl "https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonEC2/current/index.csv" > $@

static/data/ec2.sqlite: tmp/data/AmazonEC2.csv static/data
	rm -f $@
	tail +6 $< | sqlite3 --init import.sql $@
	echo 'INSERT INTO meta VALUES ("publication_date", $(shell grep -m 1 "Publication Date" tmp/data/AmazonEC2.csv | cut -d, -f2)), ("build_date", "$(shell TZ=UTC date +"%Y-%m-%dT%H:%M:%SZ")");' | sqlite3 $@

static/lib/sql.js: static/lib
	curl 'https://raw.githubusercontent.com/kripken/sql.js/master/js/sql.js' > $@

tmp/data:
	mkdir -p $@

static/data:
	mkdir -p $@

static/lib:
	mkdir -p $@
