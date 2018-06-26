var env = process.env.REACT_APP_ENV || process.env.NODE_ENV;

var eth = require('./eth.config');
var server = require('./server.config');

/**
 * Module exports
 */
module.exports = {
  eth: eth[env],
  server: server[env]
};