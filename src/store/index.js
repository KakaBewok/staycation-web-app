import { configureStore } from "@reduxjs/toolkit";
import checkout from "./reducer/checkout/checkoutSlice.js";

export const store = configureStore({
  reducer: { checkout },
});
