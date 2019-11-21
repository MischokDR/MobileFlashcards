import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

changeTo = (state) => {
    if(state.type=='question'){
      this.setState(() => ({
        type: 'answer'
      }))
    }
    if(state.type=='answer'){
      this.setState(() => ({
        type: 'question'
      }))
    }
}

export default class Quiz extends Component {
  state = {
    type: 'question'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.text}>QUESTION/ANSWER CARD</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.correct}>
            <View>
              <Text style={styles.text}>Correct</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.incorrect}>
              <Text style={styles.text}>Incorrect</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  correct: {
    width: 325,
    margin: 20,
    padding: 40,
    backgroundColor: 'green',
    borderRadius: 3
  },
  incorrect: {
    width: 325,
    margin: 20,
    padding: 40,
    backgroundColor: 'red',
    borderRadius: 3
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '200'
  },
  card: {
    width: 325,
    margin: 20,
    marginBottom: 70,
    padding: 40,
    backgroundColor: 'silver',
    borderRadius: 3
  }
})