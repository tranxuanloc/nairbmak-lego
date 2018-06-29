import * as types from '../actions/actionTypes';

const defaultState = {text: ''};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.SAMPLE_ACTION:
      console.log(action.extra);
      alert(action.data.text);
      return { ...state, ...action.data };
    default:
      return state;
  }
};