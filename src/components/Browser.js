import React, { StyleSheet, Text, WebView, View } from 'react-native';


export default class Browser extends React.Component {

  renderError (stuff) {
    console.log(stuff);
  }

  render() {
    return (
      <View>
        <Text>Browser Here</Text>
        <WebView style={styles.container}
                 source={{uri:  'https://github.com/facebook/react-native'}}
                 style={{marginTop: 20}}
                 startInLoadingState={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
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
