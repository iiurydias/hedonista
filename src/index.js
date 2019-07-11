import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import Points from "./screens/Points";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PointProfile from "./screens/PointProfile";

const AppNavigator = createStackNavigator(
  {
    Home: PointProfile,
    Register: Register,
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
