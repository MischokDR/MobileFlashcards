import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from "react-redux";

class DeckDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.title}>{this.props.title}</Text>
          {console.log(this.props.title)}
          {this.props.number > 0
            ? <Text style={styles.text}>{this.props.number} Cards</Text>
            : <Text style={styles.text}>{this.props.number} Card</Text>
          }
        </View>
        <View style={styles.add}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddCard")}
          >
            <Text style={styles.text}>Add Card</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.start}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Quiz")}
          >
            <Text style={styles.text}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.delete}>
          <TouchableOpacity
          >
            <Text style={styles.text}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  deck: {
    alignItems: 'center',
    width: 325,
    margin: 20,
    marginBottom: 25,
    padding: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 3
  },
  title: {
    fontSize: 40,
    fontWeight: '400',
  },
  text: {
    fontSize: 20,
    fontWeight: "200",
    textAlign: 'center'
  },
  add: {
    width: 325,
    margin: 20,
    padding: 40,
    backgroundColor: 'green',
    borderRadius: 3
  },
  start: {
    width: 325,
    margin: 20,
    padding: 40,
    backgroundColor: 'yellow',
    borderRadius: 3
  },
  delete: {
    width: 325,
    margin: 10,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 3
  }
})

// function mapStateToProps({ title, questions, number }) {
//   return {
//     title,
//     questions,
//     number,
//   }
// }

export default (DeckDetail)