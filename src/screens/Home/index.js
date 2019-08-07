import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import FavoriteBlock from "../../components/FavoriteBlock";
import EmptyFavoriteBlock from "../../components/EmptyFavoriteBlock";
import { View, Text, ScrollView, AsyncStorage, Alert, TouchableOpacity } from "react-native";
import CategoryBox from "../../components/CategoryBox";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import Swipeable from 'react-native-swipeable';
import Loading from '../../components/Loading';

const NO_LOCATION_PROVIDER_AVAILABLE = 2;


class Home extends Component {
  state = {
    data: {
      categories: [],
      favorites: []
    },
    userName: '',
    token: '',
    editEnabled: false,
    visibleModal: false
  }
  async getData() {
    try {
      const response = await fetch('http://hedonista-com-br.hostoo.net/api/getHomeData?token=' + this.state.token);
      const result = await response.json();
      if (result.success) {
        this.setState({ data: result.data });
      } else {
        Alert.alert("Erro", "Falha interna");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  _getUserAndToken = async () => {
    const userName = await AsyncStorage.getItem('userName');
    const token = await AsyncStorage.getItem('userToken');

    this.setState({ userName: userName, token: token })
  }
  checkLocation() {
    navigator.geolocation.getCurrentPosition(
      () => {
      },
      (error) => {
        if (error.code === NO_LOCATION_PROVIDER_AVAILABLE) {
          Alert.alert("Alerta", 'Você precisa habilitar sua localização para que possamos encontrar os pontos mais próximos de você!');
          this.setState({ locationGot: false })
        }
        this.setState({ locationGot: false })
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }
  async componentDidMount() {
    this.setState({ visibleModal: true });
    await this._getUserAndToken();
    await this.getData();
    this.setState({ visibleModal: false });
    this.checkLocation();
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  _enableEdit = () => {
    if (this.state.editEnabled) {
      this.setState({ editEnabled: false })
    } else {
      this.setState({ editEnabled: true })
    }
  }
  async removerFav($id) {
    data = this.state.data
    for (var i = 0; i < data.favorites.length; i++) {
      if (data.favorites[i].id === $id) {
        data.favorites.splice(i, 1);
      }
      this.setState({ data: data })
    }
    this.setState({ visibleModal: true });
    await this.unfavorite($id);
    this.setState({ visibleModal: false });
  }
  async unfavorite($id) {
    try {
      const response = await fetch('http://hedonista-com-br.hostoo.net/api/unfavorite?token=' + this.state.token + '&favorite_id=' + $id, {
        method: 'delete'
      });
      const result = await response.json();
      if (result.success) {

      } else {
        Alert.alert("Erro", "Falha interna");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  render() {
    return (
      <Fragment>
        <Loading visible={this.state.visibleModal} />
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
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.Container2}>
          <View style={styles.Container}>
            <View style={styles.Text}>
              <Text style={styles.Greetings} >Olá,</Text>
              <Text style={styles.Name}>{this.state.userName}</Text>
            </View>
            <Text style={styles.H1}>Escolha uma categoria</Text>
            <View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {this.state.data.categories.length > 0 ?
                  (this.state.data.categories.map(
                    p =>
                      <CategoryBox key={p.id} onPress={() => { this.props.navigation.navigate('SubcategoryList', { categoryId: p.id, token: this.state.token }) }} icon={p.icon} title={p.name} pointNumber={p.pointsNumber} />
                  ))
                  :
                  <CategoryBox />
                }
              </ScrollView>
            </View>
            {this.state.data.favorites.length > 0 ?
              <View style={{ flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}>
                <View style={{ width: '60%' }}>
                  <Text style={styles.H1}>Meus pontos favoritos</Text>
                </View>
                <View style={{ width: '40%', alignItems: "flex-end" }}>
                  <TouchableOpacity onPress={this._enableEdit}>
                    <Text style={styles.H1}>{!this.state.editEnabled ? 'Editar' : 'Cancelar edição'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              :
              <Text style={styles.H1}>Meus pontos favoritos</Text>
            }
          </View>
          <View style={styles.FavoriteContainer}>
            <View style={styles.FavoriteBlock} >
              {this.state.data.favorites.length > 0 ?
                (this.state.editEnabled ?
                  (this.state.data.favorites.map(
                    p =>
                      <Swipeable key={p.id} rightActionActivationDistance={150} rightContent={<View style={styles.btnDelete}>
                        <Icon name='trash-alt' size={20} color="#d64541" />
                      </View>} onRightActionRelease={() => this.removerFav(p.id)}>
                        <FavoriteBlock onPress={() => {
                          this.props.navigation.navigate('PointProfile',
                            {
                              title: p.point.name,
                              address: p.point.address,
                              latitude: p.point.latitude,
                              longitude: p.point.longitude,
                              navigationWithData: false
                            })
                        }} icon={p.icon} title={p.point.name} address={p.point.address} />
                      </Swipeable>
                  )) :
                  (this.state.data.favorites.map(
                    p =>
                      <FavoriteBlock key={p.id} onPress={() => {
                        this.props.navigation.navigate('PointProfile',
                          {
                            title: p.point.name,
                            address: p.point.address,
                            latitude: p.point.latitude,
                            longitude: p.point.longitude,
                            navigationWithData: false
                          })
                      }} icon={p.icon} title={p.point.name} address={p.point.address} />
                  ))
                )
                :
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