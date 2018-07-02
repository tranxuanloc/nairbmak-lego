import * as types from '../actions/actionTypes';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_TOKEN_INFO:
      return { ...state, ...action.data };
    default:
      return state;
  }
};