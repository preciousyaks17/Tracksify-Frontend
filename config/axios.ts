import axios from "axios";

const axiosConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  withCredentials: false,
});

// axiosConfig.interceptors.request.use(
//   function (config) {
//     let authToken;

//     const authStateString = localStorage.getItem("auth");
//     if (authStateString) {
//       const authState = JSON.parse(authStateString);

//       authToken = authState?.state?.token;
//     }

//     if (authToken) {
//       config.headers.Authorization = "Bearer " + authToken;
//     }

//     return config;
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );

// axiosConfig.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );

export default axiosConfig;
