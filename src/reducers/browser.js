import { OPENARTICLE } from '../actions/article';

export default function browser(state = {url: "http://www.dancorman.com", title: ""}, action) {
  switch (action.type) {
    case OPENARTICLE:
      return {url: action.url, title: "TODO"};
    default:
      return state;
  }
}

