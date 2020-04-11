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
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const List = ({ title, results }) => {
  const navigation = useNavigation();
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.view}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Details", {
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
    <View>
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
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
    // fontFamily: "Savoye LET"
  }
});
export default List;
