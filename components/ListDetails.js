import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const ListDetails = ({ results }) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text>{results.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150
  }
});
export default ListDetails;
