import React, { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class Location extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Clicked: {this.props.counter} times</Text>

        <TouchableHighlight onPress={this.props.updateLocation}>
          <Text style={styles.text}>Update Location</Text>
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
