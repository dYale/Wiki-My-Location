import { combineReducers } from 'redux';
import counter from './counter';
import location from './location';
import articles from './articles';
import article from './article'


const rootReducer = combineReducers({
  counter,
  location,
  articles,
  article
});

export default rootReducer;
