import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container:{
    margin: 8,
    marginRight: 0
  },
  FirstLevel:{
    backgroundColor: '#c2c2c2',
    flexDirection: 'row',
    width: '100%',
    //width: 'auto',
    height: 80,
    borderBottomLeftRadius:40,
    borderTopLeftRadius:40,
    padding: 30,
    justifyContent: "space-between",
     alignItems: 'center'
    //resizeMode: 'contain'
  },
  Title:{
    fontFamily: "MyriadPro",
    fontSize: 18,
    color: '#7d7d7d'
  }
});

export default styles;
