import { ARTICLES } from '../actions/list';

export default function articles(state = [], action) {
  console.log(action);
  switch (action.type) {
    case ARTICLES:
      return action.articles;
    default:
      return state;
  }
}
