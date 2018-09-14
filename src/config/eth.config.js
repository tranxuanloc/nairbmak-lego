/**
 * Contructor
 */
var config = {};

/**
 * Local configurations
 */
config.local = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
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
  },
  BOUNTY: {
    'MODERATOR_ADDRESS': '0x2cfec30d15dc87a316709373cef259c309289193'
  }
};

/**
 * Development configurations
 */
config.development = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
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
  },
  BOUNTY: {
    'MODERATOR_ADDRESS': '0x2cfec30d15dc87a316709373cef259c309289193'
  }
};

/**
 * Staging configurations
 */
config.staging = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
    DECIMALS: 18
  },
  NETWORK: '4',
  EVENTS: {
    TRANSFER: 'Transfer'
  },
  BOUNTY: {
    'MODERATOR_ADDRESS': '0x2cfec30d15dc87a316709373cef259c309289193'
  }
};

/**
 * Testnet configurations
 */
config.testnet = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
    DECIMALS: 18
  },
  NETWORK: '4',
  EVENTS: {
    TRANSFER: 'Transfer'
  },
  BOUNTY: {
    'MODERATOR_ADDRESS': '0x2cfec30d15dc87a316709373cef259c309289193'
  }
};

/**
 * Production configurations
 */
config.production = {
  BLOCKCHAIN_PROVIDER: 'http://172.31.28.106:8545',
  KATT: {
    ADDRESS: '0x9dddff7752e1714c99edf940ae834f0d57d68546',
    DECIMALS: 18
  },
  NETWORK: '4',
  EVENTS: {
    TRANSFER: 'Transfer'
  },
  BOUNTY: {
    'MODERATOR_ADDRESS': '0x2cfec30d15dc87a316709373cef259c309289193'
  }
};

/**
 * Module exports
 */
export default config;
