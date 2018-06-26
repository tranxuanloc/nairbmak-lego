import * as types from './actionTypes';

export const updateInfo = (data) => {
  return dispatch => {
    dispatch({ type: types.UPDATE_TOKEN_INFO, data });
  };
};