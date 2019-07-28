import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window')
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#EEEEEE',
    height: '100%',
    paddingBottom: 20,
    paddingTop: 20
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
  logoContainer: {
    borderRadius: (WIDTH * 0.2) / 2,
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
    backgroundColor: '#7049f9',
    opacity: 0.3,
    marginBottom: 20,
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
  },
  buttonContainer: {
    width: WIDTH - 55,
    marginTop: 25
  },
  autocomplete:{
    width: WIDTH - 70,
    margin: 15
  },
  Map:{
    width: WIDTH - 70,
    height: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

  },
  container: {
    borderWidth: 0
  },
  textInputContainer: {
  
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: "#7049f9",
    paddingRight: 10
  },
  textInput: {
    backgroundColor: 'transparent',
    fontFamily: "MyriadPro",
    color: '#7049f9',
    fontSize: 13,
  },
  listView: {
    borderBottomWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#7049f9",
    opacity: 0.5,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
    marginTop: 7,
    paddingRight: 10,
    borderRadius: 10
  },
  description: {
    fontFamily: "MyriadPro",
    color: "#FFF"
  },
  row: {
    padding: 13,
    height: 51
  },
});

export default styles;
