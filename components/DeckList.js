import React, { Component } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import { getDecks } from "../utils/api";
import { connect } from "react-redux";
import Header from "./Header";
import Deck from './Deck';
import { getAllDecks } from "../actions";
import { FlatList } from "react-native-gesture-handler";

class DeckList extends Component {


  state = {
    ready: false,
  }

  componentDidMount() {
    this.props.dispatch(getAllDecks)
    console.log(this.props.decks)
  }

  render() {
    const { decks, navigation } = this.props;
    return (
      <View>
        <Header text='Decks'/>
        <ScrollView>
          {Object.keys(decks).map(key => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("DeckDetail", {title: decks[key].title, number: decks[key].questions.length})}
                key={key} 
              >
                <Deck title={decks[key].title} number={decks[key].questions.length}/>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
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
