import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "../slices/languagesSlice";
import smsSlice from "../../authentication/slice/smsSlice";
const store = configureStore({
  reducer: { languageSlice, smsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
