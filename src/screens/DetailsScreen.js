import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "../../api/yelp";
import SingleRestaurantDetails from "../../components/SingleRestaurantDetails";
import { ScrollView } from "react-native-gesture-handler";

export default function DetailsScreen({ route }) {
  const navigation = useNavigation();
  const id = route.params.id;
  const [singleRestaurant, setSingleRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  const getResults = async id => {
    const res = await axios.get(`/${id}`);
    setSingleRestaurant(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getResults(id);
  }, []);

  if (!singleRestaurant) {
    return null;
  }
  ////checkinkg for price to populate the popupText for prices
  var text = "";
  const $ = singleRestaurant.price;
  switch ($) {
    case "$":
      text = "Cost Effective";
      break;
    case "$$":
      text = "Moderate";
      break;
    case "$$$":
      text = "Go all out";
      break;
    default:
      null;
  }
  //checkinkg for price to populate the popupText for prices
  return (
    <View style={styles.view}>
      {loading ? (
        <ActivityIndicator style={{ flex: 1 }} color="#7F7FFF" />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <SingleRestaurantDetails
              priceText={text}
              results={singleRestaurant}
            />
          </ScrollView>

          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.icon}
          >
            <FontAwesome style={{ color: "#7F7FFF" }} name="home" size={30} />
          </TouchableOpacity>
        </>
      )}
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
