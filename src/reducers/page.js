import { GETSUMMARY } from '../actions/article';

export default function page(state = [], action) {

  switch (action.type) {
    case GETSUMMARY:
      return action.summary;
    default:
      return state;
  }
}
