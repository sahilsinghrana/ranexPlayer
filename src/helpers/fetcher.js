import axiosInstance from "./axiosInstance";

const fetcher = (url, config = {}) => {
  axiosInstance.get;
  return axiosInstance
    .get(url, {
      ...config,
      timeout: 3000,
    })
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
};

export default fetcher;
