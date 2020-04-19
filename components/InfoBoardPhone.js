import React from "react";
import call from "react-native-phone-call";

import {
  View,
  Linking,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const InfoBoardPhone = ({ results }) => {
  const number = results.display_phone;
  const args = {
    number: number, // String value with the number to call
    prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
  };

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity onPress={() => call(args).catch(console.error)}>
        <Entypo
          style={{ paddingTop: 5, color: "green", opacity: 0.4 }}
          size={30}
          name="phone"
        />
      </TouchableOpacity>

      <Entypo name="chevron-down" />
      {results.display_phone ? (
        <Text style={styles.addressInfo}>{number}</Text>
      ) : (
        <Text style={{ color: "blue", paddingBottom: 2 }}>sorry, no data</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addressInfo: {
    // fontFamily: "Avenir-MediumOblique",
    fontSize: 15,
    fontWeight: "bold",
    width: 300,
    textAlign: "center"
  }
});
export default InfoBoardPhone;
