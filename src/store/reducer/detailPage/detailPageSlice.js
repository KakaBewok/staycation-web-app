import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const detailPageSlice = createSlice({
  name: "detailPage",
  initialState,
  reducers: {
    detailPage: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { detailPage } = detailPageSlice.actions;

export default detailPageSlice.reducer;
