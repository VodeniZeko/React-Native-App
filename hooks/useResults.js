import { useState, useEffect } from "react";
import axios from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async initialSearch => {
    try {
      const res = await axios.get("/search", {
        params: {
          limit: 50,
          term: initialSearch,
          location: "Seattle"
        }
      });
      setResults(res.data.businesses);
    } catch (err) {
      setErrorMessage("Oops, something went wrong :( ");
    }
  };

  useEffect(() => {
    searchApi("beef");
  }, []);
  return [searchApi, results, errorMessage];
};
