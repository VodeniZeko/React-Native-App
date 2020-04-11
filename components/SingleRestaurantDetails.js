import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const SingleRestaurantDetails = ({ results }) => {
  const navigation = useNavigation();
  const _renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Images")}>
          <Image style={styles.image} source={{ uri: item }} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.view}>
      <View>
        <Carousel
          data={results.photos}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />
      </View>
      <View>
        <View>
          <FlatList
            data={results.categories}
            keyExtractor={each => each.id}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text style={{ color: "blue" }}>#{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <View>
        <Text></Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: ITEM_HEIGHT
  }
});
export default SingleRestaurantDetails;
