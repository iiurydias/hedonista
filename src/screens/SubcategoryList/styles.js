import { StyleSheet, Dimensions } from "react-native";

const { width: WIDTH } = Dimensions.get('window')
const styles = StyleSheet.create({
  Greetings: {
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 25,
    color: '#FFF'
  },
  H1: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontFamily: "MyriadPro",
    fontSize: 10,
    color: '#dcdcdc'
  },
  inputContainer: {
    width: WIDTH - 70,
    borderBottomWidth: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    margin: 15
  },
  BottomContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#b7b7b7'
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
    fontSize: 15,
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
  InputContainer: {
    width: '90%',
    justifyContent: "flex-end",
  }
});

export default styles;
