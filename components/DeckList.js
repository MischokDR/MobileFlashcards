import React, { Component } from "react";
import { Text, ScrollView, View, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import Header from "./Header";
import Deck from './Deck';
import { getAllDecks } from "../actions";
import { AppLoading } from "expo";
import { removeAllDecks } from '../utils/api'
class DeckList extends Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    this.props.getAllDecks();
    this.setState({
      ready: true
    })
  }

  render() {
    const { decks, navigation } = this.props;
    return (
      <View>
        <Header text='Decks'/>
        <View>
          {(decks !== undefined && decks.length > 0)
            ? this.state.ready
              ? <ScrollView>
                  {console.log('DeckList', decks)}
                  {Object.keys(decks).map(key => {
                    return (
                      <TouchableOpacity
                        onPress={() => navigation.navigate("DeckDetail", {title: decks[key].title})}
                        key={key} 
                      >
                        <Deck title={decks[key].title} number={decks[key].questions.length} />
                      </TouchableOpacity>
                    )
                  })}
                  <View style={styles.endView}></View>
                </ScrollView>
              : <View>
                  <AppLoading />
                </View>
            : <View>
                <Text>No decks found! Please create one in the New Deck Tab on the bottom of your screen!</Text>
                <TouchableOpacity onPress={() => removeAllDecks()}><Text>Delete AsyncStorage</Text></TouchableOpacity>
              </View>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  endView: {
    height: 110,
  }
})

function mapStateToProps({ decks }) {
  return {
    decks
  }
}

mapDispatchToProps = function(dispatch) {
  return {
    getAllDecks: () => dispatch(getAllDecks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
