import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Deck extends Component {
  render() {
    return (
      <View style={styles.deck}>
          <Text style={styles.title}>{this.props.title}</Text>
          {this.props.number > 1
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
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 60,
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
