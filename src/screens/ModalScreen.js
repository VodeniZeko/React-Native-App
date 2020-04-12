import * as React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function ModalScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 30 }}>Here we have full screen images!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.icon}
      >
        <AntDesign style={{ color: "#1DA1F2" }} name="home" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "space-between"
  },
  icon: {
    alignItems: "center",
    paddingBottom: 30
  }
});
