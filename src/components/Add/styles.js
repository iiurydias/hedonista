import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Button: {
    position: 'absolute',
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    margin: 15,
    paddingRight: 15,
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
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#623CEA"
  }
});

export default styles;