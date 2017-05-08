import React, { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Article extends React.Component {

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => {this.props.openBrowser(this.props.url); this.props.getSummary(this.props.pageid)}}
                            style={styles.container}>
          <Text>{this.props.title} - {this.props.dist}M</Text>
        </TouchableHighlight>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    margin: 5,
    height: 30
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  }
});
