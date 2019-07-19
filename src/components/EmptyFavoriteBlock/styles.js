import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 25,
    flexWrap: 'wrap',
    justifyContent: "center",
    alignItems: "center"
  },
  Text: {
    fontSize: 16,
    fontFamily: "MyriadPro",
    color: "#AAAAAA"
  }
});

export default styles;
