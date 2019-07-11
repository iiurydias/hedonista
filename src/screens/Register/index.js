import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Picker } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
class Register extends Component {
  state = {
    name: '',
    email: '',
    pass: '',
    confirmPass: '',
    gender: 'masculino',
    missName: false,
    missEmail: false,
    missPass: false,
    missConfirmPass: false,
    nameFocused: false,
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
    }else if (this.state.pass === '') {
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
    if (this.state.name === '' || (this.state.name.length) < 2) {
      this.setState({ missName: true })
    } else {
      this.setState({ missName: false })
    }
  }
  setName = (text) => {
    this.setState({ missName: false })
    this.setState({ name: text });
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
    this.setState({ nameFocused: false })
    this.setState({ emailFocused: false })
    this.setState({ passFocused: false })
    this.setState({ confirmPassFocused: false })
    this.validateName();
    this.validateEmail();
    this.comparePasses();
  }
  handleNameFocus = () => this.setState({ nameFocused: true })
  handleNameBlur = () => this.setState({ nameFocused: false })
  handleEmailFocus = () => this.setState({ emailFocused: true })
  handleEmailBlur = () => this.setState({ emailFocused: false })
  handlePassFocus = () => this.setState({ passFocused: true })
  handlePassBlur = () => this.setState({ passFocused: false })
  handleConfirmPassFocus = () => this.setState({ confirmPassFocused: true })
  handleConfirmPassBlur = () => this.setState({ confirmPassFocused: false })
  render() {
    const { width: WIDTH } = Dimensions.get('window')
    return (
      <View style={styles.Container}>
        <View style={styles.logoContainer}>
          <Icon name='user-alt' size={WIDTH * 0.08} color="#FFF" />
        </View>
        <View style={[styles.inputContainer, this.state.nameFocused ? { borderBottomColor: '#FFF' } : (this.state.missName ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#AAA' })]}>
          <View style={[styles.inputIcon, this.state.nameFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
            <Icon name='user-alt' size={20} color={this.state.nameFocused ? '#FFF' : this.state.missName ? '#ff4349' : '#FFF'} />
          </View>
          <TextInput
            onFocus={this.handleNameFocus}
            onBlur={this.handleNameBlur}
            style={[styles.input, this.state.nameFocused ? ({ opacity: 1 }, { color: '#FFF' }) : ({ opacity: 0.5 }, (this.state.missName ? { color: '#ff4349' } : { color: '#FFF' }))]}
            placeholder='Nome'
            maxLength={30}
            placeholderTextColor={this.state.nameFocused ? '#FFF' : this.state.missName ? '#ff4349' : '#FFF'}
            onChangeText={this.setName}
          />
        </View>
        <View style={[styles.inputContainer, this.state.emailFocused ? { borderBottomColor: '#FFF' } : (this.state.missEmail ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#AAA' })]}>
          <View style={[styles.inputIcon, this.state.emailFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
            <Icon name='at' size={20} color={this.state.emailFocused ? '#FFF' : this.state.missEmail ? '#ff4349' : '#FFF'} />
          </View>
          <TextInput
            onFocus={this.handleEmailFocus}
            onBlur={this.handleEmailBlur}
            style={[styles.input, this.state.emailFocused ? ({ opacity: 1 }, { color: '#FFF' }) : ({ opacity: 0.5 }, (this.state.missEmail ? { color: '#ff4349' } : { color: '#FFF' }))]}
            placeholder='Email'
            placeholderTextColor={this.state.emailFocused ? '#FFF' : this.state.missEmail ? '#ff4349' : '#FFF'}
            onChangeText={this.setEmail}
          />
        </View>
        <View style={[styles.inputContainer,  { borderBottomColor: '#AAA'}]}>
          <View style={[styles.inputIcon, {opacity: 0.5} ]}>
            <Icon name='male' size={22} color={'#FFF'}/>
          </View>
          <Picker
            selectedValue={this.state.gender}
            style={[styles.input, {color:'#FFF', fontFamily: "MyriadPro", fontSize: 15,marginLeft: -20, transform: [
              { scaleX: 0.8 }, 
              { scaleY: 0.8 },
           ]}]}
            
            onValueChange={(itemValue) =>
              this.setState({gender: itemValue})
            }>
              <Picker.Item label="Masculino" value="masculino" />
              <Picker.Item label="Feminino" value="feminino" />
          </Picker>
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
            <TouchableOpacity activeOpacity={0.9} onPress={() => { this.props.navigation.navigate('Home') }}>
              <Text style={styles.createAccountTxt}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}


export default Register;