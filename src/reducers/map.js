import { MARKER } from '../actions/location';

export default function map(state = [], action) {
  console.log("MAP", action, state)
  switch (action.type) {
    case MARKER:
      return action.markers;
    default:
      return state;
  }
}