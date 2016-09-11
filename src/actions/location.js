export const LOCATION = 'LOCATION';
export const ARTICLES = "ARTICLE";

export function locate() {

  return function (dispatch) {
    getLocationData(dispatch);
  };
}

function newLocation (locationString) {
  return {
    type: LOCATION,
    locationString
  };
}

function newArticles (articles){
  return {
    type: ARTICLES,
    articles
  }
}


const getLocationData = function(dispatch) {
    navigator.geolocation.getCurrentPosition(
    (location) => {
      fetch(`https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&format=json&gscoord=${location.coords.latitude}|${location.coords.longitude}`)
        .then((x) => x.json())
        .then(x => dispatch(newArticles(x.query.geosearch)))
        .then( () => fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude} &key=[key]`, {method: "GET"})
        .then((response) => response.json()).then(x => {
          location = x.results[3].formatted_address;
          dispatch(newLocation(location));
        }));
    },
      //TODO: add error handing reducer
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
};

