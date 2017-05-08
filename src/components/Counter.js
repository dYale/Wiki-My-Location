import React, { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import List from '../containers/List.js';
import Articles from '../containers/Articles.js';
import Browser from '../containers/Browser.js';
import Map from '../containers/Map.js';

export default class Counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <List />
        <Browser />
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  }
});
