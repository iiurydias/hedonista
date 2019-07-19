import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

class Add extends Component {
  render() {
    return (
      <View style={styles.Button}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={this.props.onPress}
          style={styles.Content}
        >
          <Icon name="plus" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Add;