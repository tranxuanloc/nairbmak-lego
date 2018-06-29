import * as types from './actionTypes';

export const sampleAction = (param) => {
  return dispatch => {
    console.log(param);
    dispatch({ type: types.SAMPLE_ACTION, data: {text: param}, extra: 'More info' });
  };
};