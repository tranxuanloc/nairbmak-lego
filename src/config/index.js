import eth from './eth.config';
import api from './api.config';
import sites from './sites.config';

var env = process.env.REACT_APP_ENV || (process.env.NODE_ENV || 'development');

export default {
  eth: eth[env],
  api: api[env],
  sites: sites[env]
};