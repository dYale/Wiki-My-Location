import { GETSUMMARY } from '../actions/article';

export default function page(state = [], action) {

  switch (action.type) {
    case GETSUMMARY:
      console.log(action);
      return action.summary;
    default:
      return state;
  }
}
