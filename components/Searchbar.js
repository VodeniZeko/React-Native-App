import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SearchBar = () => {
  return (
    <View>
      <Text>hi from SearchBar !</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center"
  },
  input: {
    backgroundColor: "green",
    width: 300
  }
});
export default SearchBar;
