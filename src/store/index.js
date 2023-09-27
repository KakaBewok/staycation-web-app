import { configureStore } from "@reduxjs/toolkit";
import checkout from "./reducer/checkout/checkoutSlice.js";
import landingPage from "./reducer/landingPage/landingPagetSlice.js";

export const store = configureStore({
  reducer: { checkout, landingPage },
});
