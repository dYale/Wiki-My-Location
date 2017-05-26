import { MARKER } from '../actions/list';
import { GETMAPSUMMARY } from '../actions/map';

export default function map(state = [], action) {
  switch (action.type) {
    case MARKER:
      return action.markers;
    case GETMAPSUMMARY:
      return action.summary;
    default:
      return state;
  }
}