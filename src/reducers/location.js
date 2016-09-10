import { LOCATION } from '../actions/location';

export default function counter(state = 0, action) {
  switch (action.type) {
    case LOCATION:
      return navigator.geolocation.getCurrentPosition(
        (position) => {
          return position
        },
        (error) => alert(error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    default:
      return state;
  }
}
