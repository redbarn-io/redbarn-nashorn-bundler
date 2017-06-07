/**
 * This module doesn't have any real functionality as of yet, but it does
 * require a several modules which will be used by Browserify to make a bundle
 * for ScriptEngines like Nashorn.
 *
 * The steps to create a bundle are
 *  > npm install
 *  > npm install -g browserify
 *  > browserify index.js -o redbarn-bundle.js
 *
 * Once the bundle is created it should be loaded into the JDK's jjs REPL to
 * ensure that it can be used in redbarn.
 * > jjs
 * jjs> load('nashorn-polyfil.js');
 * jjs> load('redbarn-bundle.js');
 * jjs> // Each of the following commands should print functions or objects
 * jjs> console.log
 * jjs> redbarn
 * jjs> _.concat
 * jjs> cheerio
 */


// Place these artifacts directly into the global namespace.
global.cheerio = require('cheerio');
global._ = require('lodash');
global.redbarn = {
    processors: {}
};

// Extend lodash
_.mixin({ 'uuid': require('./lib/lodash-uuid')});

// Extend cheerio
_.extend(global.cheerio.prototype, require('./lib/cheerio-repeat'))
