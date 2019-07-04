import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
class Login extends Component {
  state = {
    showPass: true,
    valideEmail: false,
  }
  showPass = () => {
    if (this.state.showPass == false){
      this.setState({showPass: true})
    } else {
      this.setState({showPass: false})
    }
  }
  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({ valideEmail: false });
      return false;
    }
    else {
      this.setState({ valideEmail: true });
    }
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>LOGO HEDONISTA AQUI</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <Icon name='user-alt' size={20} color="#603DEB" />
          </View>
          <TextInput
            style={styles.emailInput}
            placeholder='Usuário'
            onChangeText={(text) => this.validate(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIcon}>
            <Icon name='lock' size={20} color="#603DEB" />
          </View>
          <TextInput
            style={styles.passInput}
            maxLength={20}
            secureTextEntry={this.state.showPass}
            placeholder='Senha'
            onChangeText={(text) => this.validate(text)}
          />
          <View style={styles.eyeBtn}>
            <TouchableOpacity activeOpacity={0.7} onPress={this.showPass.bind(this)}>
              <Icon name={this.state.showPass ? 'eye' : 'eye-slash'} style={{opacity: 0.5}} size={20} color="#603DEB" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.Button} activeOpacity={0.7} onPress={()=>{this.props.navigation.navigate('HomeScreen')}}>
              <Text style={styles.btnTxt}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.createAccountContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.createAccountTxt}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


export default Login;