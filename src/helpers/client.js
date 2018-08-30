import config from 'config';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
axios.defaults.adapter = httpAdapter;

const API_END_POINT = config.api.api;

class Client {
  constructor(opt = {}) {
    this.opt = Object.assign(this._getDefaultOption(), opt);
    this.request = axios.create(this.opt);
  }

  // @private
  _getDefaultOption() {
    return {
      timeout: 5000
    };
  }

  _initSocket(token) {
    if (this.sock) this.sock.close();
  }

  // @private
  _reset() {
    this.request = axios.create(this._getDefaultOption());
  }
  // @private
  _update(opt) {
    this.request = axios.create(Object.assign(this.opt, opt));
  }

  api(path, method = 'get', params = {}, headers) {
    return new Promise((resolve, reject) => {
      if (!path) {
        // path is required
        return reject(new Error('Used: api(path, method, params)'));
      }

      // add '/' to path if missing
      if (path[0] !== '/' && !headers) {
        path = '/' + path;
      }

      // use v1 version
      path = headers ? path : API_END_POINT + path;

      if (path.indexOf('?') !== -1) {
        path += '&_t=' + Date.now();
      } else {
        path += '?_t=' + Date.now();
      }
      // support shorthand api(path, params)
      // method will default to get
      if (arguments.length === 2 && String(method) === '[object Object]') {
        params = method;
        method = 'get';
      }

      method = method.toLowerCase();
      if (['get', 'post', 'put', 'delete'].indexOf(method) === -1) {
        return reject(
          new Error(
            `ERR: ${method} not allowed, only allow get, post, put, delete`
          )
        );
      }
      this.request[method.toLowerCase()](path, params, headers)
        .then(resolve)
        .catch(reject);
    });
  }
}

export default new Client();
