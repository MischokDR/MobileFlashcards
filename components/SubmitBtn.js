import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function SubmitBtn({ onPress, text, disabled }) {
  return (
    <View >
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View style={styles.btn}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 325,
    margin: 120,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 3
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "200",
  },
})