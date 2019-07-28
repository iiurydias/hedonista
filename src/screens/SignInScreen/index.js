import React,{ Component, Fragment }from 'react';
import { View, Button, TextInput, TouchableOpacity, ScrollView } from "react-native";
import {
    AsyncStorage,
  } from 'react-native';
class SignInScreen extends Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }
  export default SignInScreen;
  
  // More code like OtherScreen omitted for brevity