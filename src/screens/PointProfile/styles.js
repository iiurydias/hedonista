import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    backgroundColor: '#7049f9',
    flex: 1
  },
  Map: {
    height: '20%',
  },
  Info: {
    height: '20%',
    top: -20,
    backgroundColor: '#7049f9',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,

  },
  Comments: {
    height: '60%',
    backgroundColor: '#EEE',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
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
    height: '50%',
    padding: 20
  },
  Metrics: {
    height: '50%',
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
    fontSize: 15,
    fontFamily: "MyriadPro",
    color: '#525252'
  },
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    //paddingRight: 30,
  },
  ButtonBox: {
    width: '20%',
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  Button2: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: "#623CEA"
  },
  BottomContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 20
  },
  InputContainer: {
    width: '80%',
    justifyContent: "flex-end",

  }
});

export default styles;
