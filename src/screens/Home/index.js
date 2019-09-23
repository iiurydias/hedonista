import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import FavoriteBlock from "../../components/FavoriteBlock";
import EditFavoriteBlock from "../../components/EditFavoriteBlock";
import DeleteBlock from "../../components/DeleteBlock";
import EmptyFavoriteBlock from "../../components/EmptyFavoriteBlock";
import { View, Text, ScrollView, AsyncStorage, Alert, TouchableOpacity, Animated } from "react-native";
import CategoryBox from "../../components/CategoryBox";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import Swipeable from 'react-native-swipeable';
import Loading from '../../components/Loading';
import api from '../../services/api';

const NO_LOCATION_PROVIDER_AVAILABLE = 2;
const EditFavoriteBlockAnimated = Animated.createAnimatedComponent(EditFavoriteBlock);
const FavoriteBlockAnimated = Animated.createAnimatedComponent(FavoriteBlock);

class Home extends Component {
  constructor(props) {
    super(props);
    this.left = new Animated.Value(0)
  }
  state = {
    data: {
      categories: [],
      favorites: []
    },
    userName: '',
    token: '',
    editEnabled: false,
    visibleModal: false,
    userId: ''
  }
  async getData() {
    try {
      const response = await fetch(api + '/homedata', {
        headers: {
          token: this.state.token
        }
      });
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
    const userId = await AsyncStorage.getItem('userId');
    this.setState({ userId: userId, userName: userName, token: token })
  }

  checkLocation() {
    navigator.geolocation.getCurrentPosition(
      () => {
      },
      (error) => {
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
    this.props.navigation.addListener('willFocus', this._handleStateChange);
  }
  _handleStateChange = async () => {
    this.setState({ visibleModal: true });
    await this.getData();
    this.setState({ visibleModal: false });
  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  _enableEdit = () => {
    if (this.state.editEnabled) {
      this.setState({ editEnabled: false })
      Animated.timing(this.left, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
    } else {
      this.setState({ editEnabled: true })
      Animated.timing(this.left, {
        toValue: -25,
        duration: 500,
        useNativeDriver: true
      }).start();
    }
  }
  _removeFav = async ($id) => {
    data = this.state.data
    for (var i = 0; i < data.favorites.length; i++) {
      if (data.favorites[i].id === $id) {
        data.favorites.splice(i, 1);
      }
      this.setState({ data: data })
    }
  }
  _unfavoriteAndRemove = async ($id) => {
    this.setState({ visibleModal: true });
    await this._unfavorite($id)
    await this._removeFav($id)
    this.setState({ visibleModal: false });
  }
  _unfavorite = async ($id) => {
    try {
      const response = await fetch(api + '/unfavorite?favorite_id=' + $id, {
        method: 'delete',
        headers: {
          token: this.state.token
        }
      });
      const result = await response.json();
      if (result.success) {
        this._enableEdit()
      } else {
        Alert.alert("Erro", "Falha interna");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  render() {
    const { data,
      userName,
      token,
      editEnabled,
      visibleModal,
      userId } = this.state;
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
                      <CategoryBox key={p.id} onPress={() => { 
                        this.checkLocation();
                        this.props.navigation.navigate('SubcategoryList', { categoryId: p.id, token: this.state.token, icon: p.icon, userId: this.state.userId }) 
                      this.checkLocation();
                      }
                      } icon={p.icon} title={p.name} pointNumber={p.pointsNumber} />
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
                      <View key={p.id}>
                        <View style={{ position: 'absolute', zIndex: 0 }}>
                          <DeleteBlock />
                        </View>
                        <Swipeable key={p.id} rightActionActivationDistance={100} rightContent={<View >
                        </View>} onRightActionRelease={() => { this._unfavoriteAndRemove(p.id) }}>
                          <EditFavoriteBlockAnimated style={{ transform: [{ translateX: this.left }] }} icon={p.icon} title={p.point.name} address={p.point.address} />
                        </Swipeable>
                      </View>
                  ))
                  :
                  (this.state.data.favorites.map(
                    p =>
                      <View key={p.id}>
                        <View style={{ position: 'absolute', zIndex: 0 }}>
                          <DeleteBlock />
                        </View>
                        <FavoriteBlockAnimated style={{ transform: [{ translateX: this.left }], zIndex: 1 }} key={p.id} onPress={() => {
                         this.props.navigation.navigate('PointProfile',
                            {
                              title: p.point.name,
                              address: p.point.address,
                              latitude: p.point.latitude,
                              longitude: p.point.longitude,
                              navigationWithData: false,
                              pointId: p.point.id,
                              token: token,
                              userId: userId,
                              icon: p.icon,
                              author: p.author.name.charAt(0).toUpperCase() + p.author.name.slice(1) + " " + p.author.lastName.charAt(0).toUpperCase() + p.author.lastName.slice(1)
                            })
                        }} icon={p.icon} title={p.point.name} address={p.point.address} />
                      </View>
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