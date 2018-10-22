.PHONY: deps dev dev-test test dist deploy db

deps: static/lib/sql.js
	npm install

dev:
	npm run dev

dev-test:
	npm run unit-watch

test:
	npm run test

dist: test db
	npm run build

deploy: dist
	aws s3 cp --recursive --acl public-read --exclude='*.sqlite' --exclude='sql.js' dist/ s3://ec2pricing.net/
	gzip -c dist/static/lib/sql.js | aws s3 cp --acl public-read --content-encoding gzip - s3://ec2pricing.net/static/lib/sql.js
	gzip -c dist/static/data/ec2.sqlite | aws s3 cp --acl public-read --content-encoding gzip --metadata "x-amz-meta-uncompressed-content-length=$(shell stat -f '%z' static/data/ec2.sqlite)" - s3://ec2pricing.net/static/data/ec2.sqlite

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
