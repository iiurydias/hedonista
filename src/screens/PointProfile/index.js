import React, { Component, Fragment } from "react";
import styles from "./styles";
import Header from "../../components/Header";
import MapMarker from "../../components/MapMarker";
import { View, Text, TextInput, TouchableOpacity, ScrollView, BackHandler } from "react-native";
import { Icon as IconElements }  from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from "react-native-maps";
import CommentBlock from "../../components/CommentBlock";


class PointProfile extends Component {
  state = {
    region: {
      latitude: -12.962413,
      longitude: -38.432113,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    },
      comments: [{
        id: 1,
        author: 'Iury Dias',
        comment: 'Amei esse local, muito bom, pretendo vir mais vezes com certeza!',
        date: '2019-07-06T12:33Z',
        gender: 'male'
      }, {
        id: 2,
        author: 'Mariana Novaes',
        comment: 'Amei esse local, muito bom, pretendo vir mais vezes com certeza!',
        date: '2019-07-06T12:33Z',
        gender: 'female'
      }, {
        id: 3,
        author: 'Iury Dias',
        comment: 'Amei esse local, muito bom, pretendo vir mais vezes com certeza!',
        date: '2019-07-06T12:33Z',
        gender: 'male'
      },
      ]
  }
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = ()=>{
    this.props.navigation.goBack();
    return true
  }
  componentWillUnmount(){
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
        <View style={styles.Container}>
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
          <View style={styles.Info}>
            <View style={styles.MainInfo}>
              <Text style={styles.Title}>Lanchonete do seu Zé</Text>
              <Text style={styles.Address}>Rua Antônio Fagundes, 533</Text>
            </View>
            <View style={styles.Metrics}>
              <View style={{ width: '50%', flexDirection: 'row' }}>
                <View style={styles.Data}>
                  <Text style={styles.Label}>DISTÂNCIA</Text>
                  <Text style={styles.Value}>1.4 km</Text>
                </View>
                <View style={styles.Data}>
                  <Text style={styles.Label}>TEMPO</Text>
                  <Text style={styles.Value}>20 min</Text>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.Button} activeOpacity={0.9} onPress={() => { }}>
                  <View style={styles.SmallCircle}>
                    <IconElements name="heart" iconStyle={{color: "white"}} type="font-awesome" size={12} />
                  </View>
                  <Text numberOfLines={1} style={styles.btnTxt}>Favoritar</Text>
                </TouchableOpacity>
                <Text style={styles.Label}>Criado por: Antônio Fagundes</Text>
              </View>
            </View>
          </View>
          <View style={styles.Comments}>
            <Text style={styles.H1}>Referências</Text>
            <View style={{ flex: 1 }}>
              <ScrollView style={{ padding: 20, paddingTop: 0} } showsVerticalScrollIndicator={false}>
                {this.state.comments.length != [] ? this.state.comments.map(
                  p =>
                    <CommentBlock key={p.id} author={p.author} comment={p.comment} date={p.date} gender={p.gender} />
                ):
                <Text> Nenhum comentário</Text>
                }
              </ScrollView>
              <View style={styles.BottomContainer}>
                <View style={styles.InputContainer}>
                  <TextInput
                    multiline={true}
                    maxHeight={60}
                    style={styles.InputComment}
                    onChangeText={(text) => { }}
                  />
                </View>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={styles.ButtonBox}
                      onPress={this.props.onDirectionButtonPress}
                    >
                      <IconElements name="paper-plane" type="font-awesome" size={20} iconStyle={{color: "#623CEA"}} />
                    </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}


export default PointProfile;