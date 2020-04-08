import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../../components/Searchbar";
import useResults from "../../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  //custom hook below
  const [searchApi, results, errorMessage] = useResults();

  return (
    <View style={styles.view}>
      <Text style={styles.header}>Business Search</Text>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>
        <Text>here ;{results.length}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    backgroundColor: "yellow",
    flex: 1
  },
  header: {
    backgroundColor: "#f4511e",
    height: 80,
    textAlign: "center",
    paddingTop: 45
  }
});
export default SearchScreen;
