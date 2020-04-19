import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import SearchBar from "../../components/Searchbar";
import useResults from "../../hooks/useResults";
import OpeningScreen from "./OpeningScreen";
import List from "../../components/List";

const SearchScreen = ({ navigation }) => {
  //custom hook below
  const [
    // position,
    located,
    geoErrorMessage,
    searchApi,
    results,
    errorMessage,
    loading,
    searchNextApi,
    fetchingData
  ] = useResults();

  const [term, setTerm] = useState("");

  const filterPrice = price => {
    return results.filter(res => {
      return res.price === price;
    });
  };

  return (
    <View style={styles.view}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
        searchNextApi={searchNextApi}
        fetchingData={fetchingData}
        results={results}
      />

      <Text>
        {errorMessage && <Text style={styles.err}>{errorMessage}</Text>}
        {geoErrorMessage && <Text style={styles.err}>{geoErrorMessage}</Text>}
      </Text>
      <View>
        {loading ? (
          <OpeningScreen />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <List results={filterPrice("$")} title="Cost Effective" />
            <List results={filterPrice("$$")} title="Moderate" />
            <List results={filterPrice("$$$")} title="Go all out" />
          </ScrollView>
        )}
      </View>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignSelf: "center",
    backgroundColor: "#fff",
    flex: 1
  },
  err: {
    position: "relative",
    paddingBottom: 3,
    textAlign: "center",
    color: "red"
  }
});
export default SearchScreen;
