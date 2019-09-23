import React, { Component, Fragment } from "react";
import styles from "./styles";
import Header from "../../components/Header";
import MapMarker from "../../components/MapMarker";
import { View, Text, TextInput, TouchableOpacity, ScrollView, BackHandler, Alert } from "react-native";
import { Icon as IconElements } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from "react-native-maps";
import CommentBlock from "../../components/CommentBlock";
import api from '../../services/api';
import Loading from '../../components/Loading';

class PointProfile extends Component {
  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0
    },
    comments: [],
    duration: "",
    distance: "",
    navigationWithData: false,
    title: "",
    address: "",
    icon: "",
    comment: "",
    visibleModal: false
  }
  commentInputChange = (text) => {
    this.setState({ comment: text })
  }
  tofavorite = async () => {
    let data = new FormData();
    data.append("point_id", this.props.navigation.getParam('pointId'));
    try {
      const response = await fetch(api + '/tofavorite', {
        method: 'POST',
        headers: {
          token: this.props.navigation.getParam('token')
        },
        body: data
      });
      const result = await response.json();
      if (result.success) {
        Alert.alert("Sucesso", "Ponto favoritado!");
      } else {
        Alert.alert("Falha", "Ponto já favoritado");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  async getComments() {
    try {
      const response = await fetch(api + '/comments?point_id=' + this.props.navigation.getParam('pointId'), {
        headers: {
          token: this.props.navigation.getParam('token')
        }
      });
      const result = await response.json();
      if (result.success) {
        this.setState({ comments: result.data })
      } else {
        Alert.alert("Erro", "Falha interna");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  doAComment = async () => {
    if (this.state.comment == "") {
      Alert.alert("Alerta", "Digite um comentário primeiro!");
    } else {
      this.textInput.clear();
      this.setState({ visibleModal: true });
      await this.toComment();
      await this.getComments();
      this.setState({ visibleModal: false });
    }
  }
  toComment = async () => {
    let data = new FormData();
    data.append("point_id", this.props.navigation.getParam('pointId'));
    data.append("user_id", this.props.navigation.getParam('userId'));
    data.append("comment", this.state.comment);
    try {
      const response = await fetch(api + '/comment', {
        method: 'POST',
        headers: {
          token: this.props.navigation.getParam('token')
        },
        body: data
      });
      const result = await response.json();
      if (result.success) {
        this.setState({ comment: ""});
      } else {
        Alert.alert("Erro", result.data );
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.setState({
      region: {
        latitude: parseFloat(this.props.navigation.getParam('latitude')),
        longitude: parseFloat(this.props.navigation.getParam('longitude')),
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      },
      title: this.props.navigation.getParam('title'),
      address: this.props.navigation.getParam('address'),
      icon: this.props.navigation.getParam('icon')
    })
    const navigationWithData = this.props.navigation.getParam('navigationWithData')
    if (navigationWithData) {
      this.setState({
        distance: this.props.navigation.getParam('distance'),
        duration: this.props.navigation.getParam('duration'),
        navigationWithData: true
      })
    }
    await this.getData()
  }
  async getData() {
    this.setState({ visibleModal: true });
    await this.getComments();
    this.setState({ visibleModal: false });
  }

  favorite = async () => {
    this.setState({ visibleModal: true });
    await this.tofavorite();
    this.setState({ visibleModal: false });
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  render() {
    const author = this.props.navigation.getParam('author')
    return (
      <Fragment>
        <Loading visible={this.state.visibleModal} />
        <Header
          left={<TouchableOpacity activeOpacity={0.7} onPress={this.handleBackPress} ><Icon name="arrow-left" color="#fff" size={25} /></TouchableOpacity>}
          center={
            <Text style={{ fontFamily: "MyriadPro", color: "#FFF" }}>
              PONTO
            </Text>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.Container}>

          <View style={styles.Map}>
            <MapView
              style={{ flex: 1 }}
              region={this.state.region}
              zoomEnabled={false}
              scrollEnabled={false}
            >
              <Marker
                tracksViewChanges={false}
                coordinate={{
                  latitude: this.state.region.latitude,
                  longitude: this.state.region.longitude
                }
                }
              >
                <MapMarker mounted={() => { }} icon={this.state.icon} />
              </Marker>
            </MapView>

          </View>
          {this.state.navigationWithData ?
            <View style={styles.Info}>
              <View style={styles.MainInfo}>
                <Text style={styles.Title}>{this.state.title}</Text>
                <Text style={styles.Address}>{this.state.address}</Text>
              </View>
              <View style={styles.Metrics}>
                <View style={{ width: '50%', flexDirection: 'row' }}>
                  <View style={styles.Data}>
                    <Text style={styles.Label}>DISTÂNCIA</Text>
                    <Text style={styles.Value}>{this.state.distance} km</Text>
                  </View>
                  <View style={styles.Data}>
                    <Text style={styles.Label}>TEMPO</Text>
                    <Text style={styles.Value}>{this.state.duration} min</Text>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={this.favorite}>
                    <View style={styles.SmallCircle}>
                      <IconElements name="heart" iconStyle={{ color: "white" }} type="font-awesome" size={12} />
                    </View>
                    <Text numberOfLines={1} style={styles.btnTxt}>Favoritar</Text>
                  </TouchableOpacity>
                  <Text style={styles.Label}>Criado por: {author}</Text>
                </View>
              </View>
            </View>
            :
            <View style={[styles.Info, { flexDirection: 'row' }]}>
              <View style={[styles.MainInfo, { width: '100%' }]}>
                <Text style={styles.Title}>{this.state.title}</Text>
                <Text style={styles.Address}>{this.state.address}</Text>
              </View>
            </View>
          }
          <View style={styles.Comments}>
            <Text style={styles.H1}>Referências</Text>
            <View style={{ padding: 20, paddingTop: 0, paddingBottom: 10, justifyContent: "center", alignItems: "center" }} >
              {this.state.comments.length != 0 ? this.state.comments.map(
                p =>
                  <CommentBlock key={p.id} author={p.author.name.charAt(0).toUpperCase() + p.author.name.slice(1) + " " + p.author.lastName.charAt(0).toUpperCase() + p.author.lastName.slice(1)} comment={p.comment} date={p.created_at} />
              ) :
                <Text style={[styles.H1, { fontSize: 13 }]} > Nenhum comentário ainda, seja o primeiro!</Text>
              }

            </View>
          </View>
        </ScrollView>
        <View style={styles.BottomContainer}>
          <View style={styles.InputContainer}>
            <TextInput
              multiline={true}
              ref={input => { this.textInput = input }}
              maxHeight={60}
              maxLength={150}
              style={styles.InputComment}
              onChangeText={this.commentInputChange}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.ButtonBox}
            onPress={this.doAComment}
          >
            <IconElements name="paper-plane" type="font-awesome" size={20} iconStyle={{ color: "#623CEA" }} />
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}


export default PointProfile;