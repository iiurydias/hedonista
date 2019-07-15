import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles";

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <StatusBar backgroundColor="#7049f9" />
          <View>
            {this.props.left}
          </View>

          <View>
            {this.props.center}
          </View>

          <View>
            {this.props.right}
          </View>
        </View>
      </View>
    );
  }
}

export default Header;