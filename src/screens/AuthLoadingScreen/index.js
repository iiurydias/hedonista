import React, { Component, Fragment } from 'react';
import LinearGradient from 'react-native-linear-gradient'
import {
  ActivityIndicator,
  AsyncStorage,
  Text,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    setTimeout(()=>{
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    }, 1000)
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  // Render any loading content that you like here
  render() {
    const viewStyles = { 
        backgroundColor: '#7049f9',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    };
    
    const textStyles = {
      fontFamily: "MyriadPro",
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
     <LinearGradient colors={['#7049f9', '#9b6eff']} height='100%'>
      <View style={viewStyles}>
        <Text style={textStyles}>
          Logo aqui
        </Text>
      </View>
      </LinearGradient>
    );
  }
}

export default AuthLoadingScreen;