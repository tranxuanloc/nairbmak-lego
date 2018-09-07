import { expect } from 'chai';

import * as types from 'redux/actions/actionTypes.js';
import * as actions from 'redux/actions/blockchain.action.js';

describe('Redux Action: blockchain.action', () => {
  it('should create an action to update blockchain info', () => {
    const data = {
      NETWORK: '4',
      NETWORK_NAME: null,
      ACCOUNT: '0x6a6f9e3f0b647301b1b24fc7ff9a27f60f77377a',
      BALANCE: 100,
      CHANGED: 'account',
      TOKEN_BALANCE: 1000,
      STATUS: 'METAMASK_FOUND_KAT',
      MESSAGE: 'Ok'
    };
    const expectedAction = {
      type: types.UPDATE_TOKEN_INFO,
      data
    };
    expect(actions.updateInfo(data)).to.deep.equal(expectedAction);
  });
});
