import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import * as Animatable from "react-native-animatable";
import HashTag from "./hashTag";
import SmallInfoBoard from "./smallInfoBoard";
import InfoBoard from "./infoBoard";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";

//dimentions for images
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
//
const SingleRestaurantDetails = ({ priceText, results }) => {
  const navigation = useNavigation();
  //render this function bellow
  const _renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Images", { image: item })}
        >
          <Image style={styles.image} source={{ uri: item }} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.view}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/restaurant.png")}
      >
        <HashTag results={results} />

        <View>
          <Carousel
            data={results.photos}
            renderItem={_renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />
        </View>

        <Animatable.Text animation="fadeInRight" style={styles.name}>
          {results.name}
        </Animatable.Text>

        <SmallInfoBoard priceText={priceText} results={results} />
        <InfoBoard results={results} />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: ITEM_HEIGHT,
    borderRadius: 10
  },
  backgroundImage: {
    resizeMode: "cover"
  },
  name: {
    textAlign: "center",
    fontSize: 30,
    // fontFamily: "Palatino",
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});
export default SingleRestaurantDetails;
