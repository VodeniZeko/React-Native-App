import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ListDetails from "./ListDetails";
import Carousel from "react-native-snap-carousel";
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.53);

const List = ({ title, results }) => {
  if (!results.length) {
    return (
      <View>
        <Text style={styles.empty}>{title}</Text>
      </View>
    );
  }
  const navigation = useNavigation();
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("About", {
              id: item.id
            })
          }
        >
          <ListDetails results={item} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ position: "relative" }}>
      <Text style={styles.text}>{title}</Text>

      <Carousel
        data={results}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    padding: 5
    // fontFamily: "Savoye LET"
  },
  empty: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 15,
    padding: 5,
    textDecorationLine: "line-through",
    textDecorationColor: "red"
  }
});
export default List;
