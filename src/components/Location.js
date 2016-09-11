import React, { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Location extends React.Component {

componentDidMount() {
  this.props.locate();
}

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.locate}>
          <Text style={styles.text}>Update</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.text}>{this.props.location}</Text>
        </TouchableHighlight>

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
