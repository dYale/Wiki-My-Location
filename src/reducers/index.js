import { combineReducers } from 'redux';
import counter from './counter';
import location from './location';
import articles from './articles';
import article from './article';
import browser from './browser';
import map from './map';


const rootReducer = combineReducers({
  counter,
  location,
  articles,
  map,
  article
});

export default rootReducer;
