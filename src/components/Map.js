import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';

const earthRadiusInKM = 6371;
const radiusInKM = 2;
const aspectRatio = 2;

export default class Map extends React.Component {


  constructor(props) {
    super(props);
    this.state = { region: {longitude: 0, latitude: 0, longitudeDelta: 0, latitudeDelta: 0}};
    navigator.geolocation.getCurrentPosition( (location) => {
      this.showRegion(location.coords)
    });
  }

  // you need to invoke this method to update your map's region.
  showRegion(locationCoords) {
    if (locationCoords && locationCoords.latitude && locationCoords.longitude) {
      var radiusInRad = radiusInKM / earthRadiusInKM;
      var longitudeDelta = this.rad2deg(radiusInRad / Math.cos(this.deg2rad(locationCoords.latitude)));
      var latitudeDelta = aspectRatio * this.rad2deg(radiusInRad);

      this.setState({
        region: { latitude: locationCoords.latitude, longitude: locationCoords.longitude, latitudeDelta: latitudeDelta, longitudeDelta: longitudeDelta }
      });
    }
  }

  deg2rad (angle) {
    return angle * 0.017453292519943295; // (angle / 180) * Math.PI;
  }

  rad2deg (angle) {
    return angle * 57.29577951308232; // angle / Math.PI * 180
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  render() {
    console.log(this.props);
    return (
        <MapView annotations={this.props.markers}
                 style={styles.map} showsUserLocation region={this.state.region} onRegionChange={this.onRegionChange}
        />
    );
  }

}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    margin: 10,
    borderColor: '#000000'
  }
});