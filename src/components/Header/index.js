import React, { Component } from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as destinationActions from "../../actions/destination";
import * as durationActions from "../../actions/duration";
import * as distanceActions from "../../actions/distance";
import * as clickedActions from "../../actions/clicked";

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <StatusBar backgroundColor="#623CEA" />
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