import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";

class SubcategoryBox extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.9} style={styles.Container}>
        <View style={styles.FirstLevel}>
          <View >
            <Text numberOfLines={2} style={styles.Title}>{this.props.name}</Text>
          </View>
          <View style={{margin: 20}}>
            <Icon name='arrow-right' size={20} color="#7d7d7d" />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SubcategoryBox;