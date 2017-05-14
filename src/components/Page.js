import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Page extends React.Component {

  render() {
    return (
      <Text>{this.props.summary}</Text>
    );
  };
}