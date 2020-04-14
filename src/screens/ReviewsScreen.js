import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "../../api/yelp";
import { useNavigation } from "@react-navigation/native";
import { ListItem } from "react-native-elements";
import LeaveAppModal from "../../components/leaveAppModal";
export default function ReviewsScreen(props) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.route.params.id;
  const url = reviews[0];
  console.log(url);
  const navigation = useNavigation();
  useEffect(() => {
    axios.get(`${id}/reviews`).then(res => {
      setReviews(res.data.reviews);
    });
    setLoading(false);
  }, []);
  console.log("yupyupyu", url);
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
            keyExtractor={x => x.id}
            renderItem={({ item }) => {
              return (
                <ListItem
                  leftAvatar={{
                    size: "large",
                    showEditButton: true,
                    source: { uri: item.user.image_url }
                  }}
                  containerStyle={{
                    backgroundColor: "transparent",
                    margin: 10
                  }}
                  title={item.user.name}
                  titleStyle={{ fontSize: 15, paddingBottom: 5 }}
                  subtitle={item.text}
                  subtitleStyle={{ fontWeight: "bold", fontSize: 16 }}
                />
              );
            }}
          />
        )}
        <View style={{ flex: 1 }}>
          {!url ? null : <LeaveAppModal web={url} />}
        </View>
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
