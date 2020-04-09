import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ListDetails = ({ results }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text>{results.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>{results.rating} Stars</Text>
        <Text style={styles.text}>{results.review_count} Reviews</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  view: {
    width: 250,
    marginLeft: 5,
    marginRight: 5
  },
  image: {
    width: 250,
    height: 130,
    borderColor: "#f4511e",
    borderWidth: 1
  },
  text: {
    padding: 5
  }
});
export default ListDetails;
