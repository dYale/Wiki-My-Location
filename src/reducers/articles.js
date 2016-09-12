import { ARTICLES } from '../actions/location';

export default function articles(state = [], action) {
  console.log("ARTICLES", action);
  switch (action.type) {
    case ARTICLES:
      return action.articles;
    default:
      return state;
  }
}
