import React, { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Article extends React.Component {

  render() {
    console.log(this.props)
    return (
      <TouchableHighlight url={this.props.url} onPress={this.props.openBrowser}
                          style={styles.container}>
        <Text>{this.props.title}</Text>
      </TouchableHighlight>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  }
});
