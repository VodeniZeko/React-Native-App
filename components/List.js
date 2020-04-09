import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ title, results }) => {
  return (
    <View style={styles.view}>
      <View style={styles.innerView}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Text>{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    flex: 1
  },
  innerView: {
    backgroundColor: "red",
    flex: 0.9
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default List;
