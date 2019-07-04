import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  FavoriteBlock:{
   top: -15
  },
  Container2:{
    backgroundColor: '#EEEEEE',
    height: '100%',
    flexGrow: 1
  },
  Container:{
    padding: 20
  },
  Greetings:{
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 25,
    color: '#603DEB'
  },
  Name:{
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 20,
    color: '#603DEB'
  },
  H1:{
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: '#999999'
  },
  FavoriteContainer:{
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: '#6746EC',
    height: '100%',
    borderTopStartRadius: 80,
    borderTopEndRadius: 80,
    flex: 1
  }
});

export default styles;
