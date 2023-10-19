import { configureStore } from "@reduxjs/toolkit";
import checkout from "./reducer/checkout/checkoutSlice.js";
import landingPage from "./reducer/landingPage/landingPageSlice.js";
import detailPage from "./reducer/detailPage/detailPageSlice.js";

export const store = configureStore({
  reducer: { checkout, landingPage, detailPage },
});
