import axiosInstance from "./axiosInstance";

const fetcher = (...params) =>
  axiosInstance.get(...params).then((res) => res.data);

export default fetcher;
