import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./system";
import * as authService from "../services/auth-service";
import { history } from "./history";

export function requestBackend(config: AxiosRequestConfig) {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + authService.getAccessToken(),
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
}
//Request interceptor
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
axios.interceptors.response.use(
  function (response) {
    //DO SOMETHING WITH RESPONSE DATA IF STATUS IS 2xx
    return response;
  },
  function (error) {
    //DO SOMETHING WITH REPONSE ERROR
    if (error.response.status === 401) {
      history.push("/login");
    }
    if (error.response.status === 403) {
      history.push("/search");
    }
    return Promise.reject(error);
  }
);
