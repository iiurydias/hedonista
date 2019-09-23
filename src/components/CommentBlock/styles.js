import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    borderTopStartRadius: 0,
    //borderBottomEndRadius: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 15,
    //paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexWrap: 'wrap',
    width: '100%'
  },
  Author: {
    fontSize: 15,
    fontFamily: "MyriadPro",
    color: "#6646EB"
  },
  Comment:{
    fontSize: 14,
    fontFamily: "MyriadPro",
    color: '#AAAAAA',
    marginTop: 3,
    marginBottom: 5
  },
  Date:{
    fontSize: 8,
    fontFamily: "MyriadPro",
    color: '#AAAAAA'
  },
  InfoContainer:{
    width: '80%',
    //paddingLeft: 10
  },
  //IconContainer:{
   // width: '20%',
   // justifyContent: "center",
   // alignItems: "center",
   // padding: 5
  //},
 // icon:{
   // width: "100%",
    //height: "100%",
   // resizeMode: "contain",
    //position: "absolute",
   // zIndex: 9999
  //},
});

export default styles;
