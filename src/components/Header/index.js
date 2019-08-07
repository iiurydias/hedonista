import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles";

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <StatusBar backgroundColor="#7049f9" />
          <View style={styles.left}>
            {this.props.left}
          </View>

          <View style={styles.center}>
            {this.props.center}
          </View>

          <View style={styles.right}>
            {this.props.right}
          </View>
        </View>
      </View>
    );
  }
}

export default Header;