import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const HashTag = ({ results }) => {
  return (
    <View style={styles.view}>
      <FlatList
        horizontal={true}
        data={results.categories}
        keyExtractor={each => each.id}
        renderItem={({ item }) => {
          return (
            <Text style={styles.tag}>
              <Text>#</Text>
              {item.title}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center"
  },
  tag: {
    color: "#1DA1F2",
    fontSize: 15,
    fontFamily: "Avenir-Oblique",
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.9,
    textAlign: "center"
  }
});
export default HashTag;
