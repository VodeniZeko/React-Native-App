import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListDetails from "./ListDetails";
const List = ({ title, results }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
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
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
  }
});
export default List;
