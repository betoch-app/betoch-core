import axios from "axios";

const AxiosService = () => {
  const defaultConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //create instance
  const instance = axios.create(defaultConfig);

  return instance;
};

export const httpService = AxiosService();
