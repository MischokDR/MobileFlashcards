import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { getDeck, deleteDeck } from "../actions";
import { AppLoading } from "expo";

class DeckDetail extends Component {
  state = {
    loading: false,
  }

  componentDidMount() {
    this.props.dispatch(getDeck(this.props.navigation.state.params.title))
    this.setState({
      loading: true,
    })
  }

  handleDeleteDeck = () => {
    Alert.alert(
      'Delete Deck',
      'Are you sure you want to delete this deck?',
      [
        {
          text: 'No',
          onPress: null,
        },
        {
          text: 'Yes',
          onPress: () => this.props.dispatch(deleteDeck(this.props.deck.title)),
        }
      ]
    )
    this.toHome();
  }

  toHome = () => {
    this.props.navigation.navigate(
      'DeckList'
    );
  };

  toQuiz = () => {
    if(this.props.deck.questions.length > 0) {
      Alert.alert(
        'Start Quiz', 
        'Are you sure you want to start a quiz with '+this.props.deck.questions.length+' cards?',
        [
          {
            text: 'No',
            onPress: null,
            style: {},
          },
          {
            text: 'Yes',
            onPress: () => this.props.navigation.navigate("Quiz", {title: this.props.deck.title}),
            style: {}
          }
        ]),
        {cancelable: true}
    } else {
      Alert.alert(
        'Start Quiz',
        "Sorry but you can't start a quiz with no cards. Please add cards first and try again!",
        [
          {
            text: 'Ok',
            onPress: null,
            style: {}
          }
        ]
      ),
      {cancelable: true}
    }
  }

  render() {
    const { title, questions } = this.props.deck

    return (
      this.state.loading
      ? (<View style={styles.container}>
          <View style={styles.deck}>
            <Text style={styles.title}>{title}</Text>
            {questions.length === 1
              ? <Text style={styles.text}>{questions.length} Card</Text>
              : <Text style={styles.text}>{questions.length} Cards</Text> 
            }
          </View>
          <View style={styles.add}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("AddCard", {title: this.props.navigation.state.params.title, number: this.props.navigation.state.params.number})}
            >
              <Text style={styles.btnText}>Add Card</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.start}>
            <TouchableOpacity
              onPress={this.toQuiz}
            >
              <Text style={styles.btnText}>Start Quiz</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.delete}>
            <TouchableOpacity
              onPress={this.handleDeleteDeck}
            >
              <Text style={styles.deleteTxt}>Delete Deck</Text>
            </TouchableOpacity>
          </View>
        </View>)
      : (<View>
          <AppLoading />
        </View>)
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
  btnText:{
    fontSize: 20,
    fontWeight: "200",
    textAlign: 'center',
    margin: 40
  },
  add: {
    width: 325,
    margin: 20,
    backgroundColor: 'green',
    borderRadius: 3
  },
  start: {
    width: 325,
    margin: 20,
    backgroundColor: 'yellow',
    borderRadius: 3
  },
  deleteTxt:{
    fontSize: 20,
    fontWeight: "200",
    textAlign: 'center',
    margin: 10
  },
  delete: {
    width: 325,
    margin: 10,
    backgroundColor: 'red',
    borderRadius: 3
  }
})

function mapStateToProps({ decks, deck }) {
  return {
    decks,
    deck
  }
}

export default connect(mapStateToProps)(DeckDetail)