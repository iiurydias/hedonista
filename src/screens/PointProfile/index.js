import React, { Component, Fragment } from "react";
import styles from "./styles";
import Header from "../../components/Header";
import MapMarker from "../../components/MapMarker";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import MapView, { Marker } from "react-native-maps";
import CommentBlock from "../../components/CommentBlock";
const { width: WIDTH } = Dimensions.get('window')

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
        comment: 'Amei esse local, muito maravilho, pretendo vir mais vezes com certeza!',
        date: '2019-07-06T12:33Z',
        gender: 'male'
      }, {
        id: 2,
        author: 'Mariana Novaes',
        comment: 'Amei esse local, muito maravilho, pretendo vir mais vezes com certeza!',
        date: '2019-07-06T12:33Z',
        gender: 'female'
      }, {
        id: 3,
        author: 'Iury Dias',
        comment: 'Amei esse local, muito maravilho, pretendo vir mais vezes com certeza!',
        date: '2019-07-06T12:33Z',
        gender: 'male'
      },
      ]
  }
  render() {
    return (
      <Fragment>
        <Header
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
                    <Icon raised name='heartbeat' size={15} color='white' />
                  </View>
                  <Text numberOfLines={1} style={styles.btnTxt}>Favoritar</Text>
                </TouchableOpacity>
                <Text style={styles.Label}>Criado por: Antônio Fagundes</Text>
              </View>
            </View>
          </View>
          <View style={styles.Comments}>
            <Text style={styles.H1}>Referências</Text>
            <View style={{ padding: 20, paddingTop: 0, flex: 1 }}>
              <ScrollView style={styles.FavoriteBlock} showsVerticalScrollIndicator={false}>
                {this.state.comments.length != [] ? this.state.comments.map(
                  p =>
                    <CommentBlock key={p.id} author={p.author} comment={p.comment} date={p.date} gender={p.gender} />
                ):
                <Text> Nenhum comentário</Text>
                }
              </ScrollView>
              <Text style={[styles.H1, { marginLeft: 0, margin: 10, fontSize: 13 }]}>Deixar referência:</Text>

              <View style={styles.BottomContainer}>
                <View style={styles.InputContainer}>
                  <TextInput
                    multiline={true}
                    maxHeight={100}
                    style={styles.InputComment}
                    onChangeText={(text) => { }}
                  />
                </View>
                <View style={styles.ButtonBox}>
                  <View style={styles.ButtonContainer}>
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={styles.Button2}
                      onPress={this.props.onDirectionButtonPress}
                    >
                      <Icon name="paper-plane" size={20} color="#FFF" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Fragment>
    );
  }
}


export default PointProfile;