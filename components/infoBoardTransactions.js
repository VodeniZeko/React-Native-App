import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const InfoBoardTransactions = ({ results }) => {
  return (
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
  );
};
const styles = StyleSheet.create({
  delivery: {
    // fontFamily: "Avenir-Oblique",
    fontSize: 15,
    padding: 5,
    opacity: 0.8,
    fontWeight: "bold",
    height: 60
    // width: 140,
  }
});

export default InfoBoardTransactions;
