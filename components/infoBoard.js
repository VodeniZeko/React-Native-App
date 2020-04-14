import React from "react";
import * as Animatable from "react-native-animatable";
import { View, StyleSheet } from "react-native";
import InfoBoardTransactions from "./infoBoardTransactions";
import InfoBoardLocation from "./infoBoardLocation";
import InfoBoardPhone from "./InfoBoardPhone";
import InfoBoardHoursOfOperation from "./InfoBoardHoursOfOperation";

const InfoBoard = ({ results }) => {
  // console.log("again",results.hours[0].open);
  return (
    <Animatable.View animation="fadeInRight" style={styles.infoView}>
      <InfoBoardTransactions results={results} />

      <InfoBoardLocation results={results} />

      <InfoBoardPhone results={results} />
      <InfoBoardHoursOfOperation results={results} />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  infoView: {
    borderWidth: 0.6,
    borderColor: "#000",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5
  }
});
export default InfoBoard;
