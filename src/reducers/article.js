import { OPENARTICLE } from '../actions/article';

export default function article(state = {url: "", title: ""}, action) {
  console.log("ARTICLE", action);

  switch (action.type) {
    case OPENARTICLE:
      return action.articles;
    default:
      return state;
  }
}
