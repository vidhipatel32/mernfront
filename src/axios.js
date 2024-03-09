import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://mernback-a9dz.onrender.com/api/",
  withCredentials: true,
});
