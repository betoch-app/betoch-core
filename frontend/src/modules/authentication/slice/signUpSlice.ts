import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IHttpResponse } from "./model/HttpResponse";
import { ISignUp } from "../models/SignUp";
import { httpService } from "../../core/services/https.service";
import { BASE_URL } from "../../core/utils/consts";

const initialState: IHttpResponse = {
  success: false,
  message: "",
  data: "" || {},
  error: false,
};

export const signUp = createAsyncThunk(
  "api/auth/signUp",
  async (data: ISignUp) => {
    const response = await httpService.post(`${BASE_URL}auth/signup`, data);
    return response.data;
  }
);

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.success = false;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.success = true;
        state.message = action.payload?.message;
        state.data = action.payload?.data;
      })
      .addCase(signUp.rejected, (state) => {
        state.message = "Something is not good ):";
        state.success = false;
        state.error = true;
      });
  },
});
export default signUpSlice.reducer;
