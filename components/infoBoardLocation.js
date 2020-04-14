import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";

const InfoBoardLocation = ({ results }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Entypo
        style={{ paddingTop: 5, color: "blue", opacity: 0.4 }}
        size={30}
        name="location-pin"
      />
      <Entypo name="chevron-down" />
      <Text style={styles.addressInfo}>
        {results.location.display_address[0]}
      </Text>
      <Text style={styles.addressInfo}>
        {results.location.display_address[1]}
      </Text>
      <Text style={styles.addressInfo}>
        {results.location.display_address[2]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addressInfo: {
    // fontFamily: "Avenir-MediumOblique",
    fontSize: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});
export default InfoBoardLocation;
