import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class DeleteBlock extends Component {
  render() {
    return (
        <View style={[styles.Container, this.props.style]}>
          
          <View style={styles.IconContainer}>
            <Icon name='trash-alt'size={20} color="#fff" />
          </View>
        </View>
    );
  }
}
