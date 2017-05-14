import React from 'react';
import { StyleSheet, View } from 'react-native';

import List from '../containers/List.js';

export default class ListWrapper extends React.Component {

  render() {
    return (
        <List parentNavigation={this.props.navigation}/>
    );
  }
}