.PHONY: all clean test

all: lib lib/lib.js lib/app.js styles/styles.css

test: all
	node_modules/mocha-phantomjs/bin/mocha-phantomjs test.html

clean:
	rm -rf lib

lib:
	mkdir -p lib

setup:
	npm install bower less uglify-js mocha chai mocha-phantomjs phantomjs
	node_modules/bower/bin/bower install angular angular-mocks jquery bootstrap

lib/lib.js: bower_components/angular/angular.js bower_components/jquery/dist/jquery.js bower_components/bootstrap/dist/js/bootstrap.js
	node_modules/uglify-js/bin/uglifyjs $^ > lib/lib.js

lib/app.js: app/filters.js app/utils.js app/directives.js app/module.js app/controllers.js
	node_modules/uglify-js/bin/uglifyjs $^ > lib/app.js

styles/styles.css: styles/styles.less
	node_modules/less/bin/lessc $< > $@

fonts: bower_components/bootstrap/fonts
	cp -r $< $@
