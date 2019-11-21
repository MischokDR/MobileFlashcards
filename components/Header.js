import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header({ text }){
    return(
      <View>
        <Text style={styles.header}>{text}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'black',
    borderBottomWidth: 1.5,
    borderBottomColor: 'white',
    color:'white',
    fontSize:25,
    fontWeight:"900",
    padding:10,
  },
});