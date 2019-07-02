import React, { Component } from "react";
import Map from "../../components/Map";
import { Provider } from "react-redux";
import store from "../../store";
import Header from "../../components/Header";
import Reset from "../../components/Reset";
import { View, Text } from "react-native";
import markerImage from "../../assets/food-marker.png";

class Points extends Component {
  state= {
    markers: [
      {
        key: 1,
        name: "Macedo Lanchonete",
        address: "Rua santo antônio, 58",
        latitude: -12.962413,
        longitude: -38.432113,
        hidden: false
      },
      {
        key: 2,
        name: "Macedo Lanchonete",
        address: "Rua santo antônio, 58",
        latitude: -12.966428,
        longitude: -38.434688,
        hidden: false
      },
      {
        key: 3,
        name: "Macedo Lanchonete",
        address: "Rua santo antônio, 58",
        latitude: -12.97314,
        longitude: -38.448251,
        hidden: false
      },
      {
        key: 4,
        name: "Macedo Lanchonete",
        address: "Rua santo antônio, 58",
        latitude: -1.436893,
        longitude: -48.477543,
        hidden: false
      },
      {
        key: 5,
        name: "Macedo Lanchonete",
        address: "Rua santo antônio, 58",
        latitude: -1.423336,
        longitude: -48.482993,
        hidden: false
      },
      {
        key: 6,
        name: "Macedo Lanchonete",
        address: "Rua santo antônio, 58",
        latitude: -1.444888,
        longitude: -48.464365,
        hidden: false
      },
      {
        key: 7,
        name: "Macedo Lanchonete",
        address: "Rua santo antônio, 58",
        latitude: -1.451452,
        longitude: -48.47033,
        hidden: false
      },
      {
        key: 8,
        name: "Macedo Lanchonete",
        address: "Rua santo antônio, 58",
        latitude: -1.446776,
        longitude: -48.47239,
        hidden: false
      }
    ]
  }
  render() {
    return (
      <Provider store={store}>
        <Header
          left={<Reset />}
          center={
            <Text style={{ fontFamily: "MyriadPro", color: "#FFF" }}>
              LOCAIS COM COMIDA BARATA
            </Text>
          }
        />
        <Map markers = {this.state.markers} markerImg={markerImage} />
      </Provider>
    );
  }
}


export default Points;