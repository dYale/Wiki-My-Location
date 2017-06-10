export const LOCATION = 'LOCATION';
export const ARTICLES = "ARTICLE";
export const MARKER = "MARKER";

export function locate() {
  return function (dispatch) {
    getLocationData(dispatch);
  };
}

function newLocation(locationString) {
  return {
    type: LOCATION,
    locationString
  };
}

function markerMap(markers) {
  return {
    type: MARKER,
    markers
  };
}

function newArticles(articles) {
  return {
    type: ARTICLES,
    articles
  }
}

const getLocationData = function (dispatch) {
  let articles = [];
  navigator.geolocation.getCurrentPosition(
    (location) => {
      fetch(`https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&format=json&gscoord=${location.coords.latitude}|${location.coords.longitude}`)
        .then((x) => x.json())
        .then(x => {
          articles = x.query.geosearch;
          return dispatch(newArticles(articles))
        })
        .then(() => fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude} &key=AIzaSyCp8gjZugbZbUH0tBkcifbQrOP6AQ1zy3E`, {method: "GET"})
          .then((response) => response.json())
          .then(x => {
            const locationString = x.results[3].formatted_address;
            dispatch(newLocation(locationString));
          }))
        .then(() => {
          dispatch(markerMap(_formatForMap(articles, location.coords)))
        });
    },
    //TODO: add error handing reducer
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
};


const _formatForMap = function (arr, coords) {
  return arr.map((article) => {
    return {
      coordinates: {
        latitude: article.lat,
        longitude: article.lon
      },
      title: article.title,
      id: article.pageid
    }
  })
};