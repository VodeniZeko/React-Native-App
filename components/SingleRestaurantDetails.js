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
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { cond } from "react-native-reanimated";
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
      <View style={{ marginTop: 10, marginBottom: 10, alignItems: "center" }}>
        <FlatList
          horizontal={true}
          data={results.categories}
          keyExtractor={each => each.id}
          renderItem={({ item }) => {
            return <Text style={styles.tag}>#{item.title} </Text>;
          }}
        />
      </View>
      <View>
        <Carousel
          data={results.photos}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
        />
      </View>

      <View style={styles.infoView}>
        {results.transactions.length === 0 ? (
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.delivery}>
              reservations
              <Entypo name="cross" style={{ color: "#8b0000" }} size={22} />
            </Text>
            <Text style={styles.delivery}>
              delivery
              <Entypo name="cross" style={{ color: "#8b0000" }} size={22} />
            </Text>
            <Text style={styles.delivery}>
              pickup
              <Entypo name="cross" style={{ color: "#8b0000" }} size={22} />
            </Text>
          </View>
        ) : (
          <FlatList
            horizontal={true}
            data={results.transactions}
            keyExtractor={transactions => transactions}
            renderItem={({ item }) => {
              return (
                <View>
                  {item === "delivery" || item === "pickup" ? (
                    <Text style={styles.delivery}>
                      {item}
                      <AntDesign
                        style={{ color: "green" }}
                        name="check"
                        size={27}
                      />
                    </Text>
                  ) : null || item === "restaurant_reservation" ? (
                    <Text style={styles.delivery}>
                      reservations
                      <AntDesign
                        style={{ color: "green" }}
                        name="check"
                        size={27}
                      />
                    </Text>
                  ) : null}
                </View>
              );
            }}
          />
        )}
      </View>
      <View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.address}>Address</Text>
          <Entypo name="chevron-down" />
          <Text style={styles.addressInfo}>
            {results.location.display_address}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.phone}>Phone</Text>
          <Entypo name="chevron-down" />
          <Text style={styles.addressInfo}>{results.display_phone}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: ITEM_HEIGHT
  },
  tag: {
    color: "blue",
    fontSize: 15,
    fontFamily: "Avenir-Oblique",
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.7,
    textAlign: "center"
  },
  delivery: {
    fontFamily: "Avenir-Oblique",
    fontSize: 22,
    padding: 5,
    opacity: 0.7
  },
  address: {
    fontFamily: "AvenirNext-Heavy",
    fontSize: 18,
    paddingTop: 5,
    fontWeight: "bold"
  },
  phone: {
    fontFamily: "AvenirNext-Heavy",
    fontSize: 18,
    padding: 5,
    fontWeight: "bold"
  },
  addressInfo: {
    fontFamily: "Avenir-MediumOblique",
    fontSize: 18,
    padding: 5
  },
  infoView: {
    alignItems: "center"
  }
});
export default SingleRestaurantDetails;
