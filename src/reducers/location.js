import { LOCATION } from '../actions/location';

export default function location(state = "No Location Yet", action) {
  switch (action.type) {
    case LOCATION:
      return action.locationString;
    default:
      return state;
  }
}
