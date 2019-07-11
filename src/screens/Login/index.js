import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
class Login extends Component {
  state = {
    showPass: true,
    valideEmail: false,
    emailFocused: false,
    passFocused: false,
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
  render() {
    return (
      <View style={styles.Container}>
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
            onChangeText={(text) => this.validate(text)}
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
            onChangeText={() => {}}
          />
          <View style={styles.eyeBtn}>
            <TouchableOpacity activeOpacity={0.9} onPress={this.showPass.bind(this)}>
              <Icon name={this.state.showPass ? 'eye' : 'eye-slash'} style={{ opacity: 0.5 }} size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { this.props.navigation.navigate('HomeScreen') }}>
              <Text style={styles.btnTxt}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.createAccountTxt} >ou</Text>
          <View style={styles.createAccountContainer}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => { this.props.navigation.navigate('Register')} }>
              <Text style={styles.createAccountTxt}>Criar nova conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


export default Login;