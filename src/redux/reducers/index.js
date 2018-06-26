import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import blockchain from './blockchain.reducer';

export default combineReducers({
  routing: routerReducer,
  blockchain
});