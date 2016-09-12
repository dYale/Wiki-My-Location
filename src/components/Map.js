import React, { StyleSheet, Text, MapView, View } from 'react-native';

export default class Map extends React.Component {

  render() {
    console.log(this.props, "SDASD");
    return (
      <View>
        <MapView annotations={this.props.markers}
          style={styles.map}
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