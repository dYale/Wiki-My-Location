import React, { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Location extends React.Component {

componentDidMount() {
  //navigator.geolocation.getCurrentPosition(
  //  (position) => {
  //    var location = JSON.stringify(position);
  //    location = JSON.parse(location);
  //    console.log(location, location.coords);
  //
  //    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude} &key=AIzaSyCp8gjZugbZbUH0tBkcifbQrOP6AQ1zy3E`, {method: "GET"})
  //      .then((response) => response.json()).then(x => {
  //      location = x.results[3].formatted_address;
  //      console.log(location);
  //      debugger;
  //      this.setState({location})
  //    });
  //  },
  //  (error) => alert(JSON.stringify(error)),
  //  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  //);
}

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.locate}>
          <Text style={styles.text}>Update</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.text}>{this.props.location}</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lemonchiffon'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  }
});
