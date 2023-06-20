import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrganizationResponse } from "./model/Organization";
import { SMS_URL, headerConfig, organization_id } from "./config/SMSConfig";

export const getOrganization = createAsyncThunk(
  "api/organization",
  async () => {
    const response = await axios.get(
      `${SMS_URL}organization/${organization_id}/`,
      headerConfig
    );
    return response.data;
  }
);

const initialState: IOrganizationResponse = {
  organization: {
    id: 0,
    phone_number: "",
    name: "",
  },
  status: "idle",
  is_loading: true,
  error: false,
};

const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrganization.pending, (state) => {
        state.status = "loading";
        state.is_loading = true;
      })
      .addCase(getOrganization.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.is_loading = false;
        state.organization = action.payload;
      })
      .addCase(getOrganization.rejected, (state, action) => {
        state.status = "failed";
        state.is_loading = false;
        state.error = false;
      });
  },
});

export default organizationSlice.reducer;
