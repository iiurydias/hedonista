import React, { Component, Fragment } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Alert, Picker, ScrollView, BackHandler } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient'
import Header from "../../components/Header";

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
    myCurrentAddress: 'Meu endereço atual ',
    myCurrentAddress2: 'Meu endereço atual ',
    myLocation: {
      latitude: -12.962413,
      longitude: -38.432113
    },
    myLocation2: {
      latitude: -12.962413,
      longitude: -38.432113,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003
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
  validation = () => {
    this.setState({ nameFocused: false })
    this.validateName();
    if (this.state.myCurrentAddress == "") {
      Alert.alert("Erro", "Selecione um endereço válido")
    }
  }
  handleLocationSelected = (data, { geometry }) => {
    this.setState({ myCurrentAddress: data.description, clearButtonEnabled: true })
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
    GeoCoder.from(this.state.myLocation).then((response) => {
      const address = response.results[0].formatted_address;
      this.setState({ myCurrentAddress: address })
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
    this.setState({ myLocation2: region })
    GeoCoder.from(region).then((response) => {
      const address = response.results[0].formatted_address;
      this.setState({ myCurrentAddress2: address })
      this.setState({ myCurrentAddress: address })
    }).catch(() => {
      this.setState({ myCurrentAddress2: "Erro ao pegar seu endereço atual" })
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
        <ScrollView style={{ backgroundColor: "#7049f9"}} contentContainerStyle={{flex: 1}} keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Text style={[styles.Greetings, { fontWeight: 'bold' }]} >Criar um </Text>
          <Text style={styles.Greetings} >novo ponto:</Text>
        </View>
          <View style={styles.MainContainer}>
            <View style={{ justifyContent: "center", alignItems: "center"}}>
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
                    <Text style={[styles.input, { opacity: 1 }, { color: '#7049f9' }]} numberOfLines={1} ellipsizeMode="tail" pointerEvents="none" >{this.state.myCurrentAddress2} </Text>
                  </View>
                  <View style={styles.Map}>
                    <MapView
                      style={{ flex: 1 }}
                      region={this.state.myLocation2}
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
                  <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { this.validation() }}>
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