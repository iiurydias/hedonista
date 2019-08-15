import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, ScrollView, AsyncStorage, Alert, StatusBar } from "react-native";
import LinearGradient from 'react-native-linear-gradient'
import Icon from "react-native-vector-icons/FontAwesome5";
import Loading from '../../components/Loading';
import api from '../../services/api';

class Login extends Component {
  state = {
    showPass: true,
    valideEmail: false,
    emailFocused: false,
    passFocused: false,
    userData: null,
    user: '',
    pass: '',
    wrongLogin: false,
    visibleModal: false,
    warning: ''
  }
  showPass = () => {
    if (this.state.showPass == false) {
      this.setState({ showPass: true })
    } else {
      this.setState({ showPass: false })
    }
  }
  handlePassFocus = () => this.setState({ passFocused: true })
  handlePassBlur = () => this.setState({ passFocused: false })
  handleEmailFocus = () => this.setState({ emailFocused: true })
  handleEmailBlur = () => this.setState({ emailFocused: false })
  _signInAsync = async () => {
    if (this.validate()) {
      this.setState({ visibleModal: true });
      await this.getData()
      this.setState({ visibleModal: false });
    }
  }
  validate = () => {
    if (this.state.user == "" || this.state.pass == "") {
      this.setState({ warning: 'Por favor, preencha os campos', wrongLogin: true })
      return false
    }
    return true
  }
  emailInputChange = (text) => {
    this.setState({ user: text })
  }
  passInputChange = (text) => {
    this.setState({ pass: text })
  }
  async getData() {
    try {
      const response = await fetch(api + "/login?email=" + this.state.user + "&password=" + this.state.pass)
      const result = await response.json();
      if (result.success) {
        await AsyncStorage.setItem('userToken', result.data.api_token);
        await AsyncStorage.setItem('userName', result.data.name.charAt(0).toUpperCase() + result.data.name.slice(1) + " " + result.data.lastName.charAt(0).toUpperCase() + result.data.lastName.slice(1));
        await AsyncStorage.setItem('userId', result.data.id.toString());
        this.props.navigation.navigate('App');
      } else {
        this.setState({ warning: 'Login inválido', wrongLogin: true })
      }
    } catch {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  render() {
    return (
      <LinearGradient colors={['#7049f9', '#9b6eff']} height='100%'>
        <StatusBar backgroundColor="#7049f9" />
        <Loading visible={this.state.visibleModal} />
        <ScrollView keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false} style={styles.Container} contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>LOGO HEDONISTA AQUI</Text>
          </View>
          <View style={[styles.inputContainer, this.state.emailFocused ? { borderBottomColor: '#FFF' } : { borderBottomColor: '#AAA' }]}>
            <View style={[styles.inputIcon, this.state.emailFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
              <Icon name='at' size={20} color="#FFF" />
            </View>
            <TextInput
              onFocus={this.handleEmailFocus}
              onBlur={this.handleEmailBlur}
              style={[styles.emailInput, , this.state.emailFocused ? { opacity: 1 } : { opacity: 0.5 }]}
              placeholder='Email'
              placeholderTextColor='#FFF'
              onChangeText={this.emailInputChange}
            />
          </View>
          <View style={[styles.inputContainer, this.state.passFocused ? { borderBottomColor: '#FFF' } : { borderBottomColor: '#AAA' }]}>
            <View style={[styles.inputIcon, this.state.passFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
              <Icon name='lock' size={20} color="#FFF" />
            </View>
            <TextInput
              onFocus={this.handlePassFocus}
              onBlur={this.handlePassBlur}
              style={[styles.passInput, this.state.passFocused ? { opacity: 1 } : { opacity: 0.5 }]}
              maxLength={20}
              secureTextEntry={this.state.showPass}
              placeholder='Senha'
              placeholderTextColor='#FFF'
              onChangeText={this.passInputChange}
            />
            <View style={styles.eyeBtn}>
              <TouchableOpacity activeOpacity={0.9} onPress={this.showPass.bind(this)}>
                <Icon name={this.state.showPass ? 'eye' : 'eye-slash'} style={{ opacity: 0.5 }} size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
          {this.state.wrongLogin &&
            <Text style={styles.invalid}>{this.state.warning}</Text>
          }
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={this._signInAsync}>
                <Text style={styles.btnTxt}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.createAccountTxt} >ou</Text>
            <View style={styles.createAccountContainer}>
              <TouchableOpacity activeOpacity={0.9} onPress={() => { this.props.navigation.navigate('Register') }}>
                <Text style={styles.createAccountTxt}>Criar nova conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}


export default Login;