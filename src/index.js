import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import Points from "./screens/Points";
import Home from "./screens/Home";
import Login from "./screens/Login";

const AppNavigator = createStackNavigator(
  {
    Home: Login,
    HomeScreen: Home,
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
