import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
// import HoursOverlay from "./hoursOverlay";

const InfoBoardHoursOfOperation = ({ results }) => {
  var vrijeme = results.hours[0].is_open_now;
  return (
    <View style={styles.view}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Entypo style={styles.hours} size={30} name="clock" />
        {vrijeme ? (
          <Text style={{ color: "green" }}>open</Text>
        ) : (
          <Text style={{ color: "red" }}>closed</Text>
        )}
        {/* continue creating hours modal */}
        {/* <HoursOverlay results={results} /> */}
      </View>
      <View style={{ width: 100 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    backgroundColor: "#e9e9e9",
    marginTop: 10
  },
  hours: {
    padding: 5,
    marginRight: 5
  }
});
export default InfoBoardHoursOfOperation;
