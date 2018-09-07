import * as types from './actionTypes';
import store from 'redux/store';

export const updateInfo = (data) => {
  let blockchain = store.getState().blockchain;
  if (blockchain.CHANGED !== 'init' && data.CHANGED === 'account') window.location.reload();
  return { type: types.UPDATE_TOKEN_INFO, data };
};