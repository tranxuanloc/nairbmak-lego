import * as types from '../actions/actionTypes';

const defaultState = {
  NETWORK: null,
  NETWORK_NAME: null,
  ACCOUNT: null,
  BALANCE: null,
  CHANGED: 'init',
  TOKEN_BALANCE: null,
  STATUS: null,
  MESSAGE: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_TOKEN_INFO:
      return { ...state, ...action.data };
    default:
      return state;
  }
};