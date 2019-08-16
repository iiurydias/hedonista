import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#7049f9'
  },
  Map: {
    height: 130,
    flex: 1
  },
  Info: {
    //height: '20%',
    top: -20,
    backgroundColor: '#7049f9',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    //justifyContent: "center",
    //alignItems: "center",
  },
  Comments: {
    flexGrow: 1,
    padding: 10,
    paddingBottom: 0,
    //height: '60%',
    //flex: 1,
    backgroundColor: '#EEE',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  Title: {
    fontSize: 20,
    fontFamily: "MyriadPro",
    color: "white"
  },
  Address: {
    fontSize: 10,
    fontFamily: "MyriadPro",
    color: "#CCC"
  },
  Label: {
    fontSize: 8,
    fontFamily: "MyriadPro",
    color: "#BBB"
  },
  Value: {
    fontSize: 15,
    fontFamily: "MyriadPro",
    color: "white"
  },
  MainInfo: {
    //height: '50%',
    padding: 20
  },
  Metrics: {
    //height: '50%',
    flexDirection: 'row',
    width: '100%'
  },
  Data: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    backgroundColor: '#FFF',
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  btnTxt: {
    fontFamily: "MyriadPro",
    fontSize: 13,
    color: '#7049f9',
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  SmallCircle: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: '#7049f9',
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 0

  },
  buttonContainer: {
    width: '50%',
    justifyContent: "center",
    alignItems: "center",
  },
  H1: {
    margin: 20,
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: '#999999'
  },
  InputComment: {
    borderColor: '#c6c6c6',
    borderWidth: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 12,
    fontFamily: "MyriadPro",
    color: '#525252'
  },
  ButtonBox: {
    width: '10%',
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  BottomContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderTopWidth: 1, 
    borderColor: '#b7b7b7'
  },
  InputContainer: {
    width: '90%',
    justifyContent: "flex-end",
  }
});

export default styles;
