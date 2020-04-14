import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const SearchBar = ({
  term,
  onTermChange,
  onTermSubmit,
  searchNextApi,
  fetchingData
}) => {
  return (
    <View style={styles.view}>
      <Feather style={styles.icon} name="search" size={30} />
      <TextInput
        value={term}
        onChangeText={onTermChange}
        style={styles.input}
        placeholder="What do you feel like eating ?"
        onEndEditing={onTermSubmit}
      />
      <TouchableOpacity onPress={() => searchNextApi()} activeOpacity={0.9}>
        {fetchingData ? (
          <ActivityIndicator
            style={styles.forward}
            color="#1DA1F2"
            size="large"
          />
        ) : (
          <Entypo style={styles.icon} name="controller-next" size={30} />
        )}
      </TouchableOpacity>
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
  },
  forward: {
    color: "#1DA1F2",
    paddingTop: 9
  }
});
export default SearchBar;
