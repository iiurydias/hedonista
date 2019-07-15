import React, { Component, Fragment } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity, Dimensions, Picker, ScrollView, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import LinearGradient from 'react-native-linear-gradient'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import GeoCoder from 'react-native-geocoding'
import MapView, { Marker } from "react-native-maps";
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
    this.validateEmail();
    this.comparePasses();
  }
  handleLocationSelected = (data, { geometry }) => {
    this.setState({ clearButtonEnabled: true })
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
        this.setState({ typeAddressEnabled: true })
        this.setState({ markCurrentLocationEnabled: false })
        this.setState({ markOnMapEnabled: false })
        break;
      case 'current_location':
        this.setState({ typeAddressEnabled: false })
        this.setState({ markCurrentLocationEnabled: true })
        this.setState({ markOnMapEnabled: false })
        break;
      case 'mark_on_map':
        this.setState({ typeAddressEnabled: false })
        this.setState({ markCurrentLocationEnabled: false })
        this.setState({ markOnMapEnabled: true })
      default:
        this.setState({ typeAddressEnabled: false })

    }
  }
  handleNameFocus = () => this.setState({ nameFocused: true })
  handleNameBlur = () => this.setState({ nameFocused: false })
  async componentDidMount() {
    await GeoCoder.from(this.state.myLocation).then((response) => {
      const address = response.results[0].formatted_address;
      this.setState({ myCurrentAddress: address })
    }).catch(() => {
      this.setState({ myCurrentAddress: "Erro ao pegar seu endereço atual" })
    });
  }
  onRegionChange = (region) => {
    this.setState({ myLocation2: region })
    GeoCoder.from(region).then((response) => {
      const address = response.results[0].formatted_address;
      this.setState({ myCurrentAddress2: address })
    }).catch(() => {
      this.setState({ myCurrentAddress2: "Erro ao pegar seu endereço atual" })
    });
  }
  render() {
    const { width: WIDTH } = Dimensions.get('window')
    const searchFocused = this.state.searchFocused
    return (
      <LinearGradient colors={['#7049f9', '#9b6eff']} height='100%'>
        <ScrollView keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false} style={styles.MainContainer} contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.logoContainer}>
              <Icon name='globe-americas' size={WIDTH * 0.08} color="#FFF" />
            </View>
            <View style={[styles.inputContainer, this.state.nameFocused ? { borderBottomColor: '#FFF' } : (this.state.missName ? { borderBottomColor: '#ff4349' } : { borderBottomColor: '#AAA' })]}>
              <View style={[styles.inputIcon, this.state.nameFocused ? { opacity: 1 } : { opacity: 0.5 }]}>
                <Icon name='map-marker-alt' size={20} color={this.state.nameFocused ? '#FFF' : this.state.missName ? '#ff4349' : '#FFF'} />
              </View>
              <TextInput
                onFocus={this.handleNameFocus}
                onBlur={this.handleNameBlur}
                style={[styles.input, this.state.nameFocused ? ({ opacity: 1 }, { color: '#FFF' }) : ({ opacity: 0.5 }, (this.state.missName ? { color: '#ff4349' } : { color: '#FFF' }))]}
                placeholder='Nome do ponto'
                maxLength={30}
                placeholderTextColor={this.state.nameFocused ? '#FFF' : this.state.missName ? '#ff4349' : '#FFF'}
                onChangeText={this.setName}
              />
            </View>
            <View style={[styles.inputContainer, { borderBottomColor: '#AAA' }]}>
              <View style={[styles.inputIcon, { opacity: 0.5 }]}>
                <Icon name='map-marked-alt' size={22} color={'#FFF'} />
              </View>
              <Picker
                selectedValue={this.state.pickerValue}
                style={[styles.input, {
                  color: '#FFF', fontFamily: "MyriadPro", fontSize: 15, marginLeft: -20, transform: [
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
              <View style={[styles.inputContainer, { borderBottomColor: '#FFF' }]}>
                <Text style={[styles.input, { opacity: 1 }, { color: '#FFF' }]} numberOfLines={1} ellipsizeMode="tail" pointerEvents="none" >{this.state.myCurrentAddress} </Text>
              </View>
            }
            {this.state.typeAddressEnabled &&
              <View style={styles.autocomplete}>
                <GooglePlacesAutocomplete
                  placeholder="Digite o endereço"
                  placeholderTextColor="#FFF"
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
                      <Icon name='times-circle' size={22} color={'#FFF'} />
                    </TouchableOpacity>}
                  styles={styles}
                />
              </View>
            }
            {this.state.markOnMapEnabled &&
              <Fragment>
                <View style={[styles.inputContainer, { borderBottomColor: '#FFF' }]}>
                  <Text style={[styles.input, { opacity: 1 }, { color: '#FFF' }]} numberOfLines={1} ellipsizeMode="tail" pointerEvents="none" >{this.state.myCurrentAddress2} </Text>
                </View>
                <View style={styles.Map}>
                  <MapView
                    style={{ flex: 1 }}
                    region={this.state.myLocation2}
                    onRegionChangeComplete={this.onRegionChange}
                  />
                  <View style={{ position: 'absolute', left: [(WIDTH - 70) / 2] - 25, top: (250 / 2) - 70 }}>
                    <MapMarker mounted={() => { }} icon='utensils'></MapMarker>
                  </View>
                </View>
              </Fragment>
            }
            <View style={styles.bottomContainer}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { }}>
                  <Text style={styles.btnTxt}>Marcar ponto</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}


export default NewPoint;