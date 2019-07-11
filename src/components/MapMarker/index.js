import React, { Component } from "react";
import { View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

class MapMarker extends Component {
  componentDidMount(){
    this.props.mounted()
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.circle}>
          <View style={styles.smallCircle}>
          <Icon name={this.props.icon} size={20} color="#7049f9" />
          </View>
        </View>
            <View style={styles.triangle}></View>
          </View>
    );
  }
}

export default MapMarker;