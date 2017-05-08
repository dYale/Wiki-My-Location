import { combineReducers } from 'redux';
import counter from './counter';
import list from './list';
import articles from './articles';
import article from './article';
import browser from './browser';
import map from './map';


const rootReducer = combineReducers({
  counter,
  list,
  articles,
  browser,
  map,
  article
});

export default rootReducer;
