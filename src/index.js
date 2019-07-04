import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import Points from "./screens/Points";
import Home from "./screens/Home";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Points: Points,
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
