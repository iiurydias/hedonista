import React, { Component } from "react";
import Points from "./screens/Points";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PointProfile from "./screens/PointProfile";
import SubcategoryList from "./screens/SubcategoryList";
import NewSubcategory from "./screens/NewSubcategory";

import AuthLoadingScreen from "./screens/AuthLoadingScreen";

import NewPoint from "./screens/NewPoint";
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';


const AppStack = createStackNavigator(
  {
    Home: Home,
    Points: Points,
    PointProfile, PointProfile,
    NewPoint: NewPoint,
    SubcategoryList: SubcategoryList,
    NewSubcategory: NewSubcategory
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