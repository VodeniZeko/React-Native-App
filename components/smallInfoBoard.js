import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Rating } from "react-native-elements";
import { Tooltip } from "react-native-elements";

const SmallInfoBoard = ({ priceText, results }) => {
  const navigation = useNavigation();
  const { rating } = results;
  return (
    <View style={styles.smallInfoView}>
      <Tooltip popover={<Text style={{ color: "#fff" }}>{priceText}</Text>}>
        <Text style={(styles.smallInfo, { color: "green" })}>
          {results.price}
        </Text>
      </Tooltip>

      <View style={{ flexDirection: "row" }}>
        <Text style={(styles.smallInfo, { color: "#e5ac44" })}>
          {results.rating}
        </Text>
        <Tooltip
          popover={
            <Text style={{ color: "#fff" }}>
              average {results.rating} stars
            </Text>
          }
        >
          <Rating
            fractions={1}
            imageSize={15}
            readonly
            startingValue={rating}
            style={{ paddingLeft: 5 }}
          />
        </Tooltip>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Reviews", { id: results.id })}
        style={styles.smallInfo}
      >
        <Text style={(styles.smallInfo, { color: "blue" })}>
          {results.review_count} reviews
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  smallInfoView: {
    alignSelf: "center",
    flexDirection: "row",
    width: 250,
    justifyContent: "space-around",
    padding: 10,
    marginTop: 5,
    backgroundColor: "#fff"
  },
  smallInfo: {
    fontSize: 15
    // fontFamily: "Palatino"
  }
});
export default SmallInfoBoard;
