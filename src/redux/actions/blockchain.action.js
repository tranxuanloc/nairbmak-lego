import * as types from './actionTypes';

export const updateInfo = (data) => {
  return { type: types.UPDATE_TOKEN_INFO, data };
};