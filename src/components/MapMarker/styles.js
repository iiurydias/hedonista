import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    height: 70,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  circle:{
    height: 42,
    width: 42,
    backgroundColor: '#6646EB',
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
    bottom: -16
  },
  smallCircle:{
    height: 32,
    width: 32,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  triangle: {
    width: 0,
     height: 0,
     backgroundColor: 'transparent',
     borderStyle: 'solid',
     borderTopWidth: 29,
     borderRightWidth: 20,
     borderBottomWidth: 0,
     borderLeftWidth: 20,
     borderTopColor: '#6646EB',
     borderRightColor: 'transparent',
     borderBottomColor: 'transparent',
     borderLeftColor: 'transparent',
     
  },
});

export default styles;