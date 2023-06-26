import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IHttpResponse } from "./model/HttpResponse";
import { ISignUp } from "../models/SignUp";
import { httpService } from "../../core/services/https.service";
import { BASE_URL } from "../../core/utils/consts";
import { IResetPassword } from "../models/ResetPassword";
import { ILogin } from "./model/Login";

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

export const signUp = createAsyncThunk(
  "api/auth/signUp",
  async (data: ISignUp) => {
    const response = await httpService.post(`${BASE_URL}auth/signup`, data);
    return response.data;
  }
);

export const login = createAsyncThunk(
  "api/auth/login",
  async (data: ILogin) => {
    const response = await httpService.post(`${BASE_URL}auth/login`, data);
    return response.data;
  }
);

export const resetPassword = createAsyncThunk(
  "api/auth/resetPasword",
  async (data: IResetPassword) => {
    const response = await httpService
      .post(`${BASE_URL}auth/resetPassword`, data)
      .catch((error) => {
        return error;
      });
    return response.data;
  }
);

const authenticationSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    clearAuthenticationInitialState(state) {
      state.success = false;
      state.error = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action: PayloadAction<any>) => {
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
      })

      // reset password
      .addCase(resetPassword.pending, (state) => {
        state.success = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.success = true;
        state.message = action.payload?.message;
        state.data = action.payload?.data;
        state.error = false;
      })
      .addCase(resetPassword.rejected, (state) => {
        state.error = false;
        state.message = "Something is not good ):";
        state.success = false;
      })
      // login
      .addCase(login.pending, (state) => {
        state.success = false;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.message = action.payload?.message;
        state.error = false;
        state.success = true;
      })
      .addCase(login.rejected, (state) => {
        state.error = true;
        state.message = "Invalid credentials";
        state.success = false;
      });
  },
});

export const { clearAuthenticationInitialState } = authenticationSlice.actions;
export default authenticationSlice.reducer;
