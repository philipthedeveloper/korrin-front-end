import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { openErrorModal } from "./fetchSlice";
export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    const dispatch = thunkApi.dispatch;
    try {
      const response = await axios.post(
        "https://korrin.vercel.app/v1/auth/login",
        userData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error?.response);
      dispatch(openErrorModal(error?.response?.data?.error?.message));
      return thunkApi.rejectWithValue(error?.response?.data);
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.success;
        const token = action.payload.payload.token;
        localStorage.setItem("access_token", token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logOut } = loginSlice.actions;
export default loginSlice.reducer;
