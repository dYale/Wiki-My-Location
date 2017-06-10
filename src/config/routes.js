import React from 'react';
import MapWrapper from "../components/MapWrapper";
import ListWrapper from "../components/ListWrapper";
import PageWrapper from "../components/PageWrapper";
import { StackNavigator } from "react-navigation";

import { Icon } from 'react-native-elements';

export const ListStack = StackNavigator({
  List: {
    screen: ListWrapper
  },
  Summary: {
    screen: PageWrapper,
    navigationOptions: ({ navigation }) => ({title: `${navigation.state.params.title}`})
  }
});

const Routes = {
  List: {
    screen: ListStack,
    navigationOptions: {
      tabBarLabel: 'List',
      tabBarIcon: ({ tintColor }) => <Icon name="view-list" size={35} color={tintColor}/>
    }
  },
  Map: {
    screen: MapWrapper,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon name="map" size={35} color={tintColor}/>
    }
  }
};


export default Routes;
