import React, { Component, Fragment } from "react";
import styles from "./styles";
import Header from "../../components/Header";
import MapMarker from "../../components/MapMarker";
import { View, Text, TextInput, TouchableOpacity, ScrollView, BackHandler } from "react-native";
import { Icon as IconElements } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from "react-native-maps";
import CommentBlock from "../../components/CommentBlock";

class PointProfile extends Component {
  state = {
    region: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0
    },
    comments: [{
      id: 1,
      author: 'Iury Dias',
      comment: 'Amei esse local, muito bom, pretendo vir mais vezes com certeza!',
      date: '2019-07-06T12:33Z'
    }, {
      id: 2,
      author: 'Iury Dias',
      comment: 'Amei esse local, muito bom, pretendo vir mais vezes com certeza!',
      date: '2019-07-06T12:33Z'
    }, {
      id: 3,
      author: 'Iury Dias',
      comment: 'Amei esse local, muito bom, pretendo vir mais vezes com certeza!',
      date: '2019-07-06T12:33Z'
    }, {
      id: 4,
      author: 'Iury Dias',
      comment: 'Amei esse local, muito bom, pretendo vir mais vezes com certeza!',
      date: '2019-07-06T12:33Z'
    }, {
      id: 5,
      author: 'Iury Dias',
      comment: 'Amei esse local, muito bom, pretendo vir mais vezes com certeza!',
      date: '2019-07-06T12:33Z'
    },
    ],
    duration: "",
    distance: "",
    navigationWithData: false,
    title: "",
    address: ""
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    this.setState({
      region:{
        latitude: parseFloat(this.props.navigation.getParam('latitude')),
        longitude: parseFloat(this.props.navigation.getParam('longitude')),
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      },
      title: this.props.navigation.getParam('title'),
      address: this.props.navigation.getParam('address')
    })
    const navigationWithData = this.props.navigation.getParam('navigationWithData')
    if (navigationWithData){
    this.setState({
      distance: this.props.navigation.getParam('distance'),
      duration: this.props.navigation.getParam('duration'),
      navigationWithData: true
    })
  }
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  render() {
    
    return (
      <Fragment>
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
                <MapMarker mounted={() => { }} icon='utensils' />
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
                <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { }}>
                  <View style={styles.SmallCircle}>
                    <IconElements name="heart" iconStyle={{ color: "white" }} type="font-awesome" size={12} />
                  </View>
                  <Text numberOfLines={1} style={styles.btnTxt}>Favoritar</Text>
                </TouchableOpacity>
                <Text style={styles.Label}>Criado por: Antônio Fagundes</Text>
              </View>
            </View>
          </View>
          :
          <View style={[styles.Info, { flexDirection: 'row'}]}>
            <View style={[styles.MainInfo, {width: '60%'}]}>
              <Text style={styles.Title}>Lanchonete do seu Zé</Text>
              <Text style={styles.Address}>Rua Antônio Fagundes, 533</Text>
            </View>
            <View style={[styles.Metrics, {width: '40%', padding: 20, paddingLeft: 0}]}>
              <View style={[styles.buttonContainer, {width: '100%'}]}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { }}>
                  <View style={styles.SmallCircle}>
                    <IconElements name="heart" iconStyle={{ color: "white" }} type="font-awesome" size={12} />
                  </View>
                  <Text numberOfLines={1} style={styles.btnTxt}>Favoritar</Text>
                </TouchableOpacity>
                <Text style={styles.Label}>Criado por: Antônio Fagundes</Text>
              </View>
            </View>
          </View>
          }
          <View style={styles.Comments}>
            <Text style={styles.H1}>Referências</Text>
            <View style={{ padding: 20, paddingTop: 0, paddingBottom: 10, justifyContent: "center", alignItems: "center" }} >
              {this.state.comments.length != [] ? this.state.comments.map(
                p =>
                  <CommentBlock key={p.id} author={p.author} comment={p.comment} date={p.date} />
              ) :
                <Text style={[styles.H1, {fontSize: 13}]} > Nenhum comentário ainda, seja o primeiro!</Text>
              }

            </View>
          </View>
        </ScrollView>
        <View style={styles.BottomContainer}>
          <View style={styles.InputContainer}>
            <TextInput
              multiline={true}
              maxHeight={60}
              maxLength={200}
              style={styles.InputComment}
              onChangeText={(text) => { }}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.ButtonBox}
            onPress={this.props.onDirectionButtonPress}
          >
            <IconElements name="paper-plane" type="font-awesome" size={20} iconStyle={{ color: "#623CEA" }} />
          </TouchableOpacity>
        </View>
      </Fragment>
    );
  }
}


export default PointProfile;