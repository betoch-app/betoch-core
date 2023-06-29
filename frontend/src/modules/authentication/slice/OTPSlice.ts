import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IHttpResponse } from "./model/HttpResponse";
import { httpService } from "../../core/services/https.service";
import { BASE_URL } from "../../core/utils/consts";
import { IOtp } from "./model/IOtp";

const initialState: IHttpResponse = {
  success: false,
  message: "",
  data: {
    access_token: "",
    refresh_token: "",
    role: 0,
  },
  error: false,
};

export const OTPConfirmation = createAsyncThunk(
  "api/auth/OTPConfirmation",
  async (data: IOtp) => {
    const response = await httpService.post(
      `${BASE_URL}auth/OTPConfirmation`,
      data
    );
    return response.data;
  }
);

export const sendOTPCOde = createAsyncThunk(
  "api/auth/sendOTPCode",
  async (data: IOtp) => {
    const response = await httpService.post(
      `${BASE_URL}auth/sendOTPCode`,
      data
    );
    return response.data;
  }
);

const otpSlice = createSlice({
  name: "OTPConfirmation",
  initialState,
  reducers: {
    clearInitialState(state) {
      state.error = false;
      state.success = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(OTPConfirmation.pending, (state) => {
        state.success = false;
      })
      .addCase(OTPConfirmation.fulfilled, (state, action) => {
        state.success = true;
        state.message = action.payload?.message;
        state.data = action.payload?.data;
      })
      .addCase(OTPConfirmation.rejected, (state) => {
        state.message = "Something is not good ):";
        state.success = false;
        state.error = true;
      })
      .addCase(sendOTPCOde.pending, (state) => {
        state.success = false;
      })
      .addCase(sendOTPCOde.fulfilled, (state, action) => {
        state.success = true;
        state.error = false;
        state.data = action.payload?.data;
        state.message = action.payload?.message;
      })
      .addCase(sendOTPCOde.rejected, (state) => {
        state.success = false;
        state.message = "Something is not good ): ";
        state.error = true;
      });
  },
});

export const { clearInitialState } = otpSlice.actions;
export default otpSlice.reducer;
