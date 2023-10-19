import { landingPage } from "./landingPageSlice";
import axios from "axios";
import "dotenv/config";

export const fetchLandingPageAction = (url, page) => async (dispatch) => {
  return axios.get(url).then((response) => {
    const payload = {
      [page]: response.data,
    };

    dispatch(landingPage(payload));
  });
};
