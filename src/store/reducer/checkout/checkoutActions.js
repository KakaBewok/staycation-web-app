import { checkoutBooking } from "./checkoutSlice";

export const checkoutBookingAction = (payload) => (dispatch) => {
  dispatch(checkoutBooking(payload));
};
