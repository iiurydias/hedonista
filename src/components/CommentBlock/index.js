import React, { Component } from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class CommentBlock extends Component {
  state = {
    author: '',
    comment: '',
    date: '',
    gender: ''
  }
  componentDidMount() {
    let author = '@' + this.props.author.replace(' ', '').toLowerCase();
    let date = this.format(this.props.date);
    let gender = this.props.gender;
    this.setState({ author: author, comment: this.props.comment, date: date, gender: gender });
  }
  format($date) {
    var data = $date.replace(/-/g, "/");
    data = new Date(data);
    var day = data.getDate();
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    var year = data.getFullYear();
    return day + ' de ' + month + ' de ' + year
  }
  render() {
    return (
      <View style={{ flex: 1, width: '100%', marginBottom: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '50%', flexDirection: 'row' }}>
            <Text style={styles.Author} numberOfLines={1}>{this.state.author}</Text>
          </View>
          <View style={{ width: '50%', justifyContent: "flex-end", alignItems: "flex-end", paddingRight: 5 }}>
            <Text style={styles.Date}>{this.state.date}</Text>
          </View>
        </View>
        <View style={styles.Container}>
            <Text style={styles.Comment}>{this.state.comment}</Text>
        </View>
      </View>
    );
  }
}
