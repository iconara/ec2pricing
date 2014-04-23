.PHONY: all clean

all: lib/app.js styles/styles.css

clean:
	rm -rf lib

lib:
	mkdir -p lib

bower_components/angular/%:
	bower install angular

bower_components/jquery/dist/%:
	bower install jquery

bower_components/bootstrap/%:
	bower install bootstrap

lib/angular.js: bower_components/angular/angular.js lib
	cp $< $@

lib/jquery.js: bower_components/jquery/dist/jquery.js lib
	cp $< $@

lib/bootstrap.js: bower_components/bootstrap/dist/js/bootstrap.js lib
	cp $< $@

lib/app.js: lib/angular.js lib/jquery.js lib/bootstrap.js app/filters.js app/utils.js app/directives.js app/module.js app/controllers.js node_modules/uglify-js/bin/uglifyjs
	node_modules/uglify-js/bin/uglifyjs $(filter %.js, $^) > lib/app.js

styles/styles.css: styles/styles.less bower_components/bootstrap/less fonts node_modules/less/bin/lessc
	node_modules/less/bin/lessc $< > $@

fonts: bower_components/bootstrap/fonts
	cp -r $< $@

node_modules/less/bin/lessc:
	npm install less

node_modules/uglify-js/bin/uglifyjs:
	npm install uglify-js
