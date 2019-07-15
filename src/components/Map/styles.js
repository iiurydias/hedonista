import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 40,
      width: '100%'
    },
    textInputContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      height: 45,
      marginHorizontal: 20,
      borderTopWidth: 0,
      borderBottomWidth: 0
    },
    textInput: {
      fontFamily: "MyriadPro",
      height: 45,
      margin: 0,
      borderRadius: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { x: 0, y: 0 },
      shadowRadius: 15,
      borderWidth: 1,
      borderColor: "#DDD",
      fontSize: 13,
      borderRadius: 20
    },
    listView: {
      borderWidth: 1,
      borderColor: "#DDD",
      backgroundColor: "#FFF",
      marginHorizontal: 20,
      elevation: 5,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { x: 0, y: 0 },
      shadowRadius: 15,
      margin: 7
    },
    description: {
      fontFamily: "MyriadPro",
      fontSize: 13,
    },
    row: {
      padding: 13,
      height: 51
    },
});

export default styles;
