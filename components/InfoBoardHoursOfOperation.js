import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
// import HoursOverlay from "./hoursOverlay";

const InfoBoardHoursOfOperation = ({ results }) => {
  if (!results.hours) {
    return (vrijeme = (
      <View style={{ alignItems: "center" }}>
        <Entypo style={styles.hours} size={30} name="clock" />
        <Text style={{ textAlign: "center", color: "blue", padding: 2 }}>
          sorry, no data!
        </Text>
      </View>
    ));
  } else {
    var vrijeme = results.hours[0].is_open_now;
  }

  return (
    <View style={styles.view}>
      <View
        style={{
          // flexDirection: "row",
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
    // backgroundColor: "#e9e9e9",
    margin: 10
  },
  hours: {
    padding: 2,
    marginRight: 2
    // paddingLeft: 44
  }
});
export default InfoBoardHoursOfOperation;
