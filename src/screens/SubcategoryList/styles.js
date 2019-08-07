import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window')
const styles = StyleSheet.create({
  Greetings:{
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 25,
    color: '#FFF'
  },
  H1:{
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 10,
    color: '#dcdcdc'
  },
});

export default styles;
