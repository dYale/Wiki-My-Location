import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Article extends React.Component {

  render() {
    return (
        <TouchableHighlight
          onPress={() => this.props.getSummary(this.props, this.props.parentNavigation)}
          style={styles.container}>
          <Text>{this.props.title} - {this.props.dist}M</Text>
        </TouchableHighlight>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    height: 30,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  }
});
