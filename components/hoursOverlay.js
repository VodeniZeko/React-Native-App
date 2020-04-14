// import React, { useState } from "react";
// import { View, FlatList, StyleSheet, Button, Text } from "react-native";
// import Overlay from "react-native-modal-overlay";

// // import Time from "./time";
// const HoursOverlay = ({ results }) => {
//   var vrijeme = results.hours[0].is_open_now;
//   console.log(vrijeme);
//   // var time = vrijeme[1].start; // your input

//   // time = time.split(":"); // convert to array

//   // // fetch
//   // var hours = Number(time[0]);
//   // var minutes = Number(time[1]);

//   // // calculate
//   // var timeValue;

//   // if (hours > 0 && hours <= 12) {
//   //   timeValue = "" + hours;
//   // } else if (hours > 12) {
//   //   timeValue = "" + (hours - 12);
//   // } else if (hours == 0) {
//   //   timeValue = "12";
//   // }

//   // timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes; // get minutes
//   // timeValue += hours >= 12 ? " P.M." : " A.M."; // get AM/PM

//   const [Visible, setVisible] = useState(false);
//   const onClose = () => setVisible(false);
//   const onOpen = () => setVisible(true);
//   return (
//     <View>
//       <Button title="hours" onPress={onOpen} />
//       <Overlay
//         animationType="zoomIn"
//         containerStyle={{ backgroundColor: "rgba(37, 8, 10, 0.78)" }}
//         childrenWrapperStyle={{ backgroundColor: "#eee" }}
//         animationDuration={500}
//         visible={Visible}
//         onClose={onClose}
//         closeOnTouchOutside
//       >
//         <View>
//           <Text>{vrijeme}</Text>
//         </View>

//         <Button title="close" onPress={onClose} />
//       </Overlay>
//     </View>
//   );
// };

// export default HoursOverlay;
