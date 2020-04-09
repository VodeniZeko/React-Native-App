import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../../components/Searchbar";
import useResults from "../../hooks/useResults";
import List from "../../components/List";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  //custom hook below
  const [searchApi, results, errorMessage] = useResults();

  const filterPrice = price => {
    return results.filter(res => {
      return res.price === price;
    });
  };
  return (
    <View style={styles.view}>
      <Text style={styles.header}>Business Search</Text>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text style={styles.err}>
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </Text>
      <List results={filterPrice("$")} title="Cost Effective" />
      <List results={filterPrice("$$")} title="Pricier" />
      <List results={filterPrice("$$$")} title="BIg Spender" />
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
  },
  err: {
    position: "relative",
    paddingBottom: 3,
    textAlign: "center",
    color: "red"
  }
});
export default SearchScreen;
