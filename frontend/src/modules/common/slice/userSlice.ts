import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUserResponse } from "./interfaces/interfaces";
import { httpService } from "../../core/services/https.service";
import { BASE_URL } from "../../core/utils/consts";

const initialState: IUserResponse = {
  loading: false,
  status: false,
  data: {
    full_name: "",
    phone: "",
  },
  error: false,
};

export const getMe = createAsyncThunk("api/me", async () => {
  const response = await httpService.get(`${BASE_URL}me`);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.status = false;
        state.error = false;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.status = true;
        state.error = false;
        state.data = action.payload?.data;
      })
      .addCase(getMe.rejected, (state) => {
        state.error = true;
        state.status = false;
      });
  },
});

export default userSlice.reducer;
