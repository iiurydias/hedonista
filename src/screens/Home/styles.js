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
    margin: 20
  },
  Greetings:{
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 25,
    color: '#7049f9'
  },
  Name:{
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 20,
    color: '#7049f9'
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
    paddingLeft: 35,
    paddingRight: 35,
    backgroundColor: '#6746EC',
    height: '100%',
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    flex: 1
  },
  btnDelete:{
    width: "100%",
    paddingLeft: 5,
    height: 80,
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  txtDeletar:{
    fontFamily: "MyriadPro",
    color: "#fff",
    marginLeft: 10,
    
  },
});

export default styles;
