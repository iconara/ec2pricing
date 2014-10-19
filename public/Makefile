.PHONY: all clean test serve auto deploy

APP_SOURCES = app/modules.js $(shell find app/ec2pricing -name '*.js')
TEST_SOURCES = $(filter-out test/tests.js, $(wildcard test/*.js))
S3_URI=s3://ec2pricing.iconara.info/beta

all: lib lib/lib.js lib/app.js styles/styles.css fonts

test: all test/tests.js
	node_modules/mocha-phantomjs/bin/mocha-phantomjs test.html

clean:
	rm -rf lib fonts
	rm -f test/tests.js styles/styles.css

serve:
	python -m SimpleHTTPServer

auto:
	bin/watch app,app/ec2pricing,styles make

deploy: lib/app.js lib/lib.js styles/styles.css fonts
	aws s3 cp --acl public-read index.html ${S3_URI}/index.html
	aws s3 cp --acl public-read --recursive lib ${S3_URI}/lib
	aws s3 cp --acl public-read --recursive --exclude '*.less' styles ${S3_URI}/styles
	aws s3 cp --acl public-read --recursive fonts ${S3_URI}/fonts

lib:
	mkdir -p lib

setup:
	npm install bower less uglify-js mocha chai mocha-phantomjs phantomjs
	node_modules/bower/bin/bower install angular angular-mocks jquery bootstrap

lib/lib.js: bower_components/angular/angular.js bower_components/jquery/dist/jquery.js bower_components/bootstrap/dist/js/bootstrap.js
	node_modules/uglify-js/bin/uglifyjs $^ \
		--compress \
		--mangle \
		--output lib/lib.js

lib/app.js: $(APP_SOURCES)
	node_modules/uglify-js/bin/uglifyjs $^ \
		--source-map lib/app.js.map \
		--prefix relative \
		--beautify \
		--stats \
		--output lib/app.js

test/tests.js: $(TEST_SOURCES)
	node_modules/uglify-js/bin/uglifyjs $^ > test/tests.js

styles/styles.css: styles/styles.less
	node_modules/less/bin/lessc $< > $@

fonts: bower_components/bootstrap/fonts
	cp -r $< $@
