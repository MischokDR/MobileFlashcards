import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import SubmitBtn from './SubmitBtn';
import { addCard } from '../actions';

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    let card = {
      question: this.state.question,
      answer: this.state.answer
    }

    this.props.dispatch(addCard(this.props.navigation.state.params.title, card))

    this.setState({
      question: '',
      answer: '',
    })
    this.toDeck();
  }
  
  toDeck = () => {
    this.props.navigation.goBack()
  };

  render(){
      return(
        <View style={styles.container}>
          <TextInput style={styles.input} onChangeText={(question) => this.setState({question})} placeholder='Question'/>
          <TextInput style={styles.input} onChangeText={(answer) => this.setState({answer})} placeholder='Answer'/>
          <SubmitBtn text='Add Card' onPress={this.submit} disabled={this.state.question.length === 0 && this.state.answer.length === 0} />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 120,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 3,
    width: 325,
    textAlign: 'center',
    fontSize: 20
  },
})

function mapStateToProps({ title, number }) {
  return {
    title,
    number,
  }
}

export default connect(mapStateToProps)(AddCard)