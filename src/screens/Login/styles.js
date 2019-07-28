import { StyleSheet,Dimensions } from "react-native";

const {width: WIDTH} = Dimensions.get('window')
const styles = StyleSheet.create({
  Container:{
    height: '100%',
    flex: 1,
    marginBottom: 20,
    marginTop: 20
  },
  inputContainer:{
    width: WIDTH - 70,
    borderBottomWidth: 1,
    //borderRadius: 20,
    //shadowColor: "#000",
    //shadowOffset: {
     // width: 0,
     // height: 1,
    //},
    //shadowOpacity: 0.22,
    //shadowRadius: 2.22,
    //elevation: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 15    
    },
  emailInput:{
    fontFamily: "MyriadPro",
    width: '90%',
    //backgroundColor: '#FFF',
    //borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    color: '#FFF',
    opacity: 0.7
  },
  passInput:{
    fontFamily: "MyriadPro",
    width: '75%',
    //backgroundColor: '#FFF',
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
  logo:{
    fontFamily: "MyriadPro",
    fontSize: 30,
    color: '#FFF'
  },
  logoContainer:{
    marginBottom: 20
  },
  Button:{
    backgroundColor: '#FFF',
    borderRadius: 40,
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
    width: WIDTH - 55,
    marginTop: 25
  },
  createAccountContainer:{
    height: 45,
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "flex-end",
  },
  eyeBtn:{
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
