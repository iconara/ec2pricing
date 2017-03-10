.PHONY: db

db: public/data/ec2.sqlite

public/data/ec2.sqlite: public/data
	tail +6 "tmp/AmazonEC2.csv" | sqlite3 --init import.sql $@

public/data:
	mkdir -p $@
