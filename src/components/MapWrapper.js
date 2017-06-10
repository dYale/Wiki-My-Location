import React from 'react';
import { StyleSheet, View } from 'react-native';
import Map from '../containers/Map.js';

export default class MapWrapper extends React.Component {

  render() {
    return (
      <Map />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});