import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://korrin.vercel.app/v1/auth/reset-password";
const initialState = {
  email: "",
  responce: "",
  isLoading: false,
};

export const ForgotPassswordAuth = createAsyncThunk(
  "forgotPassword/auth",
  async (name, thunkAPI, userdata) => {
    try {
      const reps = await axios.post(url, {
        email: userdata,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong Please Retry");
    }
  }
);
  
const ForgotPasssword = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ForgotPassswordAuth.pending, (state, action) => {
        state.isLoading = true;
        state.responce = action.payload;
      })
      .addCase(ForgotPassswordAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.responce = action.payload;
      })
      .addCase(ForgotPassswordAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.responce = action.payload;
      });
  },
});

export const { emailForgot } = ForgotPasssword.actions;

export default ForgotPasssword.reducer;
