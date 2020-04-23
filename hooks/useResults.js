import { useState, useEffect } from "react";
import axios from "../api/yelp";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

export default () => {
  //
  const [position, setPosition] = useState({ lat: "null", long: "null" });
  const [located, setLocated] = useState(false);
  const [geoErrorMessage, setGeoErrorMessage] = useState(null);
  ///
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [offset, setOffset] = useState(0);
  //
  const getLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setGeoErrorMessage(
        "We need to access your location,We use your location to show where you are on the map"
      );
    }
    const position = await Location.getCurrentPositionAsync();
    setLocated(true);
    setPosition({
      lat: position.coords.latitude,
      long: position.coords.longitude
    });
  };

  const searchApi = async initialSearch => {
    try {
      const res = await axios.get("/search", {
        params: {
          limit: 50,
          // TODO: change to device location
          location: "seattle",
          // latitude: position.lat,
          // longitude: position.long,
          offset: offset,
          term: initialSearch
        }
      });
      setResults(res.data.businesses);
      setLoading(false);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Oops, something went wrong :( ");
    }
  };
  const searchNextApi = async initialSearch => {
    setOffset(offset + 50);
    setFetchingData(true);
    try {
      const res = await axios.get("/search", {
        params: {
          limit: 50,
          offset: offset,
          term: initialSearch,
          // TODO: change to device location
          location: "seattle",
          // latitude: position.lat,
          // longitude: position.long,
          radius: 8046
        }
      });
      setFetchingData(false);
      setResults(res.data.businesses);
    } catch (err) {
      setErrorMessage("Oops, something went wrong :( ");
    }
  };

  useEffect(() => {
    // getLocation();
  }, []);
  return [
    located,
    // position,
    geoErrorMessage,
    searchApi,
    results,
    errorMessage,
    loading,
    searchNextApi,
    fetchingData
  ];
};
