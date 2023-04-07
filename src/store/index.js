import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import loginReducer from "./slices/loginSlice";
import signUpSlice from "./slices/signUpSlice";
import forgotenPasswordSlice from "./slices/forgotenPasswordSlice";
import fetchSlice from "./slices/fetchSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    login: loginReducer,
    signUp: signUpSlice,
    forgotPassword: forgotenPasswordSlice,
    fetch: fetchSlice,
  },
});

export default store;
