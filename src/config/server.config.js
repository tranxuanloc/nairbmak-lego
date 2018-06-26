/**
 * Contructor
 */
var config = {};

/**
 * Development configurations
 */
config.development = {
  API: {
    BASE: 'http://ec2-54-218-64-48.us-west-2.compute.amazonaws.com:3002',
    // BASE: 'http://localhost:3002'
  }
};

/**
 * Staging configurations
 */
config.staging = {
  API: {
    BASE: 'https://api.kambria.io'
  }
};

/**
 * Production configurations
 */
config.production = {
  API: {
    BASE: ''
  }
};

/**
 * Module exports
 */
module.exports = config;