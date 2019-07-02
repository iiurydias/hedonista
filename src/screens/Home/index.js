import React, { Component, Fragment } from "react";
import Header from "../../components/Header";
import FavoriteBlock from "../../components/FavoriteBlock";
import { View, Text, ScrollView } from "react-native";
import CategoryBox from "../../components/CategoryBox";
import styles from "./styles";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header
          center={
            <Text style={{ fontFamily: "MyriadPro", color: "#FFF" }}>
              HEDONISTA
            </Text>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flex: 1 }} style={styles.Container2}>
          <View style={styles.Container}>
            <View style={styles.Text}>
              <Text style={styles.Greetings} >Olá,</Text>
              <Text style={styles.Name}>Iury Dias</Text>
            </View>
            <Text style={styles.H1}>Escolha uma categoria</Text>
            <View>
              <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                <CategoryBox icon='utensils' title='Comida' pointNumber='153' />
                <CategoryBox icon='umbrella-beach' title='Lazer' pointNumber='63' />
                <CategoryBox icon='building' title='Estadia' pointNumber='20' />
                <CategoryBox icon='utensils' title='Comida' pointNumber='153' />
                <CategoryBox icon='utensils' title='Comida' pointNumber='153' />
                <CategoryBox icon='utensils' title='Comida' pointNumber='153' />
              </ScrollView>
            </View>
            <Text style={styles.H1}>Meus pontos favoritos</Text>
          </View>
          <View style={styles.FavoriteContainer}>
              <ScrollView style={styles.FavoriteBlock}>
                <FavoriteBlock />
                <FavoriteBlock />
                <FavoriteBlock />
                <FavoriteBlock />
                <FavoriteBlock />
              </ScrollView>
          </View>
        </ScrollView>
      </Fragment>
    );
  }
}
export default Home;