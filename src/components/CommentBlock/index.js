import React, { Component } from "react";
import styles from "./styles";
import { View, Text, Image } from "react-native";

export default class CommentBlock extends Component {
  state = {
    author: '',
    comment: '',
    date: '',
    gender: ''
  }
  componentDidMount() {
    let author = '@' + this.props.author.replace(' ', '').toLowerCase();
    let comment = '"' + this.props.comment + '"';
    let date = this.format(this.props.date);
    let gender = this.props.gender;
    this.setState({ author: author, comment: comment, date: date, gender: gender });
  }
  format(date) {
    var data = date;
    data = new Date(data);
    var day = data.getDay();
    var month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][data.getMonth()];
    var year = data.getFullYear();
    return day + ' de ' + month + ' de ' + year
  }
  render() {
    return (
      <View>
        <View style={styles.Container}>
          <View >
            <View >
              <Text style={styles.Author} numberOfLines={1}>{this.state.author}</Text>
              <Text style={styles.Comment} numberOfLines={2}>{this.state.comment}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.Date}>{this.state.date}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
