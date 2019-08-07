import React, { Component, Fragment } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Alert, Picker, ScrollView, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../../components/Header";
import Loading from '../../components/Loading';


class NewSubcategory extends Component {
  state = {
    name: '',
    missName: false,
    nameFocused: false,
    categoryId: '',
    token: '',
    visibleModal: false
  }
  validateName = () => {
    if (this.state.name === '' || (this.state.name.length) < 2) {
      this.setState({ missName: true })
      return false
    } else {
      this.setState({ missName: false })
      return true
    }
  }
  setName = (text) => {
    this.setState({ missName: false })
    this.setState({ name: text });
  }
  validation = () => {
    this.setState({ nameFocused: false })
    if (this.validateName()) {
      this._create()
    }
  }
  handleNameFocus = () => this.setState({ nameFocused: true })
  handleNameBlur = () => this.setState({ nameFocused: false })
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const categoryId = this.props.navigation.getParam('categoryId');
    const token = this.props.navigation.getParam('token');
    this.setState({ categoryId: categoryId, token: token });
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  _createSubcategory = async () => {
    try {
      const response = await fetch('http://hedonista-com-br.hostoo.net/api/createSubcategory?token=' + this.props.navigation.getParam('token') + '&name=' + this.state.name + '&category_id=' + this.state.categoryId, {
        method: 'POST'
      });
      const result = await response.json();
      if (result.success) {
        this.props.navigation.goBack()
      } else {
        Alert.alert("Erro", "Falha interna");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  _create = async () => {
    this.setState({ visibleModal: true });
    await this._createSubcategory();
    this.setState({ visibleModal: false });
  }
  render() {

    return (
      <Fragment>
        <Loading visible={this.state.visibleModal} />
        <Header
          left={<TouchableOpacity activeOpacity={0.7} onPress={this.handleBackPress} ><Icon name="arrow-left" color="#fff" size={25} /></TouchableOpacity>}
          center={
            <Text style={{ fontFamily: "MyriadPro", color: "#FFF" }}>
              NOVO PONTO
            </Text>
          }
        />
        <ScrollView style={{ backgroundColor: "#7049f9" }} contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
          <View style={{ padding: 20 }}>
            <Text style={[styles.Greetings, { fontWeight: 'bold' }]} >Criar uma nova </Text>
            <Text style={styles.Greetings} >subcategoria:</Text>
          </View>
          <View style={styles.MainContainer}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={[styles.inputContainer, this.state.nameFocused ? { borderBottomColor: '#7049f9' } : (this.state.missName ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#7049f9' })]}>
                <View style={[styles.inputIcon, this.state.nameFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
                  <Icon name='stream' size={20} color={this.state.nameFocused ? '#7049f9' : this.state.missName ? '#ff4349' : '#7049f9'} />
                </View>
                <TextInput
                  onFocus={this.handleNameFocus}
                  onBlur={this.handleNameBlur}
                  style={[styles.input, this.state.nameFocused ? ({ opacity: 1 }, { color: '#7049f9' }) : ({ opacity: 0.5 }, (this.state.missName ? { color: '#ff4349' } : { color: '#7049f9' }))]}
                  placeholder='Nome da subcategoria'
                  maxLength={50}
                  value={this.state.name}
                  placeholderTextColor={this.state.nameFocused ? '#7049f9' : this.state.missName ? '#ff4349' : '#7049f9'}
                  onChangeText={this.setName}
                />
              </View>
              <View style={styles.bottomContainer}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { this.validation() }}>
                    <Text style={styles.btnTxt}>Criar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Fragment >

    );
  }
}


export default NewSubcategory;