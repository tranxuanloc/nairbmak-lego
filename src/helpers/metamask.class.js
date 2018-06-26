import Web3 from 'web3';
import EventEmitter from 'events';

const NETWORK_CHANGED = 'network';
const ACCOUNT_CHANGED = 'account';
const BALANCE_CHANGED = 'balance';
const ACCOUNT_ERROR = 'Cannot get account';
const ADDRESS_ERROR = 'Invalid address';

class Metamask {
  constructor() {
    class Emitter extends EventEmitter { }
    this.emitter = new Emitter();

    this.USER = {
      NETWORK: null,
      ACCOUNT: null,
      BALANCE: null,
      CHANGED: null
    };
    if (!window.web3 || !window.web3.currentProvider) return false;
    this.web3 = new Web3(window.web3.currentProvider);
  }

  metaStatus() {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!window.web3 || !window.web3.currentProvider)
        return reject('Metamask is not installed');
      self.getNetwork().then(
        self.getAccount().then(re => {
          if (!re) return reject('Have no account in metamask');
          return resolve('OK');
        }).catch(reject('Have no account in metamask'))
      ).catch(reject('Metamask is not logged in'));
    });
  }

  /**
   * Check valid address
   * @param {*} address 
   */
  isAddress(address) {
    return this.web3.isAddress(address);
  }

  /**
   * Get network id
   */
  getNetwork() {
    var self = this;
    return new Promise((resolve, reject) => {
      self.web3.version.getNetwork((er, re) => {
        if (er) return reject(er);
        return resolve(re);
      });
    });
  }

  /**
   * Get account info
   */
  getAccount() {
    var self = this;
    return new Promise((resolve, reject) => {
      self.web3.eth.getAccounts((er, re) => {
        if (er) return reject(er);
        return resolve(re[0]);
      });
    });
  }

  /**
   * Get account balance
   * @param {*} address 
   */
  getBalance(address) {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!self.isAddress(address)) return reject(ADDRESS_ERROR);
      self.web3.eth.getBalance(address, (er, re) => {
        if (er) return reject(er);
        return resolve(Number(re));
      });
    });
  }

  /**
   * Fetch info of USER
   */
  fetch() {
    var self = this;
    return new Promise((resolve, reject) => {
      self.getNetwork().then(re => {
        self.USER.NETWORK = re;
        return self.getAccount();
      }).then(re => {
        self.USER.ACCOUNT = re;
        if (!self.USER.ACCOUNT) return reject(ACCOUNT_ERROR);
        return self.getBalance(self.USER.ACCOUNT);
      }).then(re => {
        self.USER.BALANCE = re;
        let data = JSON.parse(JSON.stringify(self.USER));
        return resolve(data);
      }).catch(er => {
        return reject(er);
      });
    });
  }

  /**
   * Watch any changes of provider
   */
  watch() {
    var self = this;
    return new Promise((resolve) => {
      var watchCurrentAccount = setInterval(() => {
        // Watch switching network event
        self.getNetwork().then(re => {
          if (self.USER.NETWORK !== re) {
            self.USER.NETWORK = re;
            self.USER.CHANGED = NETWORK_CHANGED;
            let data = JSON.parse(JSON.stringify(self.USER));
            return self.emitter.emit('data', data);
          }
        }).catch(er => {
          return self.emitter.emit('error', er);
        });
        // Watch switching account event
        self.getAccount().then(re => {
          if (self.USER.ACCOUNT !== re) {
            self.USER.ACCOUNT = re;
            self.USER.CHANGED = ACCOUNT_CHANGED;
            let data = JSON.parse(JSON.stringify(self.USER));
            return self.emitter.emit('data', data);
          }
        }).catch(er => {
          return self.emitter.emit('error', er);
        });
        // Watch changing balance event
        self.getBalance(self.USER.ACCOUNT).then(re => {
          if (self.USER.BALANCE !== re) {
            self.USER.BALANCE = re;
            self.USER.CHANGED = BALANCE_CHANGED;
            let data = JSON.parse(JSON.stringify(self.USER));
            return self.emitter.emit('data', data);
          }
        }).catch(er => {
          return self.emitter.emit('error', er);
        });
      }, 2000);

      var stopWatching = function () {
        clearInterval(watchCurrentAccount);
      };

      return resolve({ stopWatching: stopWatching, event: self.emitter });
    });
  }
}

export default Metamask;