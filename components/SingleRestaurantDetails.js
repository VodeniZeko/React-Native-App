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
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
// import { Dropdown } from "react-native-material-dropdown";
//
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
//
const SingleRestaurantDetails = ({ results }) => {
  const navigation = useNavigation();
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
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontFamily: "Palatino", paddingTop: 10 }}>
          {results.name}
        </Text>
      </View>
      <View style={styles.smallInfoView}>
        <Text style={styles.smallInfo}>{results.price}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.smallInfo}>{results.rating}</Text>
          <EvilIcons name="star" size={20} style={{ color: "#FFA500" }} />
          <Text>'s</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Reviews", { id: results.id })}
          style={styles.smallInfo}
        >
          <Text style={{ color: "blue" }}>{results.review_count} reviews</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoView}>
        <View style={{ alignItems: "center" }}>
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
                        <Entypo
                          style={{ color: "green" }}
                          name="check"
                          size={27}
                        />
                      </Text>
                    ) : null || item === "restaurant_reservation" ? (
                      <Text style={styles.delivery}>
                        reservations
                        <Entypo
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
              {results.location.display_address[0]}
            </Text>
            <Text style={styles.addressInfo}>
              {results.location.display_address[1]}
            </Text>
            <Text style={styles.addressInfo}>
              {results.location.display_address[2]}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.phone}>Phone</Text>
            <Entypo name="chevron-down" />
            <Text style={styles.addressInfo}>{results.display_phone}</Text>
          </View>
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "baseline",
              flexDirection: "row",
              backgroundColor: "#e9e9e9"
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.hours}>Hours</Text>
              <Entypo name="chevron-right" />
            </View>
            <View style={{ width: 100 }}>{/* <Dropdown data={} /> */}</View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: ITEM_HEIGHT
  },
  infoView: {
    borderWidth: 0.17,
    borderColor: "#1DA1F2",
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5
  },
  tag: {
    color: "#1DA1F2",
    fontSize: 15,
    fontFamily: "Avenir-Oblique",
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.9,
    textAlign: "center"
  },
  smallInfoView: {
    alignSelf: "center",
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around",
    padding: 10
  },
  smallInfo: {
    fontSize: 15,
    fontFamily: "Palatino",
    fontWeight: "bold",
    opacity: 0.6
  },
  delivery: {
    fontFamily: "Avenir-Oblique",
    fontSize: 15,
    padding: 5,
    opacity: 0.8
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
  hours: {
    fontFamily: "AvenirNext-Heavy",
    fontSize: 18,
    padding: 5,
    marginRight: 5,
    fontWeight: "bold"
  },
  addressInfo: {
    fontFamily: "Avenir-MediumOblique",
    fontSize: 15,
    paddingTop: 5
  }
});
export default SingleRestaurantDetails;
