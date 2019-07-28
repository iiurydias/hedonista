import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window')
const styles = StyleSheet.create({
  Container: {
    //backgroundColor: '#7049f9',
    height: '100%',
    flex: 1,
    marginBottom: 20,
    marginTop: 20
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
    color: '#FFF',
    //backgroundColor: '#FFF',
    //borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    opacity: 0.7
  },
  nameContainer:{
    flexDirection: 'row', 
    width: '45%',
    borderBottomWidth: 1
  },
  inputName: {
    fontFamily: "MyriadPro",
    width: '80%',
    padding: 10,
    paddingLeft: 20,
    opacity: 0.7
  },
  inputIcon: {
    width: '10%',
    justifyContent: "center",
    alignItems: "center",
  },
  inputIconName:{
    width: '20%',
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
  eyeBtn: {
    //backgroundColor: 'white',
    width: '15%',
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: 20
  }
});

export default styles;
