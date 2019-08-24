import { StyleSheet,Dimensions } from "react-native";

const {width: WIDTH} = Dimensions.get('window')
const styles = StyleSheet.create({
  Container:{
    height: '100%',
    flex: 1,
    marginBottom: 20,
    marginTop: 20,
    padding: 40,
    paddingTop:0
  },
  inputContainer:{
    width: '100%',
    borderBottomWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 15
    },
  emailInput:{
    fontFamily: "MyriadPro",
    width: '90%', 
    padding: 10,
    paddingLeft: 20,
    color: '#FFF',
    opacity: 0.7
  },
  passInput:{
    fontFamily: "MyriadPro",
    width: '75%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 10,
    paddingLeft: 20,
    color: '#FFF'
  },
  inputIcon:{
    width: '10%',
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer:{
    width: '100%',
    marginBottom: 10,
    backgroundColor: 'red'
  },
  Button:{
    backgroundColor: '#FFF',
    borderRadius: 23,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt:{
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: '#7049f9'
  },
  bottomContainer:{
    width: '100%',
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  createAccountTxt:{
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: '#FFF',
    padding: 10,
  },
  invalid:{
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: '#d64541',
    padding: 10,
  },
  buttonContainer:{
    width: '100%',
    marginTop: 25
  },
  createAccountContainer:{
    height: 45,
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  eyeBtn:{
    width: '15%',
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingRight: 20
  },
  logo: {
    width: '100%',
    resizeMode: "contain"
  },
  logoBox: {
    width: '100%',
    paddingLeft: 60,
    paddingRight: 60,
  }
});

export default styles;
