import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    flexDirection: "row",
    backgroundColor: "#7049f9",
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%'
  },
  left:{
    width: '20%',
    alignItems: "flex-start",
    justifyContent: "center"
  },
  center:{
    width: '60%',
    alignItems: "center",
    justifyContent: "center"
  },
  right:{
    width: '20%',
    alignItems: "flex-end",
    justifyContent: "center"
  },
});

export default styles;