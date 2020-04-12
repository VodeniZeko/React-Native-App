import { useState, useEffect } from "react";
import axios from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchingData, setFetchingData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [offset, setOffset] = useState(0);

  const searchApi = async initialSearch => {
    try {
      const res = await axios.get("/search", {
        params: {
          limit: 50,
          offset: offset,
          term: initialSearch,
          location: "Seattle"
        }
      });
      setResults(res.data.businesses);
      setLoading(false);
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
          location: "Seattle"
        }
      });
      setFetchingData(false);
      setResults(res.data.businesses);
    } catch (err) {
      setErrorMessage("Oops, something went wrong :( ");
    }
  };

  useEffect(() => {
    searchApi("beef");
  }, []);
  useEffect(() => {
    searchNextApi("beef");
  }, []);
  return [
    searchApi,
    results,
    errorMessage,
    loading,
    searchNextApi,
    fetchingData
  ];
};
