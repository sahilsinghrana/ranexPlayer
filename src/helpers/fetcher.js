import axiosInstance from "./axiosInstance";

const fetcher = async (url, config = {}) => {
  axiosInstance.get;
  return axiosInstance
    .get(url, {
      ...config,
      timeout: 3000,
    })
    .then((res) => res.data);
};

export default fetcher;
