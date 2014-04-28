.PHONY: all clean test

APP_SOURCES = app/filters.js app/utils.js app/directives.js app/module.js app/controllers.js
TEST_SOURCES = $(filter-out test/tests.js, $(wildcard test/*.js))

all: lib lib/lib.js lib/app.js styles/styles.css

test: all test/tests.js
	node_modules/mocha-phantomjs/bin/mocha-phantomjs test.html

clean:
	rm -rf lib fonts
	rm -f test/tests.js styles/styles.css

lib:
	mkdir -p lib

setup:
	npm install bower less uglify-js mocha chai mocha-phantomjs phantomjs
	node_modules/bower/bin/bower install angular angular-mocks jquery bootstrap

lib/lib.js: bower_components/angular/angular.js bower_components/jquery/dist/jquery.js bower_components/bootstrap/dist/js/bootstrap.js
	node_modules/uglify-js/bin/uglifyjs $^ > lib/lib.js

lib/app.js: $(APP_SOURCES)
	node_modules/uglify-js/bin/uglifyjs $^ > lib/app.js

test/tests.js: $(TEST_SOURCES)
	node_modules/uglify-js/bin/uglifyjs $^ > test/tests.js

styles/styles.css: styles/styles.less
	node_modules/less/bin/lessc $< > $@

fonts: bower_components/bootstrap/fonts
	cp -r $< $@
