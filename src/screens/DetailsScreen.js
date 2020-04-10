import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.view}>
      <Text style={{ fontSize: 30 }}>Details</Text>
      <Button
        onPress={() => navigation.navigate("MyModal")}
        title="more details"
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.icon}
      >
        <AntDesign name="home" size={30} />
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
