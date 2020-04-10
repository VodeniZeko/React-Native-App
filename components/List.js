import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import ListDetails from "./ListDetails";

const List = ({ title, results, navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={each => each.id}
        renderItem={({ item }) => {
          return (
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Details")}>
                <ListDetails results={item} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    paddingTop: 5,
    paddingBottom: 5
  }
});
export default List;
