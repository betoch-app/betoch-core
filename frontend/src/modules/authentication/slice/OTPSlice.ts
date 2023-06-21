import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IOType } from "child_process";
import { IHttpResponse } from "./model/HttpResponse";
import { httpService } from "../../core/services/https.service";
import { BASE_URL } from "../../core/utils/consts";
import { IOtp } from "./model/IOtp";

const initialState: IHttpResponse = {
  success: false,
  message: "",
  data: {},
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

const otpSlice = createSlice({
  name: "OTPConfirmation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(OTPConfirmation.pending, (state) => {
        state.success = false;
      })
      .addCase(OTPConfirmation.fulfilled, (state, action) => {
        state.success = true;
        state.message = action.payload?.message;
      })
      .addCase(OTPConfirmation.rejected, (state) => {
        state.message = "Something is not good ):";
        state.success = false;
        state.error = true;
      });
  },
});

export default otpSlice.reducer;
