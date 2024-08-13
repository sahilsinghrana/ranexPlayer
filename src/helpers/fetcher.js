import axiosInstance from "./axiosInstance";

const fetcher = async (url, config = {}) => {
  return axiosInstance
    .get(url, {
      ...config,
      timeout: 55000,
    })
    .then((res) => res.data);
};

export default fetcher;
