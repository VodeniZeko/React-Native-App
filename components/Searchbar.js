import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.view}>
      <Feather style={styles.icon} name="search" size={30} />
      <TextInput
        value={term}
        onChangeText={onTermChange}
        style={styles.input}
        placeholder="Search"
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#e4e4e4",
    flexDirection: "row",
    borderRadius: 10,
    alignSelf: "center",
    margin: 10
  },
  input: {
    flex: 1,
    height: 50,
    paddingTop: 3
  },
  icon: {
    alignSelf: "center",
    padding: 10
  }
});
export default SearchBar;
