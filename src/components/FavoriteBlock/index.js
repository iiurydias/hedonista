import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class FavoriteBlock extends Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.Container}>
          <View style={styles.InfoContainer}>
            <Text style={styles.Title} numberOfLines={1}>Lanchonete do seu Zé dsfsdfsdfsdfsd sdfdfdsfds sdfsdfdsfsdf</Text>
            <Text style={styles.Address} numberOfLines={1}>Rua Antônio de Souza Gomes, 53 fsdfdfsdf sfsdgdfg sfgsfgsfg</Text>
          </View>
          <View style={styles.IconContainer}>
            <Icon name='utensils' size={30} color="#603DEB" />
          </View>
        </View>
        </TouchableOpacity>
    );
  }
}
