import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import SearchBar from "../../components/Searchbar";
const SearchScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Business Search</Text>
      <SearchBar style={{ alignSelf: "stretch" }} />
      <Text>hi from SearchScreen !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    backgroundColor: "gray",
    flex: 1,
    width: 400
  },
  header: {
    backgroundColor: "#f4511e",
    height: 80,
    textAlign: "center",
    paddingTop: 45
  }
});
export default SearchScreen;
