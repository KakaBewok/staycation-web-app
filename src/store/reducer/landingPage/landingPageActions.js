import { landingPage } from "./landingPagetSlice";
import axios from "axios";

export const fetchLandingPageAction = (url, page) => async (dispatch) => {
  return axios.get(url).then((response) => {
    const payload = {
      [page]: response.data,
    };

    dispatch(landingPage(payload));
  });
};
