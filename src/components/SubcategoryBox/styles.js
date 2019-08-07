import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container:{
    margin: 8
  },
  FirstLevel:{
    backgroundColor: '#c2c2c2',
    width: '100%',
    height: 80,
    borderRadius: 20,
    resizeMode: 'contain'
  },
  SecondLevel:{
    backgroundColor: '#cccccc',
    width: '90%',
    height: 80,
    borderRadius: 20,
    resizeMode: 'contain'
  },
  ThirdLevel:{
    backgroundColor: '#d6d6d6',
    width: '85%',
    height: 80,
    borderRadius: 20,
    resizeMode: 'contain',
    flexWrap: 'wrap',
    justifyContent: "center",
    padding: 20
  },
  Title:{
    fontFamily: "MyriadPro",
    fontSize: 18,
    color: '#7d7d7d'
  }
});

export default styles;
