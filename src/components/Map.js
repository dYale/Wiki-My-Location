import React, { StyleSheet, Text, MapView, View } from 'react-native';

export default class Map extends React.Component {
  render() {
    return (
      <View>
        <MapView
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
    borderWidth: 1,
    borderColor: '#000000'
  }
});