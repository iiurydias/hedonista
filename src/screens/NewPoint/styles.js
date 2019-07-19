import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window')
const styles = StyleSheet.create({
  MainContainer: {
    //backgroundColor: '#7049f9',
    height: '100%',
    marginBottom: 20,
    marginTop: 20
    //flex: 1
  },
  inputContainer: {
    width: WIDTH - 70,
    borderBottomWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 15,
    //backgroundColor: 'blue',
  },
  input: {
    fontFamily: "MyriadPro",
    width: '90%',
    //backgroundColor: 'red',
    //borderRadius: 20,
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
    backgroundColor: '#FFF',
    opacity: 0.3,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Button: {
    backgroundColor: '#FFF',
    borderRadius: 40,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: '#7049f9'
  },
  bottomContainer: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountTxt: {
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: '#FFF',
    padding: 10,
  },
  buttonContainer: {
    width: WIDTH - 55,
    marginTop: 25
  },
  createAccountContainer: {
    height: 45,
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  autocomplete:{
    //flex: 1,
    width: WIDTH - 70,
    margin: 15,
    //backgroundColor: 'red'
  },
  Map:{
    width: WIDTH - 70,
    height: 250,
  },
  container: {
    borderWidth: 0,
    //backgroundColor: 'red',

  // flex: 1,
    //width: '100%',
    //padding: 25,
    //paddingLeft: 20,
  },
  textInputContainer: {
  
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: "#FFF",
    paddingRight: 10,

    //height: 45,
    //marginHorizontal: 20,
    //borderTopWidth: 0,
    //borderBottomWidth: 0,
    //width: '100%',
  },
  textInput: {
    backgroundColor: 'transparent',
    fontFamily: "MyriadPro",
    color: '#FFF',
    fontSize: 13,
    
  },
  listView: {
    borderBottomWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#FFF",
    opacity: 0.5,
    //marginHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { x: 0, y: 0 },
    shadowRadius: 15,
    margin: 7,
    paddingRight: 10
  },
  description: {
    fontFamily: "MyriadPro",
    //fontSize: 13,
    color: "#000"
  },
  row: {
    padding: 13,
    height: 51
  },
});

export default styles;
