import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IUserResponse } from "./interfaces/interfaces";
import { httpService } from "../../core/services/https.service";
import { BASE_URL } from "../../core/utils/consts";

const initialState: IUserResponse = {
  loading: true,
  success: false,
  data: {
    full_name: "",
    phone: "",
    company: [],
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
  reducers: {
    updateState(state) {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.success = false;
        state.error = false;
        state.loading = true;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.success = true;
        state.loading = false;
        state.error = false;
        state.data = action.payload?.data;
      })
      .addCase(getMe.rejected, (state) => {
        state.error = true;
        state.success = false;
        state.loading = true;
      });
  },
});

export default userSlice.reducer;
