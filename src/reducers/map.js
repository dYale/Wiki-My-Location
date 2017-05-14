import { MARKER } from '../actions/list';

export default function map(state = [], action) {
  switch (action.type) {
    case MARKER:
      return action.markers;
    default:
      return state;
  }
}