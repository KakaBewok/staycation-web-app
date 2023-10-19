import { detailPage } from "./detailPageSlice";
import axios from "axios";

export const fetchDetailPageAction = (url, page) => async (dispatch) => {
  return axios.get(url).then((response) => {
    const payload = {
      [page]: response.data,
    };

    dispatch(detailPage(payload));
  });
};
