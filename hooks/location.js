// import { useState, useEffect } from "react";
// import * as Permissions from "expo-permissions";
// import * as Location from "expo-location";

// export default () => {
//   const [position, setPosition] = useState({ lat: null, long: null });
//   const [located, setLocated] = useState(false);
//   const [geoErrorMessage, setGeoErrorMessage] = useState(null);
//   const getLocation = async () => {
//     const { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== "granted") {
//       setGeoErrorMessage(
//         "We need to access your location,We use your location to show where you are on the map"
//       );
//     }
//     const position = await Location.getCurrentPositionAsync();
//     setLocated(true);
//     setPosition({
//       lat: position.coords.latitude,
//       long: position.coords.longitude
//     });
//   };

//   return [getLocation, geoErrorMessage, located, position];
// };
