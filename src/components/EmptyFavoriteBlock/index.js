import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class EmptyFavoriteBlock extends Component {
  render() {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text} numberOfLines={2}>Nenhum ponto favorito ainda!</Text>
        </View>
    );
  }
}
