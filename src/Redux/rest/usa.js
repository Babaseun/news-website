import {
  beginProcess,
  processRequestFailedUSA,
  processRequestsUSA,
} from "../actions/usa";
import axios from "axios";

export const fetchNewsUSA = () => (dispatch) => {
  dispatch(beginProcess());

  const API_KEY = "e6221e72e0ef4e0cb0b75aba9dbf4426";
  const API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  axios
    .get(API)
    .then((response) => {
      dispatch(processRequestsUSA(response.data.articles));
    })
    .catch((err) => dispatch(processRequestFailedUSA(err)));
};
