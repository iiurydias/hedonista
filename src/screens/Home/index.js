import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import FavoriteBlock from "../../components/FavoriteBlock";
import EmptyFavoriteBlock from "../../components/EmptyFavoriteBlock";
import { View, Text, ScrollView, AsyncStorage, Alert, TouchableOpacity } from "react-native";
import CategoryBox from "../../components/CategoryBox";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

const NO_LOCATION_PROVIDER_AVAILABLE = 2;


class Home extends Component {
  constructor(props) {
    super(props);
    this._getUserName();
  }
  state = {
    favoritePlaces: [
      {
        id: 1,
        title: 'Lanchonete do seu Zé',
        address: 'Rua Antônio de Souza Gomes, 53',
        icon: 'utensils',
        latitude: -12.962413,
      longitude: -38.432113,
      },
      {
        id: 2,
        title: 'Lanchonete do seu Zé',
        address: 'Rua Antônio de Souza Gomes, 53',
        icon: 'utensils',
        latitude: -12.962413,
      longitude: -38.432113,
      },
      {
        id: 3,
        title: 'Lanchonete do seu Zé',
        address: 'Rua Antônio de Souza Gomes, 53',
        icon: 'utensils',
        latitude: -12.962413,
      longitude: -38.432113,
      },
      {
        id: 4,
        title: 'Lanchonete do seu Zé',
        address: 'Rua Antônio de Souza Gomes, 53',
        icon: 'utensils',
        latitude: -12.962413,
      longitude: -38.432113,
      }
    ],
    userName: ''
  }
  _getUserName = async () => {
    const userName = await AsyncStorage.getItem('userName');
    this.setState({ userName: userName })
  }
  checkLocation() {
    navigator.geolocation.getCurrentPosition(
        () => {
        },
      (error) => {
        if (error.code === NO_LOCATION_PROVIDER_AVAILABLE) {
          Alert.alert("Alerta", 'Você precisa habilitar sua localização para que possamos encontrar os pontos mais próximos de você!');
          this.setState({locationGot: false})
        }
        this.setState({locationGot: false})
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  componentDidMount() {
    this.checkLocation()
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <Fragment>
        <Header
          center={
            <Text style={{ fontFamily: "MyriadPro", color: "#FFF" }}>
              HEDONISTA
            </Text>
          }
          right={
            <TouchableOpacity onPress={this._signOutAsync}>
             <Icon name='sign-out-alt' size={20} color="#FFF" />
            </TouchableOpacity>

          }
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1}} style={styles.Container2}>
          <View style={styles.Container}>
            <View style={styles.Text}>
              <Text style={styles.Greetings} >Olá,</Text>
              <Text style={styles.Name}>{this.state.userName}</Text>
            </View>
            <Text style={styles.H1}>Escolha uma categoria</Text>
            <View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <CategoryBox onPress={() => { this.props.navigation.navigate('Points', { icon: 'utensils' }) }} icon='utensils' title='Comida' pointNumber='153' />
                <CategoryBox onPress={() => { this.props.navigation.navigate('Points', { icon: 'theater-masks' }) }} icon='theater-masks' title='Lazer' pointNumber='63' />
                <CategoryBox onPress={() => { this.props.navigation.navigate('Points', { icon: 'building' }) }} icon='building' title='Estadia' pointNumber='20' />
                <CategoryBox onPress={() => { this.props.navigation.navigate('Points', { icon: 'utensils' }) }} icon='utensils' title='Comida' pointNumber='153' />
                <CategoryBox onPress={() => { this.props.navigation.navigate('Points', { icon: 'utensils' }) }} icon='utensils' title='Comida' pointNumber='153' />
                <CategoryBox onPress={() => { this.props.navigation.navigate('Points', { icon: 'utensils' }) }} icon='utensils' title='Comida' pointNumber='153' />
              </ScrollView>
            </View>
            <Text style={styles.H1}>Meus pontos favoritos</Text>
          </View>
          <View style={styles.FavoriteContainer}>
            <View style={styles.FavoriteBlock} >
              {this.state.favoritePlaces.length > 0 ?
                this.state.favoritePlaces.map(
                  p =>
                    <FavoriteBlock key={p.id} onPress={() => { this.props.navigation.navigate('PointProfile', 
                    {
                      title: p.title,
                      address: p.address,
                      latitude: p.latitude, 
                      longitude: p.longitude, 
                      navigationWithData: false
                    })}} icon={p.icon} title={p.title} address={p.address} />
                ) :
                <EmptyFavoriteBlock />
              }
            </View>
          </View>
        </ScrollView>
      </Fragment>

    );
  }
}
export default Home;