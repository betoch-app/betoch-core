import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "../slices/languagesSlice";
import organizationSlice from "../../authentication/slice/organizationSlice";
import smsSlice from "../../authentication/slice/smsSlice";
import signUpSlice from "../../authentication/slice/signUpSlice";
const store = configureStore({
  reducer: { languageSlice, organizationSlice, smsSlice, signUpSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
