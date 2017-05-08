import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Map from '../components/Map';
import List from '../components/List';


export const ListStack = StackNavigator({
  List: {
    screen: List
  }
});

export const Tabs = TabNavigator({
  List: {
    screen: ListStack,
    navigationOptions: {
      tabBarLabel: 'List',
      tabBarIcon: ({ tintColor }) => <Icon name="view-list" size={35} color={tintColor}/>
    }
  },
  Profile: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon name="map" size={35} color={tintColor}/>
    }
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs
  }
}, {
  mode: 'modal',
  headerMode: 'none'
});