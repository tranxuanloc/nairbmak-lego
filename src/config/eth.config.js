var tokenABI = require('./data/tokenABI.json');

/**
 * Contructor
 */
var config = {};

/**
 * Development configurations
 */
config.development = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
    ABI: tokenABI,
    DECIMALS: 18
  },
  // BLOCKCHAIN_PROVIDER: 'http://localhost:8545',
  // KATT: {
  //   ADDRESS: '0xef75e34c50c1b109fe65ee696f12225de508b9f2',
  //   ABI: tokenABI,
  //   DECIMALS: 18
  // },
  NETWORK: '4',
  EVENTS: {
    TRANSFER: 'Transfer'
  }
};

/**
 * Staging configurations
 */
config.staging = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
    ABI: tokenABI,
    DECIMALS: 18
  },
  NETWORK: '4',
  EVENTS: {
    TRANSFER: 'Transfer'
  }
};

/**
 * Production configurations
 */
config.production = {
  BLOCKCHAIN_PROVIDER: '',
  KATT: {
    ADDRESS: '',
    ABI: tokenABI,
    DECIMALS: 18
  },
  NETWORK: '1',
  EVENTS: {
    TRANSFER: 'Transfer'
  }
};

/**
 * Module exports
 */
module.exports = config;
