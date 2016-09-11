export const LOCATION = 'LOCATION';

export function locate() {

  return function (dispatch) {
    getLocationData(dispatch);
  };
}

function newLocation (locationString, articles) {
  return {
    type: LOCATION,
    locationString,
    articles
  };
}


const getLocationData = function(dispatch) {
    navigator.geolocation.getCurrentPosition(
    (location) => {
      let articles = [];
      fetch(`https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&format=json&gscoord=${location.coords.latitude}|${location.coords.longitude}`)
        .then((x) => x.json())
        .then(x => articles = x.query.geosearch)
        .then( () => fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude} &key=[key]`, {method: "GET"})
        .then((response) => response.json()).then(x => {
          location = x.results[3].formatted_address;
          dispatch(newLocation(location, articles));
        }));
    },
      //TODO: add error handing reducer
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
};

