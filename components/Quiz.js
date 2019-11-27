import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { getDeck } from "../actions";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class Quiz extends Component {
  state = {
    showAnsw: false,
    incorrect: 0,
    correct: 0,
    total: 0,
    cardKey: 0,
  }

  componentDidMount() {
    this.props.dispatch(getDeck(this.props.navigation.state.params.title))

    this.setState({
      total: this.props.deck.questions.length
    })
  }

  changeTo = () => {
    this.setState({
      showAnsw: !this.state.showAnsw
    })
  }

  correctBtn = () => {
    this.setState({
      showAnsw: false,
      correct: this.state.correct+1,
      cardKey: this.state.cardKey+1
    })
    console.log('correct: ', this.state.correct , 'cardKey: ', this.state.cardKey)
  }

  incorrectBtn = () => {
    this.setState({
      showAnsw: false,
      incorrect: this.state.incorrect+1,
      cardKey: this.state.cardKey+1,
    })
    console.log('incorrect: ', this.state.incorrect, 'cardKey: ', this.state.cardKey)
  }

  endQuiz = () => {
    this.setState({
      showAnsw: false,
      incorrect: 0,
      correct: 0,
      cardKey: 0,
    })
    clearLocalNotification()
    .then(setLocalNotification)
    .then(this.toHome())
  }

  toHome = () => {
    this.props.navigation.navigate(
      'DeckList'
    );
  };

  render() {
    const { cardKey, incorrect, correct, total } = this.state
    return (
      incorrect+correct === total
      ? <View style={styles.scoreContainer}>
          <Text style={{fontSize: 35}}>🎉 Congratulations! 🎉</Text>
          <Text style={styles.score}>You're done with the Quiz!</Text>
          <Text style={styles.score}>Your Score:</Text>
          <Text style={styles.score}>{(correct*100)/total}%</Text>
          <Text style={styles.score}>{correct}/{total}</Text>
          <TouchableOpacity style={styles.endBtn} onPress={this.endQuiz}><Text style={{fontSize: 30, color: 'white', textAlign: 'center', margin: 10}}>End Quiz</Text></TouchableOpacity>
        </View>
      : <View style={styles.container}>
          <Text style={styles.textA}>Card {cardKey + 1} of {total}</Text>
          {this.state.showAnsw
          ? <TouchableOpacity style={styles.cardA} onPress={this.changeTo} ><Text style={styles.textA}>{this.props.deck.questions[cardKey].answer}</Text></TouchableOpacity>
          : <TouchableOpacity style={styles.cardQ} onPress={this.changeTo} ><Text style={styles.textQ}>{this.props.deck.questions[cardKey].question}</Text></TouchableOpacity> }
          {this.state.showAnsw
          ? <View style={styles.btnContainer} >
              <View style={styles.correct}>
                <TouchableOpacity onPress={this.correctBtn} >
                  <Text style={styles.btnText}>Correct</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.incorrect}>
                <TouchableOpacity onPress={this.incorrectBtn}>
                  <Text style={styles.btnText}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            </View>
          : null}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  endBtn: {
    width: 150,
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 3
  },
  score: { 
    fontSize: 30,
  },
  scoreContainer: {
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  container: {
    alignItems: 'center',
  },
  correct: {
    width: 150,
    margin: 10,
    backgroundColor: 'green',
    borderRadius: 3
  },
  incorrect: {
    width: 150,
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 3
  },
  btnContainer: {
    flexDirection: 'row'
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '200',
    margin: 20,
  },
  cardA: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 325,
    height: 325,
    margin: 20,
    marginBottom: 70,
    padding: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4
  },
  cardQ: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 325,
    height: 325,
    margin: 20,
    marginBottom: 70,
    padding: 40,
    backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4
  },
  textQ:{
    color: 'white',
    fontSize: 25,
    fontWeight: '300'
  },
  textA:{
    color: 'black',
    fontSize: 25,
    fontWeight: '300'
  }
})

function mapStateToProps({ decks, deck }) {
  return {
    decks,
    deck
  }
}

export default connect(mapStateToProps)(Quiz)