import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: false,
});

axiosConfig.interceptors.request.use(
  function (config) {
    const jwt = localStorage.getItem("token");

    // console.log("jwt", jwt);
    if (jwt) {
      config.headers.Authorization = "Bearer " + jwt;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

axiosConfig.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.response.status === 401) {
      // localStorage.removeItem("token");
      // window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default axiosConfig;
