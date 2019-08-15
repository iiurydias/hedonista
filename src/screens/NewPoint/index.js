import React, { Component, Fragment } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Alert, Picker, ScrollView, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../../components/Header";
import Loading from '../../components/Loading';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GeoCoder from 'react-native-geocoding'
import MapView from "react-native-maps";
import MapMarker from "../../components/MapMarker";

GeoCoder.init('AIzaSyA-H7zGSuNzyCZDW5pPeegOgykilPgmMug')
class NewPoint extends Component {
  state = {
    name: '',
    pickerValue: 'current_location',
    missName: false,
    nameFocused: false,
    searchFocused: false,
    clearButtonEnabled: false,
    markCurrentLocationEnabled: true,
    typeAddressEnabled: false,
    markOnMapEnabled: false,
    myCurrentAddress: 'Meu endereço atual',
    myLocation: null,
    visibleModal: false,

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
  async createPoint() {
    let data = new FormData();
    data.append("name", this.state.name);
    data.append("subcategory_id", parseInt(this.props.navigation.getParam('subcategoryId')));
    data.append("user_id", parseInt(this.props.navigation.getParam('userId')));
    data.append("address", this.state.myCurrentAddress);
    data.append("latitude", this.state.myLocation.latitude);
    data.append("longitude", this.state.myLocation.longitude);
    try {
      const response = await fetch(api + '/point', {
        method: 'POST',
        headers: {
          token: this.props.navigation.getParam('token')
        },
        body: data
      });
      const result = await response.json();
      if (result.success) {
        this.setState({ data: result.data });
        this.props.navigation.goBack()
      } else {
        Alert.alert("Erro", result.message);
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  _postPoint = async () => {
    if (this.validation()) {
      this.setState({ visibleModal: true });
      await this.createPoint();
      this.setState({ visibleModal: false });
    }
  }
  setName = (text) => {
    this.setState({ missName: false })
    this.setState({ name: text });
  }
  validation = () => {
    this.setState({ nameFocused: false })
    if (this.validateName()) {
      if (this.state.myCurrentAddress == "") {
        Alert.alert("Erro", "Selecione um endereço válido")
        return false
      }
      return true
    }
    return false
  }
  handleLocationSelected = (data, { geometry }) => {
    this.setState({
      myCurrentAddress: data.description,
      myLocation: { latitude: geometry.location.lat, longitude: geometry.location.lng, latitudeDelta: 0.003, longitudeDelta: 0.003 },
      clearButtonEnabled: true
    })
  }
  clearInput = () => {
    this.setState({ clearButtonEnabled: false })
    this.googlePlacesAutocomplete._handleChangeText('');
  }
  addressController = (itemValue) => {
    this.setState({ pickerValue: itemValue });
    this.setState({ clearButtonEnabled: false })
    switch (itemValue) {
      case 'type_address':
        this.setState({ typeAddressEnabled: true });
        this.setState({ markCurrentLocationEnabled: false });
        this.setState({ markOnMapEnabled: false });
        this.setState({ myCurrentAddress: "" });
        break;
      case 'current_location':
        this.setState({ typeAddressEnabled: false });
        this.setState({ markCurrentLocationEnabled: true });
        this.setState({ markOnMapEnabled: false });
        this.setState({ myCurrentAddress: "" });
        break;
      case 'mark_on_map':
        this.setState({ typeAddressEnabled: false });
        this.setState({ markCurrentLocationEnabled: false });
        this.setState({ markOnMapEnabled: true });
        this.setState({ myCurrentAddress: "" });
        break;
      default:
        this.setState({ typeAddressEnabled: false })
        this.setState({ markCurrentLocationEnabled: false })
        this.setState({ markOnMapEnabled: false })
    }
  }
  handleNameFocus = () => this.setState({ nameFocused: true })
  handleNameBlur = () => this.setState({ nameFocused: false })
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const origin = this.props.navigation.getParam('origin');
    GeoCoder.from({ latitude: origin.latitude, longitude: origin.longitude }).then((response) => {
      const address = response.results[0].formatted_address;
      this.setState({ myCurrentAddress: address, myLocation: origin })
    }).catch(() => {
      this.setState({ myCurrentAddress: "Erro ao pegar seu endereço atual" })
    });
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  onRegionChange = (region) => {
    this.setState({ myLocation: region })
    GeoCoder.from(region).then((response) => {
      const address = response.results[0].formatted_address;
      this.setState({ myCurrentAddress: address })
      this.setState({ myCurrentAddress: address })
    }).catch(() => {
      this.setState({ myCurrentAddress: "Erro ao pegar seu endereço atual" })
    });
  }
  render() {
    const { width: WIDTH } = Dimensions.get('window')
    const searchFocused = this.state.searchFocused;
    return (
      <Fragment>
        <Header
          left={<TouchableOpacity activeOpacity={0.7} onPress={this.handleBackPress} ><Icon name="arrow-left" color="#fff" size={25} /></TouchableOpacity>}
        />
        <Loading visible={this.state.visibleModal} />
        <ScrollView style={{ backgroundColor: "#7049f9", flex: 1 }} contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
          <View style={{ padding: 20 }}>
            <Text style={[styles.Greetings, { fontWeight: 'bold' }]} >Criar um </Text>
            <Text style={styles.Greetings} >novo ponto:</Text>
          </View>
          <View style={styles.MainContainer}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View style={[styles.inputContainer, this.state.nameFocused ? { borderBottomColor: '#7049f9' } : (this.state.missName ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#7049f9' })]}>
                <View style={[styles.inputIcon, this.state.nameFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
                  <Icon name='map-marker-alt' size={20} color={this.state.nameFocused ? '#7049f9' : this.state.missName ? '#ff4349' : '#7049f9'} />
                </View>
                <TextInput
                  onFocus={this.handleNameFocus}
                  onBlur={this.handleNameBlur}
                  style={[styles.input, this.state.nameFocused ? ({ opacity: 1 }, { color: '#7049f9' }) : ({ opacity: 0.5 }, (this.state.missName ? { color: '#ff4349' } : { color: '#7049f9' }))]}
                  placeholder='Nome do ponto'
                  maxLength={50}
                  value={this.state.name}
                  placeholderTextColor={this.state.nameFocused ? '#7049f9' : this.state.missName ? '#ff4349' : '#7049f9'}
                  onChangeText={this.setName}
                />
              </View>
              <View style={[styles.inputContainer, { borderBottomColor: '#7049f9' }]}>
                <View style={[styles.inputIcon, { opacity: 0.5 }]}>
                  <Icon name='map-marked-alt' size={22} color={'#7049f9'} />
                </View>
                <Picker
                  selectedValue={this.state.pickerValue}
                  style={[styles.input, {
                    color: '#7049f9', fontFamily: "MyriadPro", fontSize: 15, marginLeft: -20, transform: [
                      { scaleX: 0.8 },
                      { scaleY: 0.8 },
                    ]
                  }]}

                  onValueChange={this.addressController}>
                  <Picker.Item label="Minha localização atual" value="current_location" />
                  <Picker.Item label="Digitar endereço" value="type_address" />
                  <Picker.Item label="Marcar no mapa" value="mark_on_map" />
                </Picker>
              </View>
              {this.state.markCurrentLocationEnabled &&
                <View style={[styles.inputContainer, { borderBottomColor: '#7049f9' }]}>
                  <Text style={[styles.input, { opacity: 1 }, { color: '#7049f9' }]} numberOfLines={1} ellipsizeMode="tail" pointerEvents="none" >{this.state.myCurrentAddress} </Text>
                </View>
              }
              {this.state.typeAddressEnabled &&
                <View style={styles.autocomplete}>
                  <GooglePlacesAutocomplete
                    placeholder="Digite o endereço"
                    placeholderTextColor="#7049f9"
                    ref={c => this.googlePlacesAutocomplete = c}
                    onPress={this.handleLocationSelected}
                    query={{
                      key: "AIzaSyA-H7zGSuNzyCZDW5pPeegOgykilPgmMug",
                      language: "pt",
                      components: 'country:br'
                    }}
                    textInputProps={{
                      onFocus: () => { this.setState({ searchFocused: true }) },
                      onBlur: () => { this.setState({ searchFocused: false }) },
                      autoCapitalize: "none",
                      autoCorrect: false
                    }}
                    listViewDisplayed={searchFocused}
                    fetchDetails={true}
                    enablePoweredByContainer={false}
                    renderRightButton={() =>
                      this.state.clearButtonEnabled && <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", padding: 5 }} activeOpacity={0.9} onPress={() => { this.clearInput() }}>
                        <Icon name='times-circle' size={22} color={'#7049f9'} />
                      </TouchableOpacity>}
                    styles={styles}
                  />
                </View>
              }
              {this.state.markOnMapEnabled &&
                <Fragment>
                  <View style={[styles.inputContainer, { borderBottomColor: '#7049f9' }]}>
                    <Text style={[styles.input, { opacity: 1 }, { color: '#7049f9' }]} numberOfLines={1} ellipsizeMode="tail" pointerEvents="none" >{this.state.myCurrentAddress} </Text>
                  </View>
                  <View style={styles.Map}>
                    <MapView
                      style={{ flex: 1 }}
                      region={this.state.myLocation}
                      onRegionChangeComplete={this.onRegionChange}
                    />
                    <View style={{ position: 'absolute', left: [(WIDTH - 70) / 2] - 25, top: (250 / 2) - 70 }}>
                      <MapMarker mounted={() => { }} icon='globe-americas'></MapMarker>
                    </View>
                  </View>
                </Fragment>
              }
              <View style={styles.bottomContainer}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { this._postPoint() }}>
                    <Text style={styles.btnTxt}>Marcar ponto</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}


export default NewPoint;