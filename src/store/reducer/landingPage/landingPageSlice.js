import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    landingPage: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { landingPage } = landingPageSlice.actions;

export default landingPageSlice.reducer;
