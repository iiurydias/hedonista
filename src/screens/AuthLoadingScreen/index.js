import React, { Component } from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import {
  AsyncStorage,
  Text,
  StatusBar,
  View
} from 'react-native';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    setTimeout(() => {
      this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }, 1000)
  }
  render() {
    const viewStyles = {
      backgroundColor: '#7049f9',
      height: '100%',
      width: '100%',
      padding: 80,
      justifyContent: "center",
      alignItems: "center"
    };

    const logo = {
      width: '100%',
      resizeMode: "contain"
    };
    const logoBox = {
      width: '100%',
      justifyContent: "center",
      alignItems: "center"
    };
    return (
      <LinearGradient colors={['#7049f9', '#9b6eff']} height='100%'>
        <StatusBar backgroundColor="#7049f9" />
        <View style={viewStyles}>
          <View style={logoBox}>
        <Image
              style={logo}
              source={require('../../assets/img/logo.png')}
            />
            </View>
        </View>
      </LinearGradient>
    );
  }
}

export default AuthLoadingScreen;