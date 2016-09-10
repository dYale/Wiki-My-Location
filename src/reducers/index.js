import { combineReducers } from 'redux';
import counter from './counter';
import location from './location'

const rootReducer = combineReducers({
  counter,
  location
});

export default rootReducer;
