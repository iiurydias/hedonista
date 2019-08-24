import React, { Component, Fragment } from 'react';
import { View, Text, Alert, TouchableOpacity, ScrollView, TextInput, BackHandler } from "react-native";
import SubcategoryBox from "../../components/SubcategoryBox";
import Header from "../../components/Header";
import Icon from "react-native-vector-icons/FontAwesome5";
import Add from "../../components/Add";
import styles from "./styles";
import Loading from '../../components/Loading';
import { Icon as IconElements } from "react-native-elements";
import api from '../../services/api';

class SubcategoryList extends Component {
  state = {
    data: [],
    visibleModal: false,
    token: "",
    toCreate: false,
    subcategoryName: ''
  }
  handleBackPress = () => {
    this.props.navigation.goBack();
    return true
  }
  subcategoryInputChange = (text) => {
    this.setState({ subcategoryName: text })
  }

  async getData() {
    try {
      const response = await fetch(api + '/subcategories?category_id=' + this.props.navigation.getParam('categoryId'), {
        headers: {
          token: this.props.navigation.getParam('token')
        }
      });
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
  validate = () => {
    if (this.state.subcategoryName == "" || this.state.subcategoryName.length < 2) {
      Alert.alert("Erro", 'Por favor, preencha os campos corretamente')
      return false
    }
    return true
  }
  _postSubcategory = async () => {
    if (this.validate()) {
      this.setState({ visibleModal: true });
      await this.createSubcategory();
      this.setState({ toCreate: false, visibleModal: false, subcategoryName: "" });
    }
  }
  async createSubcategory() {
    let data = new FormData();
    data.append("name", this.state.subcategoryName);
    data.append("category_id", parseInt(this.props.navigation.getParam('categoryId')));
    try {
      const response = await fetch(api + '/subcategory', {
        method: 'POST',
        headers: {
          token: this.props.navigation.getParam('token')
        },
        body: data
      });
      const result = await response.json();
      if (result.success) {
        this.setState({ data: [...this.state.data, result.data]  });
      } else {
        Alert.alert("Erro", JSON.stringify(result));
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
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    if (this.state.toCreate) {
      this.setState({ toCreate: false });
        return true
    } else { this.props.navigation.goBack();  return true }
  }
  _handleStateChange = async () => {
    this.setState({ visibleModal: true });
    await this.getData();
    this.setState({ visibleModal: false });
  };
  render() {
    const icon = this.props.navigation.getParam('icon');
    const token = this.props.navigation.getParam('token'); 
    const userId = this.props.navigation.getParam('userId'); 

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
        <ScrollView keyboardShouldPersistTaps='always' showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: '#7049f9' }} contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ padding: 20, paddingBottom: 0 }}>
            <Text style={[styles.Greetings, { fontWeight: 'bold' }]} >Escolha uma </Text>
            <Text style={styles.Greetings} >subcategoria:</Text>
          </View>
          <View style={{ padding: 20, paddingTop: 0, paddingRight: 40, paddingBottom: 10 }}>
            <Text style={styles.H1}>Você pode entrar
          em uma delas para vizualizar os pontos ou criar uma nova através do botão no canto inferior direito da tela.</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#EEEEEE', padding: 30, paddingLeft: 70, paddingRight: 0, borderTopStartRadius: 50, height: '100%' }}>
            <View>
              {this.state.data.length > 0 ?
                (this.state.data.map(
                  p =>
                    <SubcategoryBox key={p.id} name={p.name} onPress={() => {
                      this.props.navigation.navigate('Points', 
                      { 
                        subcategoryId: p.id, 
                        token: token, 
                        icon: icon,
                        userId: userId,
                        name: p.name
                      })
                    }} />
                ))
                :
                <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', padding: 30 }}>
                  <Text style={{ fontFamily: "MyriadPro", fontSize: 15, color: '#7d7d7d' }}>Nenhuma subcategoria encontrada, crie uma nova agora mesmo!</Text>
                </View>
              }
            </View>
          </View>
        </ScrollView>
        {!this.state.toCreate ?
          <View style={{ alignItems: 'flex-start', position: 'absolute', bottom: 0, left: 0, justifyContent: 'flex-start' }}>
            <Add onPress={() => { this.setState({ toCreate: true }) }} />
          </View>
          :
          <View style={styles.BottomContainer}>
            <View style={styles.InputContainer}>
              <TextInput
                multiline={true}
                maxHeight={60}
                maxLength={200}
                style={styles.InputComment}
                onChangeText={this.subcategoryInputChange}
                placeholder="Nome da subcategoria"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.ButtonBox}
              onPress={this._postSubcategory}
            >
              <IconElements name="plus" type="font-awesome" size={20} iconStyle={{ color: "#623CEA" }} />
            </TouchableOpacity>
          </View>
        }
      </Fragment>
    );
  }

}
export default SubcategoryList;
