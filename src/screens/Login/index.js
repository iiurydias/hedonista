import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, ScrollView, AsyncStorage, Alert, StatusBar, Image } from "react-native";
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
    if (this.validateEmail() && this.validatePass()) {
      this.setState({ visibleModal: true });
      await this.getData()
      this.setState({ visibleModal: false });
    }
  }
  validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.user == "" || reg.test(this.state.user) === false) {
      this.setState({ warning: 'Por favor, preencha com um email válido', wrongLogin: true })
      return false
    }
    return true
  }
  validatePass = () => {
    if (this.state.pass == "") {
      this.setState({ warning: 'Por favor, insira sua senha, antes de prosseguir', wrongLogin: true })
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
  _forgotpass = async () => {
    if (this.validateEmail()) {
      Alert.alert(
        'Esqueci minha senha',
        'Deseja enviar um email de recuperação de senha para '+ this.state.user+'?',
        [
          {
            text: 'Cancelar',
          },
          {text: 'Enviar', onPress: async ()  => {
            this.setState({ visibleModal: true });
            await this.sendEmail()
            this.setState({ visibleModal: false });
          }},
        ]
      );
    }
  }
  sendEmail = async () => {
    let data = new FormData();
    data.append("email", this.state.user);
    try {
      const response = await fetch(api + '/sendmail', {
        method: 'POST',
        body: data
      });
      const result = await response.json();
      if (result.success) {
        Alert.alert("Sucesso", "Email enviado, verifique sua caixa de entrada para a recuperação de sua senha.")
      } else {
        Alert.alert("Erro", "Nenhuma conta encontrada com esse email.");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
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
          <View style={styles.logoBox}>
        <Image
              style={styles.logo}
              source={require('../../assets/img/logo.png')}
            />
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
              autoCapitalize = 'none'
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
              autoCapitalize = 'none'
              placeholderTextColor='#FFF'
              onChangeText={this.passInputChange}
            />
            <View style={styles.eyeBtn}>
              <TouchableOpacity activeOpacity={0.9} onPress={this.showPass.bind(this)}>
                <Icon name={this.state.showPass ? 'eye' : 'eye-slash'} style={{ opacity: 0.5 }} size={20} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.inputContainer, {borderBottomWidth: 0, margin: 0}]}>
          <TouchableOpacity style={{width: '100%', alignItems: 'flex-end'}} activeOpacity={0.9} onPress={this._forgotpass}>
                <Text style={styles.createAccountTxt}> Esqueci minha senha</Text>
              </TouchableOpacity>
          </View>
          {this.state.wrongLogin &&
            <Text style={styles.invalid} textAlign='center'>{this.state.warning}</Text>
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