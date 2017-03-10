.PHONY: deps db serve

deps: public/lib/sql.js

serve:
	cd public && python -m SimpleHTTPServer

db: public/data/ec2.sqlite

public/data/ec2.sqlite: public/data
	tail +6 "tmp/AmazonEC2.csv" | sqlite3 --init import.sql $@

public/lib/sql.js: public/lib
	curl 'https://raw.githubusercontent.com/kripken/sql.js/master/js/sql.js' > $@

public/lib:
	mkdir -p $@

public/data:
	mkdir -p $@
