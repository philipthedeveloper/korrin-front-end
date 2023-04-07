const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  fans: {
    name: "",
    password: "",
    email: "",
    confirm_password: "",
  },
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateFansAuthDetails: (state, action) => {
      state.fans[action.payload.key] = action.payload.value;
    },
  },
});

export const { updateFansAuthDetails } = authSlice.actions;

export default authSlice.reducer;
