// import React from 'react';
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
// import sinon from 'sinon';

import * as types from 'redux/actions/actionTypes.js';
import * as actions from 'redux/actions/blockchain.action.js';

// Enzyme.configure({ adapter: new Adapter() });

describe('Redux Action: blockchain.action', () => {
  it('should create an action to update blockchain info', () => {
    const data = {
      NETWORK: '4',
      ACCOUNT: '0x6a6f9e3f0b647301b1b24fc7ff9a27f60f77377a',
      BALANCE: 18997797008000000000,
      CHANGED: null
    };
    const expectedAction = {
      type: types.UPDATE_TOKEN_INFO,
      data
    };
    expect(actions.updateInfo(data)).to.deep.equal(expectedAction);
  });
});
