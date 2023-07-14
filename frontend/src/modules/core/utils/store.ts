import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "../slices/languagesSlice";
import organizationSlice from "../../authentication/slice/organizationSlice";
import smsSlice from "../../authentication/slice/smsSlice";
import OTPSlice from "../../authentication/slice/OTPSlice";
import authenticationSlice from "../../authentication/slice/authenticationSlice";
import applicationsSlice from "../slices/applicationsSlice";
import userSlice from "../../common/slice/userSlice";
import companySlice from "../../kirayAdminApp/slice/companySlice";
const store = configureStore({
  reducer: {
    applicationsSlice,
    languageSlice,
    organizationSlice,
    smsSlice,
    authenticationSlice,
    OTPSlice,
    userSlice,
    companySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
