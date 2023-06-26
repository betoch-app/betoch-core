import axios, { AxiosError } from "axios";
import { ACCESS_TOKEN, BASE_URL, REFRESH_TOKEN } from "../utils/consts";

const getToken = () => {
  const refresh_token = localStorage.getItem(REFRESH_TOKEN);
  const formData = {
    refresh: refresh_token,
  };
  return axios.post(`${BASE_URL}token/refresh`, formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(REFRESH_TOKEN)}`,
    },
  });
};

export const refreshToken = (axios: any, config: any) => {
  return new Promise((resolve, reject) => {
    getToken()
      .then((response: any) => {
        const access_token = response.data?.access;
        const refresh_token = response.data?.refresh;

        localStorage.setItem(ACCESS_TOKEN, access_token);
        localStorage.setItem(REFRESH_TOKEN, refresh_token);

        config.headers.Authorization = `Bearer ${access_token}`;
        axios
          .request(config)
          .then((result: any) => {
            return resolve(result);
          })
          .catch((err: any) => {
            return reject(err);
          });
      })
      .catch((err: AxiosError) => console.log(err.message));
  });
};
