import React, { Component } from "react";
import Points from "./screens/Points";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PointProfile from "./screens/PointProfile";
import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";

import AuthLoadingScreen from "./screens/AuthLoadingScreen";

import NewPoint from "./screens/NewPoint";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator(
  {
    Home: Home,
    Points: Points,
    PointProfile, PointProfile,
    NewPoint: NewPoint
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);
const AuthStack = createStackNavigator(
  {
    SignIn: Login,
    Register: Register
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));