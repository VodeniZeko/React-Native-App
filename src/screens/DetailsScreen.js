import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  ActivityIndicator
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "../../api/yelp";
import SingleRestaurantDetails from "../../components/SingleRestaurantDetails";

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
  return (
    <View style={styles.view}>
      {loading ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" color="#f4511e" />
      ) : (
        <>
          <View>
            <SingleRestaurantDetails results={singleRestaurant} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.icon}
          >
            <AntDesign style={{ color: "#1DA1F2" }} name="home" size={30} />
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
