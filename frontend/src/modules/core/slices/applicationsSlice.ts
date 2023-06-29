import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAllApplications } from "./models/IApplications";
import { getCurrentApplications } from "../utils/consts";

const initialState = {
  currentApplication: getCurrentApplications(),
};

const applicationSlice = createSlice({
  name: "applications",
  initialState: initialState,
  reducers: {
    changeApplication(state, action: PayloadAction<string>) {
      state.currentApplication = action.payload;
    },
  },
});

export const { changeApplication } = applicationSlice.actions;
export default applicationSlice.reducer;
