import React, { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Articles from '../containers/Articles.js';


export default class List extends React.Component {

  componentDidMount() {
    this.props.locate();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight style={styles.button} onPress={this.props.locate}>
            <Text style={styles.text}>Update</Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={styles.text}>{this.props.location}</Text>
          </TouchableHighlight>
          <Articles />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lemonchiffon'
  },
  header: {
    backgroundColor: '#CEF2E0',
    flex: 0.9
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  },
  button: {
    backgroundColor: 'pink'
  }
});
