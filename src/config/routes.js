import React from 'react';
import MapWrapper from "../components/MapWrapper";
import ListWrapper from "../components/ListWrapper";

import { Icon } from 'react-native-elements';

const Routes = {
  ListWrapper: {
    screen: ListWrapper,
    navigationOptions: {
      tabBarLabel: 'ListWrapper',
      tabBarIcon: ({ tintColor }) => <Icon name="view-list" size={35} color={tintColor}/>
    }
  },
  MapWrapper: {
    screen: MapWrapper,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon name="map" size={35} color={tintColor}/>
    }
  }
};

export default Routes;
