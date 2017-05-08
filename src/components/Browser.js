import React, { StyleSheet, Text, WebView, View } from 'react-native';


export default class Browser extends React.Component {

  renderError (stuff) {
    console.log(stuff);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Browser Here</Text>
        <WebView style={styles.container}
                 source={{uri: this.props.url}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100
  },
  header: {
    backgroundColor: 'green',
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
