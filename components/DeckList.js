import React, { Component } from "react";
import { Text, ScrollView, View } from "react-native";
import { getDecks } from "../utils/api";
import { connect } from "react-redux";
import Header from "./Header";
import Deck from './Deck';
import { getAllDecks } from "../actions";

class DeckList extends Component {


  state = {
    ready: false,
  }

  componentDidMount() {
    getDecks()
      .then((decks) => {
        this.props.dispatch(getAllDecks(decks))
      })
  }

  render() {

    return (
      <View>
        <Header text='Decks'/>
      </View>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);
