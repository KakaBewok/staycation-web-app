import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    checkoutBooking: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { checkoutBooking } = checkoutSlice.actions;

export default checkoutSlice.reducer;
