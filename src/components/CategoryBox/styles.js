import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Container:{
    margin: 8
  },
  FirstLevel:{
    backgroundColor: '#7049f9',
    width: 110,
    height: 150,
    borderRadius: 13,
    resizeMode: 'contain'
  },
  SecondLevel:{
    backgroundColor: '#7950ff',
    width: '90%',
    height: 150,
    borderRadius: 13,
    resizeMode: 'contain'
  },
  ThirdLevel:{
    backgroundColor: '#8157ff',
    width: '85%',
    height: 150,
    borderRadius: 13,
    resizeMode: 'contain',
    flexWrap: 'wrap'
  },
  Title:{
    fontFamily: "MyriadPro",
    fontSize: 15,
    color: 'white'
  },
  PointNumber:{
    fontFamily: "MyriadPro",
    fontSize: 10,
    color: '#AAAAAA'
  },
  CategoryInfo:{
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
  },
  CategoryIcon:{
    margin: 10,
    marginTop: 15,
    marginBottom: 40
  }
});

export default styles;
