import * as types from './actionTypes';

export const updateInfo = (data) => {
  if(data.CHANGED === 'account') window.location.reload();
  return { type: types.UPDATE_TOKEN_INFO, data };
};