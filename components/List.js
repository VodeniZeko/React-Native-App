import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListDetails from "./ListDetails";
const List = ({ title, results }) => {
  return (
    <View style={styles.view}>
      <View style={styles.innerView}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={each => each.id}
        renderItem={({ item }) => {
          return <ListDetails results={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  innerView: {
    flex: 0.9
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  }
});
export default List;
