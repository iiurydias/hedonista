import React, { Component } from 'react';
import { Platform, Text, View, Modal, ActivityIndicator } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Loading extends Component {
     render(){
        return(
              <Modal visible={this.props.visible} onRequestClose = {() => {}} transparent>
                <View style={styles.contain}>
                  <View style={styles.boxIndicador}>  
                     <ActivityIndicator size="small" color="#ED6650" />
                  </View>
                </View>
              </Modal>
        );
     }

}