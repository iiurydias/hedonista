import React, { Component } from "react";
import Map from "../../components/Map";
import { Provider } from "react-redux";
import store from "../../store";
import Header from "../../components/Header";
import Reset from "../../components/Reset";
import { View, Text, BackHandler, Alert } from "react-native";
import Loading from '../../components/Loading';

class Points extends Component {
  state = {
    markers: [],
    visibleModal: false
  }
  async getData() {
    try {
      const response = await fetch(api + '/pointsbysubcategory?subcategory_id=' + this.props.navigation.getParam('subcategoryId'), {
        headers: {
          token: this.props.navigation.getParam('token')
        }
      });
      const result = await response.json();
      if (result.success) {
        this.setState({ markers: result.data });
      } else {
        Alert.alert("Erro", "Falha interna");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  async componentDidMount() {
    this.setState({ visibleModal: true });
    await this.getData();
    this.setState({ visibleModal: false });
    this.props.navigation.addListener('willFocus', this._handleStateChange);
  }
  _handleStateChange = async () => {
    this.setState({ visibleModal: true });
    await this.getData();
    this.setState({ visibleModal: false });
  };
  render() {
    const icon = this.props.navigation.getParam('icon');
    const userId = this.props.navigation.getParam('userId');
    const subcategoryId = this.props.navigation.getParam('subcategoryId');
    const token = this.props.navigation.getParam('token');
    const name = this.props.navigation.getParam('name').toUpperCase();

    return (
      <Provider store={store}>
        <Loading visible={this.state.visibleModal} />
        <Header
          left={<Reset navigation={this.props.navigation} navigate={() => this.props.navigation.goBack()} backHandler={BackHandler} />}
          center={
            <Text style={{ fontFamily: "MyriadPro", color: "#FFF" }}>
              {name}
            </Text>
          }
        />
        <Map userId={userId} token={token} subcategoryId={subcategoryId} markers={this.state.markers} icon={icon} navigation={this.props.navigation} />
      </Provider>
    );
  }
}


export default Points;