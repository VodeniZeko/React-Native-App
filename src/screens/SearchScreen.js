import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Button,
  TouchableOpacity
} from "react-native";
import SearchBar from "../../components/Searchbar";
import useResults from "../../hooks/useResults";
import List from "../../components/List";

const SearchScreen = ({ navigation }) => {
  //custom hook below
  const [
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
      />
      <Text>
        {errorMessage ? <Text style={styles.err}>{errorMessage}</Text> : null}
      </Text>

      {loading ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" color="#f4511e" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <List results={filterPrice("$")} title="Cost Effective" />
          <List results={filterPrice("$$")} title="Moderate" />
          <List results={filterPrice("$$$")} title="Go all out" />
        </ScrollView>
      )}
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => searchNextApi(term)}
          activeOpacity={0.9}
          style={styles.loadMoreBtn}
        >
          {fetchingData ? (
            <ActivityIndicator color="#1DA1F2" />
          ) : (
            <Text style={styles.btnText}>Load More</Text>
          )}
        </TouchableOpacity>
      </View>
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
  },
  loadMoreBtn: {
    padding: 7,
    marginBottom: 7,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100
  },
  btnText: {
    color: "#1DA1F2",
    fontSize: 16,
    textAlign: "center"
  }
});
export default SearchScreen;
