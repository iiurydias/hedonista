import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class FavoriteBlock extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.98} onPress={this.props.onPress}>
        <View style={[styles.Container, this.props.style]}>
          <View style={styles.InfoContainer}>
            <Text style={styles.Title} numberOfLines={1}>{this.props.title}</Text>
            <Text style={styles.Address} numberOfLines={1}>{this.props.address}</Text>
          </View>
          <View style={styles.IconContainer}>
            <Icon name={this.props.icon} size={30} color="#7049f9" />
          </View>
        </View>
        </TouchableOpacity>
    );
  }
}
