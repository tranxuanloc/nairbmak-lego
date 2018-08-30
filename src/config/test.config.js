process.env.BABEL_ENV = 'development';
// Register babel so that it will transpile ES6 to ES5 before our tests run.
require('babel-register')();
// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
require.extensions['.css'] = () => {};
require.extensions['.svg'] = () => {};
require.extensions['.png'] = () => {};
// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var jsdom = require('jsdom');
var React = require('react');

const { JSDOM } = jsdom;

const { document } = (new JSDOM('<html><body></body></html>')).window;

var exposedProperties = ['window', 'navigator', 'document'];

global.navigator = { userAgent: 'node.js' };

global.window = document.defaultView;

global.window.React = React;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.document = document;