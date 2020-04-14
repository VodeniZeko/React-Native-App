import React from "react";
import { View, Dimensions, Text, StyleSheet, Image } from "react-native";
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH / 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 1.3) / 8);
const ListDetails = ({ results }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text style={styles.name}>{results.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>
          {results.rating} Stars {""} {results.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    backgroundColor: "#E6E3E0",
    borderRadius: 15,
    marginBottom: 7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  image: {
    height: ITEM_HEIGHT,
    borderRadius: 10
  },
  text: {
    padding: 10,
    fontSize: 13
    // fontFamily: "Palatino"
  },
  name: {
    fontSize: 15,
    width: 200,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10
    // fontFamily: "Palatino"
  }
});
export default ListDetails;
