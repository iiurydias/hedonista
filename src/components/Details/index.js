import React, { Component, Fragment } from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Details extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.MainInfoContainer}>
          <View style={styles.Info}>
            <Text style={styles.Title} numberOfLines={2}>{this.props.title}</Text>
            <Text style={styles.Address} numberOfLines={1}>{this.props.address}</Text>
          </View>
          <View style={styles.ArrowContainer}>
            <TouchableOpacity
              onPress={this.props.onPress}
            >
              <Icon name="chevron-right" size={30} color="#623CEA" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.InfoContainer}>
          <View style={styles.Details}>
            <Text style={styles.InfoComponent}>{this.props.distance}</Text>
            <Text style={styles.Description}>Km</Text>
          </View>
          <View style={styles.Separator}></View>
          <View style={styles.Details}>
            <Text style={styles.InfoComponent}>{this.props.duration}</Text>
            <Text style={styles.Description}>
              {this.props.duration > 1 ? "Minutos" : "Minuto"}
            </Text>
          </View>
          {parseFloat(this.props.distance) < 20 &&
            <Fragment>
              <View style={styles.Separator}></View>
              <View style={styles.ButtonContainer}>
                <TouchableOpacity
                  style={styles.Button}
                  onPress={this.props.onDirectionButtonPress}
                >
                  <Icon name="route" size={30} color="#FFF" />
                </TouchableOpacity>
              </View>
            </Fragment>
          }
        </View>
      </View>
    );
  }
}
