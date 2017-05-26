import { MARKER } from '../actions/list';
import { GETMAPSUMMARY } from '../actions/map';

export default function map(state = {markers: [], summary: "Loading..."}, action) {
  switch (action.type) {
    case MARKER:
      return {...state, markers: action.markers};
    case GETMAPSUMMARY:
      return {...state, summary: action.summary};
    default:
      return state;
  }
}