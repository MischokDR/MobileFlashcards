import React, { Component } from "react";
import { View, TextInput, StyleSheet} from 'react-native';
import SubmitBtn from './SubmitBtn';

export default class AddCard extends Component {
    render(){
        return(
          <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Question'/>
            <TextInput style={styles.input} placeholder='Answer'/>
            <SubmitBtn text='Add Card' />
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