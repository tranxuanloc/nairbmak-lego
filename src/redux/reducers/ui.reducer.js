import * as types from '../actions/actionTypes';

const defaultState = {
  status: 'init'
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_PAGE_STATUS:
      return { ...state, status: action.data };
    default:
      return state;
  }
};
