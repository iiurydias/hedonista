import React, { Component } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class CategoryBox extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.9} style={styles.Container}>
        <View style={styles.FirstLevel}>
          <View style={styles.SecondLevel}>
            <View style={styles.ThirdLevel}>
              <View style={styles.CategoryIcon}>
                <Icon name={this.props.icon} size={30} color="#FFF" />
              </View>
              <View style={styles.CategoryInfo}>
                <Text style={styles.Title} numberOfLines={2}>{this.props.title}</Text>
                <Text style={styles.PointNumber} numberOfLines={1}>{this.props.pointNumber} {parseInt(this.props.pointNumber) > 1 ? "pontos" : "ponto"}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
