import React, { Component, Fragment } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView, AsyncStorage } from "react-native";
import SubcategoryBox from "../../components/SubcategoryBox";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/FontAwesome5";
import Add from "../../components/Add";
import styles from "./styles";
import Loading from '../../components/Loading';

class SubcategoryList extends Component {
  state = {
    data: [],
    visibleModal: false,
    token: ""
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true
  }
  _getToken = async () => {
    const token = await AsyncStorage.getItem('userToken');

    this.setState({ token: token })
  }
  async getData() {
    try {
      const response = await fetch('http://hedonista-com-br.hostoo.net/api/getSubcategories?token=' + this.state.token + '&category_id=' + this.props.navigation.getParam('categoryId'));
      const result = await response.json();
      if (result.success) {
        this.setState({ data: result.data });
      } else {
        Alert.alert("Erro", "Falha interna");
      }
    } catch (error) {
      Alert.alert("Erro", "Verifique sua conexão.");
    }
  }
  async componentDidMount() {
    this.setState({ visibleModal: true });
    await this._getToken();
    await this.getData();
    this.setState({ visibleModal: false });
    this.props.navigation.addListener('willFocus',this._handleStateChange);
  }
  _handleStateChange = async () => {
    this.setState({ visibleModal: true });
    await this.getData();
    this.setState({ visibleModal: false });
  };
  render() {
    const categoryId = this.props.navigation.getParam('categoryId');
    const token = this.props.navigation.getParam('token');

    return (
      <Fragment>
        <Loading visible={this.state.visibleModal} />
        <Header
          left={<TouchableOpacity activeOpacity={0.7} onPress={this.handleBackPress} ><Icon name="arrow-left" color="#fff" size={25} /></TouchableOpacity>}
          center={
            <Text style={{ fontFamily: "MyriadPro", color: "#FFF" }}>
              SUBCATEGORIAS
            </Text>
          }
        />
        <ScrollView style={{ flex: 1, backgroundColor: '#7049f9' }} contentContainerStyle={{flex: 1}}>
          <View style={{ padding: 20, paddingBottom: 0 }}>
            <Text style={[styles.Greetings, { fontWeight: 'bold' }]} >Escolha uma </Text>
            <Text style={styles.Greetings} >subcategoria:</Text>
          </View>
          <View style={{ padding: 20, paddingTop: 0, paddingRight: 40, paddingBottom: 10 }}>
            <Text style={styles.H1}>Você pode entrar
          em uma delas para vizualizar os pontos ou criar uma nova através do botão no canto inferior direito da tela.</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#EEEEEE', padding: 30, borderTopStartRadius: 50, height: '100%' }}>
            <View>
              {this.state.data.length > 0 ?
                (this.state.data.map(
                  p =>
                    <SubcategoryBox key={p.id} name={p.name} />
                ))
                :
                <SubcategoryBox />
              }
            </View>
          </View>
        </ScrollView>
        <View style={{ alignItems: 'flex-end', position: 'absolute', bottom: 0, right: 0, justifyContent: 'flex-end' }}>
          <Add onPress={() => { this.props.navigation.navigate('NewSubcategory', { categoryId: categoryId, token: token }) }} />
        </View>
      </Fragment>
    );
  }

}
export default SubcategoryList;
