import * as types from '../actions/actionTypes';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_INFO_OK:
      return { ...state, ...action.data };
    case types.FETCH_INFO_FAIL:
      return { ...state, ...action.data };
    case types.WATCH_INFO_OK:
      return { ...state, ...action.data };
    case types.WATCH_INFO_FAIL:
      return { ...state, ...action.data };
    case types.TRANSFER_TOKEN_OK:
      return { ...state, ...action.data };
    case types.UPDATE_TOKEN_INFO:
      return { ...state, ...action.data };
    default:
      return state;
  }
};