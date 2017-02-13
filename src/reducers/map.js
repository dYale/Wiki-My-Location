import { MARKER } from '../actions/location';

export default function map(state = [], action) {
  switch (action.type) {
    case MARKER:
      return action.markers;
    default:
      return state;
  }
}