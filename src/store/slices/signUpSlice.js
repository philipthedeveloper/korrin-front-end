import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../axios.config";
import { openErrorModal } from "./fetchSlice";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (userData, thunkApi) => {
    const dispatch = thunkApi.dispatch;

    try {
      const response = await axios.post(
        "https://korrin.vercel.app/v1/auth/register",
        { ...userData }
      );
      const { data } = await http.post("/auth/verify-email", {
        code: response?.data?.payload?.code,
      });
      return response.data;
    } catch (error) {
      dispatch(openErrorModal(error?.response?.data?.error?.message));
      return thunkApi.rejectWithValue(error?.response?.data);
    }
  }
);

const signUpSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = "no user";
      });
  },
});

export default signUpSlice.reducer;
