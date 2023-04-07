import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorModalOpen: false,
  errorText: "",
};

const fetchSlice = createSlice({
  name: "fetchSlice",
  initialState,
  reducers: {
    openErrorModal: (state, action) => {
      state.errorModalOpen = true;
      state.errorText = action.payload;
    },
    closeErrorModal: (state) => {
      state.errorModalOpen = false;
      state.errorText = "";
    },
  },
});
export const { openErrorModal, closeErrorModal } = fetchSlice.actions;

export default fetchSlice.reducer;
