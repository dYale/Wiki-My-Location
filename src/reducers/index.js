import { combineReducers } from "redux";
import counter from './counter';
import list from './list';
import articles from './articles';
import article from './article';
import browser from './browser';
import map from './map';
import page from './page';


export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    counter,
    list,
    articles,
    browser,
    map,
    article,
    page
  });
}
