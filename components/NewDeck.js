import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Header from "./Header";
import SubmitBtn from './SubmitBtn';
import { addDeck } from "../actions";
import { connect } from "react-redux";
import { submitDeck } from "../utils/api";
import { generateUID } from '../utils/helpers';

class NewDeck extends Component {
  state= {
    deck:{
      title: '',
      cards: []
    }
    
  }

  submit = () => {
    this.props.dispatch(
      addDeck({
        [this.state.deck.title]: this.state.deck
      })
    )

    this.setState(() => ({
      deck: {
        title: '',
        cards: []
      }
    }))

    this.toHome();

  }
  
  toHome = () => {
    this.props.navigation.navigate(
      'DeckList'
    );
  };

  render() {
    return (
      <View>
        <Header text='New Deck' />
        <View style={styles.container}>  
          <Text style={styles.text}>What is the title of your new deck?</Text>
          <TextInput style={styles.input} onChangeText={(title) => this.setState({title})} value={this.state.title} placeholder='Deck Title'/>
          <SubmitBtn onPress={this.submit} text='Create new Deck' disabled={this.state.title === ''} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    width: 325,
    fontSize: 40,
    fontWeight: "400",
    color: 'black',
    margin: 50,
  },
  input: {
    marginTop: 50,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 3,
    width: 325,
    textAlign: 'center',
    fontSize: 20
  }
})

mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(NewDeck);