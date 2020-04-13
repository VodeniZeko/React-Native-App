import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-snap-carousel";
import { Rating } from "react-native-elements";
import { Tooltip } from "react-native-elements";

// import { Dropdown } from "react-native-material-dropdown";
//
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
//
const SingleRestaurantDetails = ({ results }) => {
  const navigation = useNavigation();
  const { rating } = results;

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
        <View style={{ marginTop: 10, marginBottom: 10, alignItems: "center" }}>
          <FlatList
            horizontal={true}
            data={results.categories}
            keyExtractor={each => each.id}
            renderItem={({ item }) => {
              return (
                <Text style={styles.tag}>
                  <Text>#</Text>
                  {item.title}
                </Text>
              );
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

        <Text style={styles.name}>{results.name}</Text>

        <View style={styles.smallInfoView}>
          <Tooltip popover={<Text>pricepoint</Text>}>
            <Text style={(styles.smallInfo, { color: "green" })}>
              {results.price}
            </Text>
          </Tooltip>

          <View style={{ flexDirection: "row" }}>
            <Text style={(styles.smallInfo, { color: "#e5ac44" })}>
              {results.rating}
            </Text>
            <Rating
              fractions={1}
              imageSize={15}
              readonly
              startingValue={rating}
              style={{ paddingLeft: 5 }}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Reviews", { id: results.id })}
            style={styles.smallInfo}
          >
            <Text style={(styles.smallInfo, { color: "blue" })}>
              {results.review_count} reviews
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            {results.transactions.length === 0 ? (
              <>
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
              </>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                <FlatList
                  horizontal={true}
                  data={results.transactions}
                  keyExtractor={transactions => transactions}
                  renderItem={({ item }) => {
                    return (
                      <>
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
                      </>
                    );
                  }}
                />
              </View>
            )}
          </View>

          <View style={{ alignItems: "center" }}>
            <Entypo
              style={{ paddingTop: 5, color: "blue", opacity: 0.4 }}
              size={30}
              name="location-pin"
            />
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
            <Entypo
              style={{ paddingTop: 5, color: "green", opacity: 0.4 }}
              size={30}
              name="phone"
            />

            <Entypo name="chevron-down" />
            <Text style={styles.addressInfo}>{results.display_phone}</Text>
          </View>
          <View
            style={{
              justifyContent: "space-around",
              alignItems: "baseline",
              flexDirection: "row",
              backgroundColor: "#e9e9e9",
              marginTop: 10
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Entypo style={styles.hours} size={30} name="clock" />
              <Entypo name="chevron-right" />
            </View>
            <View style={{ width: 100 }}>{/* <Dropdown data={} /> */}</View>
          </View>
        </View>
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
    fontFamily: "Palatino",
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  infoView: {
    borderWidth: 2,
    borderColor: "white",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18
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
    width: 250,
    justifyContent: "space-around",
    padding: 10,
    marginTop: 5,
    backgroundColor: "#fff"
  },
  smallInfo: {
    fontSize: 15,
    fontFamily: "Palatino"
  },
  delivery: {
    fontFamily: "Avenir-Oblique",
    fontSize: 15,
    padding: 5,
    opacity: 0.8,
    fontWeight: "bold"
  },
  hours: {
    padding: 5,
    marginRight: 5
  },
  addressInfo: {
    fontFamily: "Avenir-MediumOblique",
    fontSize: 15,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});
export default SingleRestaurantDetails;
