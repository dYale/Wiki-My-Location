import { combineReducers } from 'redux';
import counter from './counter';
import location from './location'
import articles from './articles'

const rootReducer = combineReducers({
  counter,
  location,
  articles
});

export default rootReducer;
