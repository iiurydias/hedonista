import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#d64541',
    height: 80,
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
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  Title: {
    fontSize: 16,
    fontFamily: "MyriadPro",
    color: "#6646EB"
  },
  Address:{
    fontSize: 12,
    fontFamily: "MyriadPro",
    color: '#AAAAAA'
  },
  IconContainer:{
    width: '100%',
    justifyContent: "center",
    alignItems: "flex-end",
  }
});

export default styles;
