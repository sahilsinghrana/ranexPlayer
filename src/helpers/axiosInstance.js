import axios from "axios";
// import supabase from "../config/supabase";

const baseServerUrl = import.meta.env.VITE_SERVER_URL;
const accessToken = `Basic ${import.meta.env.VITE_ACCESS_TOKEN}`;

const axiosInstance = axios.create({
  baseURL: baseServerUrl,
  timeout: 1000,
  headers: {
    Authorization: accessToken,
  },
});

export function addAccessTokenToFetchHeader(accessToken) {
  if (typeof accessToken !== "string") return;
  axiosInstance.defaults.headers["X-Auth-Token"] = `Bearer ${accessToken}`;
}

export default axiosInstance;
