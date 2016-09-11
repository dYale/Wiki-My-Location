import React, { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Location from '../containers/Location.js';
import Articles from '../containers/Articles.js';


export default class Counter extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Location />

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
