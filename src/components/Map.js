import React, { StyleSheet, Text, MapView, View } from 'react-native';

const earthRadiusInKM = 6371;
const radiusInKM = 2;
const aspectRatio = 2;

export default class Map extends React.Component {


  constructor(props) {
    super(props);
    this.state = { region: {longitude: 0, latitude: 0}};
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

  render() {
    return (
      <View>
        <MapView annotations={this.props.markers}
          style={styles.map} showsUserLocation region={this.state.region}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  map: {
    height: 150,
    width: 150,
    margin: 10,
    borderColor: '#000000'
  }
});