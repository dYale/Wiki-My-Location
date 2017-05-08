import { LOCATION } from '../actions/list';

export default function list(state = "No Location Yet", action) {

  switch (action.type) {
    case LOCATION:
      return action.locationString;
    default:
      return state;
  }
}
