import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import blockchain from './blockchain.reducer';
import ui from './ui.reducer';
import sample from './sample.reducer';

export default combineReducers({
  routing: routerReducer,
  blockchain,
  ui,
  sample
});