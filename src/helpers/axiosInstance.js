import axios from "axios";

const baseServerUrl = import.meta.env.VITE_SERVER_URL;
const accessToken = `Basic ${import.meta.env.VITE_ACCESS_TOKEN}`;

const axiosInstance = axios.create({
  baseURL: baseServerUrl,
  headers: {
    Authorization: accessToken,
  },
});

export function addAccessTokenToFetchHeader(accessToken) {
  if (typeof accessToken !== "string") return;
  axiosInstance.defaults.headers["X-Auth-Token"] = `Bearer ${accessToken}`;
}

export default axiosInstance;
