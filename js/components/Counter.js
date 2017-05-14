import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import List from '../containers/List.js';
import Articles from '../containers/Articles.js';
import Browser from '../containers/Browser.js';
import Map from '../containers/Map.js';
import {Tabs, Root} from '../config/router.js';

export default class Counter extends React.Component {
  render() {
    return (
      <Root />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    alignSelf: 'stretch'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  }
});
