import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>hi from SettingsScreen !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center"
  }
});
export default SettingsScreen;
