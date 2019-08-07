import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

class SubcategoryBox extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.9} style={styles.Container}>
        <View style={styles.FirstLevel}>
          <View style={styles.SecondLevel}>
            <View style={styles.ThirdLevel}>
              <Text numberOfLines={2} style={styles.Title}>{this.props.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SubcategoryBox;