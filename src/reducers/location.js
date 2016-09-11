import { LOCATION } from '../actions/location';

export default function location(state = "No Location Yet", action) {
  switch (action.type) {
    case LOCATION:
      var s =  navigator.geolocation.getCurrentPosition(
        (position) => {
          var location = JSON.stringify(position);
          location = JSON.parse(location);
          fetch(`https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&format=json&gscoord=${location.coords.latitude}|${location.coords.longitude}`).then((x) => x.json()).then(x => console.log(x.query.geosearch));
          var a = fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude} &key=[apikey]`, {method: "GET"})
            .then((response) => response.json()).then(x => {
            location = x.results[3].formatted_address;
            return location;
          });
          return a.then(x => x)
        },
        (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
      console.log(s);
    default:
      return state;
  }
}
