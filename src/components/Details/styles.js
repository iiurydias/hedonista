import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#FFF",
    height: 180,
    width: "100%",
    position: "absolute",
    top: 0,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#DDD",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  MainInfoContainer:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 40,
    paddingRight: 40,
    height: '60%',
    justifyContent: "center",
    alignItems: "center"
  },
  Info: {
    width: '90%'
  },
  ArrowContainer: {
    width: '10%',
    height: '100%',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  Title: {
    fontFamily: "MyriadPro",
    fontSize: 20,
    color: "#171D33"
  },
  Address: {
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: "#BBBFC6"
  },
  Details: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30
  },
  Description: {
    fontSize: 12,
    fontFamily: "MyriadPro",
    color: "#BABFC5"
  },
  InfoContainer:{
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    height: "40%"
  },
  InfoComponent: {
    fontSize: 20,
    fontFamily: "MyriadPro",
    color: "#6646EB"
  },
  Separator:{
    borderLeftWidth:1,
    height: "80%", 
    borderColor: "#CCCCCC"
  },
  Marker: {
    marginTop: 2,
    marginRight: 0,
    paddingRight: 0
  },
  ButtonContainer:{
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 30,
    //paddingRight: 30
  },
  Button: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#623CEA"
  }
});

export default styles;
