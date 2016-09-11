import React, { StyleSheet, Text, WebView, View } from 'react-native';


export default class Browser extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: this.props.url}}
        startInLoadingState={true}
      />
    );
  }
}