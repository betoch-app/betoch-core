export const SMS_URL = `${process.env.REACT_APP_SMS_API_BASE_URL}`;
export const organization_id = process.env.REACT_APP_SMS_ORGANIZATION_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

export const headerConfig = {
  headers: {
    Authorization: `ApiKey ${API_KEY}`,
  },
};
