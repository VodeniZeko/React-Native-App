import React, { useState } from "react";
import { View, Linking, TouchableOpacity, Button, Text } from "react-native";
import Overlay from "react-native-modal-overlay";
import { Entypo } from "@expo/vector-icons";

const LeaveAppModal = ({ web }) => {
  const [Visible, setVisible] = useState(false);
  const onClose = () => setVisible(false);
  const onOpen = () => setVisible(true);
  const uri = web.url;
  return (
    <View>
      <TouchableOpacity onPress={onOpen}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "100" }}>
          Click on
          <Entypo style={{ color: "#CC0000" }} size={60} name="yelp" /> for more
          reviews...
        </Text>
      </TouchableOpacity>
      <Overlay
        animationType="zoomIn"
        containerStyle={{ backgroundColor: "rgba(37, 8, 10, 0.78)" }}
        childrenWrapperStyle={{ backgroundColor: "#eee" }}
        animationDuration={500}
        visible={Visible}
        onClose={onClose}
        closeOnTouchOutside
      >
        <View>
          <Text style={{ textAlign: "center" }}>
            Your are leaving the App !
          </Text>
          <View style={{ alignSelf: "center", margin: 24 }}>
            <TouchableOpacity onPress={() => Linking.openURL(uri)}>
              <Text style={{ color: "blue", padding: 3 }}>
                Yes, take me to Yelp..
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={{ color: "blue", padding: 3 }}>
                {" "}
                No, I wish to stay..
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default LeaveAppModal;
