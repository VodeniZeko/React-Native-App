import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer _bUomCrikK0fi5Sp9gR7hqgMtRez348Pz1LsAQD930BuL_BUQo-kYuBCypv0UFY4Yj9J0hjjp6dpagL7gEek28wFMf9e6udr3DWW2xlyXfTV7bUrNeu-lmnA2WeNXnYx"
  }
});
