import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  Content:{
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#623CEA"
  }
});

export default styles;