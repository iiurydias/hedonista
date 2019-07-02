import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Points from "./screens/Points";
import Home from "./screens/Home";

const StackPoints = createStackNavigator({
  Points: {
    screen: Points,
    navigationOptions: {
      header: null
    }
  }
});
const StackHome = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  }
});

const Tab = createBottomTabNavigator(
  {
    Initial: {
      screen: StackHome,
      navigationOptions: {
        tabBarLabel: "Início",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={25} />
        )
      }
   },
      //Categories:{
        // screen: StackPoints,
       //navigationOptions:{
        //tabBarLabel: 'Categorias',
        //tabBarIcon: ({tintColor}) =>( <Icon name="th" color={tintColor} size={20} /> ),
       //}
     //},
     //Buscar:{
     // screen: StackPoints,
       //navigationOptions:{
        //tabBarLabel: 'Buscar',
        //tabBarIcon: ({tintColor}) =>( <Icon name="search" color={tintColor} size={20} /> ),
      // }
     //},
     Buscar:{
      screen: StackPoints,
       navigationOptions:{
        tabBarLabel: "Adicionar",
        tabBarIcon: ({tintColor}) =>( <Icon name="plus-circle" color={tintColor} size={20} /> ),
       }
     },
     Favoritos:{
      screen: StackPoints,
       navigationOptions:{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({tintColor}) =>( <Icon name="heart" color={tintColor} size={20} /> ),
       }
     },
    },
  {
    tabBarOptions: {
      inactiveTintColor: "#828282",
      activeTintColor: "#623CEA",
      indicatorStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);

const AppDrawer = createDrawerNavigator(
  {
    Points: {
      screen: Tab
    }
  },
);

const App = createAppContainer(AppDrawer);

export default class Rota extends Component {
  render() {
    return (
    <App />
    )
  }
}
