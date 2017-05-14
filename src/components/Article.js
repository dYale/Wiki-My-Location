import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Article extends React.Component {

  render() {
    console.log(this.props.title);
    return (
        <TouchableHighlight
          onPress={() => {this.props.openBrowser(this.props.url); this.props.getSummary(this.props.pageid)}}
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
