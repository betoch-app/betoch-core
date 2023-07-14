import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpService } from "../../core/services/https.service";
import { BASE_URL } from "../../core/utils/consts";

const initialState = {
  loading: true,
  success: false,
  data: {},
  error: false,
};

export const registerCompany = createAsyncThunk(
  "api/company",
  async (data: any) => {
    const response = await httpService.post(`${BASE_URL}company`, data);
    return response.data;
  }
);

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCompany.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerCompany.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.loading = false;
        state.error = false;
        state.success = true;
      })
      .addCase(registerCompany.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.success = false;
      });
  },
});

export default companySlice.reducer;
