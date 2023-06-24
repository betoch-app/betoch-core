import axios from "axios";

const AxiosService = () => {
  const defaultConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //create instance
  const instance = axios.create(defaultConfig);
  instance.interceptors.request.use(async (config) => {
    const storageAccess = localStorage.getItem("token-storage") || "{}";
    const accessToken = JSON.parse(storageAccess)?.accessToken;

    if (accessToken) {
      config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
    }

    return config;
  });

  return instance;
};

export const httpService = AxiosService();
