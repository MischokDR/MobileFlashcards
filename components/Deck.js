import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from "react-native";
import { getAllDecks } from '../actions'
export default class Deck extends Component {

  render() {
    return (
      <View style={styles.deck}>
          <Text style={styles.title}>{this.props.title}</Text>
          {this.props.number > 1 || this.props.number === 0
            ? <Text style={styles.number}>{this.props.number} Cards</Text>
            : <Text style={styles.number}>{this.props.number} Card</Text>
          }
      </View>
    );
  }
}

const styles=StyleSheet.create({
  deck:{
    alignItems: 'center',
    margin: 5,
    backgroundColor: 'black',
    borderRadius: 3,
  },
  title: {
    fontSize: 40,
    fontWeight: "400",
    color: 'white',
    marginTop: 20,
  },
  number: {
    fontSize: 20,
    fontWeight: "200",
    color: 'white',
    marginBottom: 20,
  }
})