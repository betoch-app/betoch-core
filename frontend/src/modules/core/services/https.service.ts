import axios from "axios";
import { ACCESS_TOKEN } from "../utils/consts";
import { refreshToken } from "./refreshToken.service";
const AxiosService = () => {
  const defaultConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //create instance
  const instance = axios.create(defaultConfig);
  instance.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN) || "";

    if (accessToken) {
      config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
    }

    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.config && error.response?.status === 401) {
        return new Promise((resolve, reject) => {
          refreshToken(axios, error.config)
            .then((result) => {
              resolve(result);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export const httpService = AxiosService();
