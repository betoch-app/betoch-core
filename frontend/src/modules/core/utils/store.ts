import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "../slices/languagesSlice";
import organizationSlice from "../../authentication/slice/organizationSlice";
import smsSlice from "../../authentication/slice/smsSlice";
import OTPSlice from "../../authentication/slice/OTPSlice";
import authenticationSlice from "../../authentication/slice/authenticationSlice";
const store = configureStore({
  reducer: {
    languageSlice,
    organizationSlice,
    smsSlice,
    authenticationSlice,
    OTPSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
