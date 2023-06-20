import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICreateConfirmationCode, ICreateSMSResponse } from "./model/Sms";
import axios from "axios";
import { SMS_URL, headerConfig } from "./config/SMSConfig";

const initialState: ICreateSMSResponse = {
  success: false,
  message: "",
  error: false,
};

export const createNewConfirmationCode = createAsyncThunk(
  "api/createConfirmationCode",
  async (data: ICreateConfirmationCode) => {
    const response = await axios.post(`${SMS_URL}SMS`, data, headerConfig);
    return response.data;
  }
);

const smsSlice = createSlice({
  name: "SMS",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createNewConfirmationCode.pending, (state) => {
        state.success = false;
      })
      .addCase(createNewConfirmationCode.fulfilled, (state, action) => {
        state.success = action.payload?.success;
        state.message = action.payload?.message;
      })
      .addCase(createNewConfirmationCode.rejected, (state) => {
        state.error = true;
        state.success = false;
        state.message = "Problem with sending SMS confirmation text";
      });
  },
});

export default smsSlice.reducer;
