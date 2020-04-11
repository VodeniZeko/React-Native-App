import React from "react";
import { View, Dimensions, Text, StyleSheet, Image } from "react-native";
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH / 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 1.4) / 7);
const ListDetails = ({ results }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text style={styles.name}>{results.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{results.rating} Stars</Text>
        <Text style={styles.text}>{results.review_count} Reviews</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  // view: {
  //   width: 250,
  //   marginLeft: 5,
  //   marginRight: 5
  // },
  image: {
    height: ITEM_HEIGHT
    // width: 250,
    // height: 120
    // borderColor: "#f4511e",
    // borderWidth: 2
  },
  text: {
    padding: 5
    // fontFamily: "Palatino"
  },
  name: {
    fontSize: 15,
    width: 250,
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 5
    // fontFamily: "Palatino"
  }
});
export default ListDetails;
