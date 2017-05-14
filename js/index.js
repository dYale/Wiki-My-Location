import React, { Component } from "react";
import { Text } from "react-native";
import { Provider, connect } from "react-redux";
import { TabNavigator, addNavigationHelpers } from "react-navigation";

import Routes from "./config/routes";

import getStore from "./store";

const AppNavigator = TabNavigator(Routes);

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

@connect(state => ({
    nav: state.nav
}))
class AppWithNavigationState extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const store = getStore(navReducer);

export default function WikiMyLocation() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
}
