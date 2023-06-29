import { ACCESS_TOKEN, CURRENT_ROLE, REFRESH_TOKEN } from "../utils/consts";

export const storeToken = (
  token: string,
  refresh_token: string,
  role: string
) => {
  localStorage.setItem(ACCESS_TOKEN, token);
  localStorage.setItem(REFRESH_TOKEN, refresh_token);
  localStorage.setItem(CURRENT_ROLE, role);
};

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN);
};
