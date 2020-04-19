import React from "react";

import { View, Text, StyleSheet, ImageBackground } from "react-native";

const OpeningScreen = () => {
  return (
    <View style={styles.view}>
      <View style={{ flex: 0.2 }}>
        <Text style={{ textAlign: "center", fontSize: 20, opacity: 0.4 }}>
          Find a local place to eat..
        </Text>
      </View>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/openingScreen.png")}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 0.4
  }
});
export default OpeningScreen;
