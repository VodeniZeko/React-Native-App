import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "../../api/yelp";

export default function ReviewsScreen(props) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.route.params.id;

  useEffect(() => {
    axios.get(`${id}/reviews`).then(res => {
      setReviews(res.data.reviews);
    });
    setLoading(false);
  }, []);
  console.log("yayayayayayyaya", reviews);
  return (
    <View style={styles.view}>
      {loading ? (
        <Text>loading</Text>
      ) : (
        <FlatList
          data={reviews}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>REVIEWER HERE => {item.user.name}</Text>
              </View>
            );
          }}
        />
      )}
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.icon}
      >
        <AntDesign style={{ color: "#1DA1F2" }} name="home" size={30} />
      </TouchableOpacity>
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
