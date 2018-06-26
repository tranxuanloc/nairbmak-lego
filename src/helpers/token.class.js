import EventEmitter from 'events';

const ACCOUNT_ERROR = 'Cannot get account';
const DECIMALS_ERROR = 'Decimals is null';
const ADDRESS_ERROR = 'Invalid address';
const INSTANCE_ERROR = 'Cannot create token instance';

class Token {
  constructor(ABI, ADDRESS, DECIMALS = null, web3Instance) {
    class Emitter extends EventEmitter { }
    this.emitter = new Emitter();

    this.USER = {
      ACCOUNT: null,
      BALANCE: null
    };

    if (!web3Instance) return false;
    this.web3 = web3Instance;

    if (!ABI) return false;
    if (!ADDRESS || !this.web3.isAddress(ADDRESS)) return false;
    var CONTRACT = this.web3.eth.contract(ABI).at(ADDRESS);

    this.TOKEN = {
      ABI: ABI,
      ADDRESS: ADDRESS,
      DECIMALS: DECIMALS,
      INSTANCE: CONTRACT
    };
  }

  /**
   * Get decimals
   */
  decimals() {
    var self = this;
    return new Promise((resolve, reject) => {
      self.TOKEN.INSTANCE.decimals((er, decimals) => {
        if (er) return reject(er);
        return resolve(decimals);
      });
    });
  }

  /**
   * Get token balance
   * @param {*} address 
   */
  balanceOf(address) {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!self.TOKEN.DECIMALS) return reject(DECIMALS_ERROR);
      if (!self.web3.isAddress(address)) return reject(ADDRESS_ERROR);
      self.TOKEN.INSTANCE.balanceOf(address, (er, balance) => {
        if (er) return reject(er);
        if (self.TOKEN.DECIMALS) return resolve(Number(balance) / 10 ** Number(self.TOKEN.DECIMALS));
      });
    });
  }

  /**
   * Transfer token
   * @param {*} to 
   * @param {*} amount 
   */
  transfer(to, amount) {
    var self = this;
    return new Promise((resolve, reject) => {
      if (!self.TOKEN.DECIMALS) return reject(DECIMALS_ERROR);
      if (!self.web3.isAddress(to)) return reject(ADDRESS_ERROR);
      self.TOKEN.INSTANCE.transfer(
        to,
        amount * 10 ** self.TOKEN.DECIMALS,
        { from: self.USER.ACCOUNT },
        (er, txId) => {
          if (er) return reject(er);
          return resolve(txId);
        });
    });
  }

  /**
   * Watch any changes of balance (Token not Eth)
   */
  watch(address) {
    var self = this;
    return new Promise((resolve, reject) => {
      // Set global vars
      self.USER.ACCOUNT = address;
      self.balanceOf(address).then(re => {
        self.USER.BALANCE = re;
        let data = JSON.parse(JSON.stringify(self.USER));
        return self.emitter.emit('data', data);
      }).catch(er => {
        return self.emitter.emit('error', er);
      });
      // Watch balance
      if (!self.TOKEN) return reject(INSTANCE_ERROR);
      var watchBalance = self.TOKEN.INSTANCE.Transfer();
      watchBalance.watch((er, event) => {
        if (er) return self.emitter.emit('error', er);
        if (!event || !event.args) return;
        if (!self.USER.ACCOUNT) return self.emitter.emit('error', ACCOUNT_ERROR);
        if (event.args.from.toLowerCase() === self.USER.ACCOUNT.toLowerCase()
          || event.args.to.toLowerCase() === self.USER.ACCOUNT.toLowerCase()) {
          self.balanceOf(self.USER.ACCOUNT).then(re => {
            self.USER.BALANCE = re;
            let data = JSON.parse(JSON.stringify(self.USER));
            return self.emitter.emit('data', data);
          }).catch(er => {
            return self.emitter.emit('error', er);
          });
        }
      });

      var stopWatching = function () {
        watchBalance.stopWatching();
        self.emitter.removeAllListeners();
      };

      return resolve({ stopWatching: stopWatching, event: self.emitter });
    });
  }
}

export default Token;