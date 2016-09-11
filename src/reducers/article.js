import { OPENARTICLE } from '../actions/article';

export default function articles(state = {url: "", title: ""}, action) {
  switch (action.type) {
    case OPENARTICLE:
      return action.articles;
    default:
      return state;
  }
}
