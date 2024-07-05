import axios from "axios";
// import supabase from "../config/supabase";

const baseServerUrl = import.meta.env.VITE_SERVER_URL;
const accessToken = `Basic ${import.meta.env.VITE_ACCESS_TOKEN}`;

const fetcher = axios.create({
  baseURL: baseServerUrl,
  timeout: 1000,
  headers: {
    Authorization: accessToken,
  },
});

export default fetcher;

export function addAccessTokenToFetchHeader(accessToken) {
  if (typeof accessToken !== "string") return;
  fetcher.defaults.headers["X-Auth-Token"] = `Bearer ${accessToken}`;
}
