import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
const HashTag = ({ results }) => {
  return (
    <Animatable.View style={styles.view} animation="fadeInLeft">
      <FlatList
        horizontal={true}
        data={results.categories}
        keyExtractor={each => each.alias}
        renderItem={({ item }) => {
          return (
            <Text style={styles.tag}>
              <Text>#</Text>
              {item.title}
            </Text>
          );
        }}
      />
    </Animatable.View>
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
    // fontFamily: "Avenir-Oblique",
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.9,
    padding: 3,
    textAlign: "center"
  }
});
export default HashTag;
