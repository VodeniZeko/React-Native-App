import React from "react";
import { View, StyleSheet } from "react-native";
import InfoBoardTransactions from "./infoBoardTransactions";
import InfoBoardLocation from "./infoBoardLocation";
import InfoBoardPhone from "./InfoBoardPhone";
import InfoBoardHoursOfOperation from "./InfoBoardHoursOfOperation";

const InfoBoard = ({ results }) => {
  // console.log("again",results.hours[0].open);
  return (
    <View style={styles.infoView}>
      <InfoBoardTransactions results={results} />

      <InfoBoardLocation results={results} />

      <InfoBoardPhone results={results} />
      <InfoBoardHoursOfOperation results={results} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoView: {
    borderWidth: 2,
    borderColor: "white",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18
  }
});
export default InfoBoard;
