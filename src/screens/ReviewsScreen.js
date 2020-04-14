import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "../../api/yelp";
import { useNavigation } from "@react-navigation/native";
export default function ReviewsScreen(props) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.route.params.id;
  const navigation = useNavigation();
  useEffect(() => {
    axios.get(`${id}/reviews`).then(res => {
      setReviews(res.data.reviews);
    });
    setLoading(false);
  }, []);
  console.log("yayayayayayyaya", reviews);
  return (
    <View style={styles.view}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/reviewsBackground.png")}
      >
        {loading ? (
          <Text>loading</Text>
        ) : (
          <FlatList
            data={reviews}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>REVIEWER HERE => {item.text}</Text>
                </View>
              );
            }}
          />
        )}
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.icon}
        >
          <FontAwesome style={{ color: "#1DA1F2" }} name="home" size={30} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: "rgba(0,0,0,0.0)"
  },
  icon: {
    alignItems: "center",
    paddingBottom: 30
  }
});
