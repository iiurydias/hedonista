import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Picker, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient'

class Register extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    pass: '',
    confirmPass: '',
    missName: false,
    missLastName: false,
    missEmail: false,
    missPass: false,
    missConfirmPass: false,
    nameFocused: false,
    lastNameFocused: false,
    emailFocused: false,
    passFocused: false,
    confirmPassFocused: false,
  }
  validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === '' || reg.test(this.state.email) === false) {
      this.setState({ missEmail: true })
    }
    else {
      this.setState({ missEmail: false })
    }
  }
  comparePasses = () => {
    if (this.state.pass === '' && this.state.confirmPass === '') {
      this.setState({ missPass: true })
      this.setState({ missConfirmPass: true })
    } else if (this.state.pass === '') {
      this.setState({ missPass: true })
    } else if (this.state.pass != this.state.confirmPass) {
      this.setState({ missPass: true })
      this.setState({ missConfirmPass: true })
    }
    else {
      this.setState({ missPass: false })
      this.setState({ missConfirmPass: false })
    }
  }
  validateName = () => {
    if (this.state.name === '' || (this.state.name.length) < 2 || this.state.name.includes(" ")) {
      this.setState({ missName: true })
    } else {
      this.setState({ missName: false })
    }
  }
  validateLastName = () => {
    if (this.state.lastName === '' || (this.state.lastName.length) < 2 || this.state.lastName.includes(" ")) {
      this.setState({ missLastName: true })
    } else {
      this.setState({ missLastName: false })
    }
  }
  setName = (text) => {
    this.setState({ missName: false })
    this.setState({ name: text });
  }
  setLastName = (text) => {
    this.setState({ missLastName: false })
    this.setState({ lastName: text });
  }
  setEmail = (text) => {
    this.setState({ missEmail: false })
    this.setState({ email: text });
  }
  setPass = (text) => {
    this.setState({ missPass: false })
    this.setState({ pass: text });
  }
  setConfirmPass = (text) => {
    this.setState({ missConfirmPass: false })
    this.setState({ confirmPass: text });
  }
  validation = () => {
    this.setState({ lastNameFocused: false })
    this.setState({ nameFocused: false })
    this.setState({ emailFocused: false })
    this.setState({ passFocused: false })
    this.setState({ confirmPassFocused: false })
    this.validateName();
    this.validateEmail();
    this.comparePasses();
    this.validateLastName();
  }
  handleNameFocus = () => this.setState({ nameFocused: true })
  handleNameBlur = () => this.setState({ nameFocused: false })
  handleLastNameFocus = () => this.setState({ lastNameFocused: true })
  handleLastNameBlur = () => this.setState({ lastNameFocused: false })
  handleEmailFocus = () => this.setState({ emailFocused: true })
  handleEmailBlur = () => this.setState({ emailFocused: false })
  handlePassFocus = () => this.setState({ passFocused: true })
  handlePassBlur = () => this.setState({ passFocused: false })
  handleConfirmPassFocus = () => this.setState({ confirmPassFocused: true })
  handleConfirmPassBlur = () => this.setState({ confirmPassFocused: false })
  async getData(){
    try {
      const response = await fetch('http://hedonista-com-br.hostoo.net/api/getHomeData?token='+this.props.navigation.getParam('token'),{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'test',
            password: 'test123',
        })
      });
      const result = await response.json();
      if(result.status){
        this.setState({dataRand: result.dados});
      }else{
        Alert.alert("Erro", result.message);
      }
    } catch (error) {
       Alert.alert("Erro", "Verifique sua conexão.");
    }
  } 
  render() {
    const { width: WIDTH } = Dimensions.get('window')
    return (
      <LinearGradient colors={['#7049f9', '#9b6eff']} height='100%'>
        <ScrollView keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false} style={styles.Container} contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.logoContainer}>
              <Icon name='user-alt' size={WIDTH * 0.08} color="#FFF" />
            </View>
            <View style={{ flexDirection: 'row', width: WIDTH - 70, justifyContent: 'space-between' }}>
              <View style={[styles.nameContainer, this.state.nameFocused ? { borderBottomColor: '#FFF' } : (this.state.missName ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#AAA' })]}>
                <View style={[styles.inputIconName, this.state.nameFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
                  <Icon name='user-alt' size={20} color={this.state.nameFocused ? '#FFF' : this.state.missName ? '#ff4349' : '#FFF'} />
                </View>
                <TextInput
                  onFocus={this.handleNameFocus}
                  onBlur={this.handleNameBlur}
                  style={[styles.inputName, this.state.nameFocused ? ({ opacity: 1 }, { color: '#FFF' }) : ({ opacity: 0.5 }, (this.state.missName ? { color: '#ff4349' } : { color: '#FFF' }))]}
                  placeholder='Nome'
                  value={this.state.name}
                  maxLength={30}
                  placeholderTextColor={this.state.nameFocused ? '#FFF' : this.state.missName ? '#ff4349' : '#FFF'}
                  onChangeText={this.setName}
                />
              </View>
              <View style={[{ width: '45%', borderBottomWidth: 1 }, this.state.lastNameFocused ? { borderBottomColor: '#FFF' } : (this.state.missLastName ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#AAA' })]}>
                <TextInput
                  onFocus={this.handleLastNameFocus}
                  onBlur={this.handleLastNameBlur}
                  style={[styles.input, { width: '100%' }, this.state.lastNameFocused ? ({ opacity: 1 }, { color: '#FFF' }) : ({ opacity: 0.5 }, (this.state.missLastName ? { color: '#ff4349' } : { color: '#FFF' }))]}
                  placeholder='Sobrenome'
                  value={this.state.lastName}
                  maxLength={30}
                  placeholderTextColor={this.state.lastNameFocused ? '#FFF' : this.state.missLastName ? '#ff4349' : '#FFF'}
                  onChangeText={this.setLastName}
                />
              </View>
            </View>
            <View style={[styles.inputContainer, this.state.emailFocused ? { borderBottomColor: '#FFF' } : (this.state.missEmail ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#AAA' })]}>
              <View style={[styles.inputIcon, this.state.emailFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
                <Icon name='at' size={20} color={this.state.emailFocused ? '#FFF' : this.state.missEmail ? '#ff4349' : '#FFF'} />
              </View>
              <TextInput
                onFocus={this.handleEmailFocus}
                onBlur={this.handleEmailBlur}
                style={[styles.input, this.state.emailFocused ? ({ opacity: 1 }, { color: '#FFF' }) : ({ opacity: 0.5 }, (this.state.missEmail ? { color: '#ff4349' } : { color: '#FFF' }))]}
                value={this.state.email}
                placeholder='Email'
                placeholderTextColor={this.state.emailFocused ? '#FFF' : this.state.missEmail ? '#ff4349' : '#FFF'}
                onChangeText={this.setEmail}
              />
            </View>
            <View style={[styles.inputContainer, this.state.passFocused ? { borderBottomColor: '#FFF' } : (this.state.missPass ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#AAA' })]}>
              <View style={[styles.inputIcon, this.state.passFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
                <Icon name='lock' size={20} color={this.state.passFocused ? '#FFF' : this.state.missPass ? '#ff4349' : '#FFF'} />
              </View>
              <TextInput
                onFocus={this.handlePassFocus}
                onBlur={this.handlePassBlur}
                secureTextEntry={true}
                style={[styles.input, this.state.passFocused ? ({ opacity: 1 }, { color: '#FFF' }) : ({ opacity: 0.5 }, (this.state.missPass ? { color: '#ff4349' } : { color: '#FFF' }))]}
                placeholder='Senha'
                maxLength={20}
                placeholderTextColor={this.state.passFocused ? '#FFF' : this.state.missPass ? '#ff4349' : '#FFF'}
                onChangeText={this.setPass}
              />
            </View>
            <View style={[styles.inputContainer, this.state.confirmPassFocused ? { borderBottomColor: '#FFF' } : (this.state.missConfirmPass ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#AAA' })]}>
              <View style={[styles.inputIcon, this.state.confirmPassFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
                <Icon name='lock' size={20} color={this.state.confirmPassFocused ? '#FFF' : this.state.missConfirmPass ? '#ff4349' : '#FFF'} />
              </View>
              <TextInput
                onFocus={this.handleConfirmPassFocus}
                onBlur={this.handleConfirmPassBlur}
                secureTextEntry={true}
                style={[styles.input, this.state.confirmPassFocused ? ({ opacity: 1 }, { color: '#FFF' }) : ({ opacity: 0.5 }, (this.state.missConfirmPass ? { color: '#ff4349' } : { color: '#FFF' }))]}
                placeholder='Confirmar senha'
                maxLength={20}
                placeholderTextColor={this.state.confirmPassFocused ? '#FFF' : this.state.missConfirmPass ? '#ff4349' : '#FFF'}
                onChangeText={this.setConfirmPass}
              />
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { this.validation() }}>
                  <Text style={styles.btnTxt}>Criar conta</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.createAccountTxt} >ou</Text>
              <View style={styles.createAccountContainer}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => { this.props.navigation.goBack() }}>
                  <Text style={styles.createAccountTxt}>Entrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}


export default Register;