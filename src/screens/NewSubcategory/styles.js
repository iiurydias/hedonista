import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window')
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#EEEEEE',
    paddingBottom: 20,
    paddingTop: 20,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    flex: 1,
    borderTopStartRadius: 50,
  },
  inputContainer: {
    width: WIDTH - 70,
    borderBottomWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 15
  },
  input: {
    fontFamily: "MyriadPro",
    width: '90%',
    padding: 10,
    paddingLeft: 20,
    opacity: 0.7
  },
  inputIcon: {
    width: '10%',
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    backgroundColor: '#7049f9',
    borderRadius: 40,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  btnTxt: {
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: '#FFF'
  },
  bottomContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  buttonContainer: {
    width: WIDTH - 55,
    marginTop: 25
  },
  Greetings: {
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 25,
    color: '#FFF'
  },
});

export default styles;
