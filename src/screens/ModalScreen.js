import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ModalScreen(props) {
  const img = props.route.params.image;
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ReactNativeZoomableView
        maxZoom={2}
        minZoom={0.9}
        zoomStep={2}
        initialZoom={1}
        bindToBorders={true}
        // onZoomAfter={logOutZoomState}
        style={styles.image}
      >
        <View style={styles.view}>
          <Image
            style={{ flex: 1, width: null, height: "100%" }}
            source={{ uri: img }}
            resizeMode="contain"
          />
        </View>
      </ReactNativeZoomableView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.icon}
      >
        <FontAwesome style={{ color: "#7F7FFF" }} name="home" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    marginBottom: 50,
    flex: 1
  },
  icon: {
    alignItems: "center",
    paddingBottom: 30
  }
});
