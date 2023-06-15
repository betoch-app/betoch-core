import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  IOrganizationResponse,
  ICreateConfirmationCode,
} from "./model/IOrganization";

const SMS_URL = `${process.env.REACT_APP_SMS_API_BASE_URL}`;
const organization_id = process.env.REACT_APP_SMS_ORGANIZATION_ID;
const API_KEY = process.env.REACT_APP_API_KEY;

const config = {
  headers: {
    Authorization: `Apikey ${API_KEY}`,
  },
};

export const getOrganization = createAsyncThunk(
  "api/organization",
  async () => {
    const response = await axios.get(
      `${SMS_URL}organization/${organization_id}/`,
      config
    );
    return response.data;
  }
);

export const createNewConfirmationCode = createAsyncThunk(
  "api/createConfirmationCode",
  async (data: ICreateConfirmationCode) => {
    const response = await axios.post(`${SMS_URL}organization/`, data, config);
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
  error: "",
};

const smsSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrganization.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrganization.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.organization = action.payload;
      })
      .addCase(getOrganization.rejected, (state, action) => {
        state.status = "failed";
        state.error = "error";
      });
  },
});

export default smsSlice.reducer;
