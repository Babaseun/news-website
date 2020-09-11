import {
  beginProcess,
  processRequestFailedNG,
  processRequestsNG,
} from "../actions/index";
import axios from "axios";

export const fetchNewsNG = () => (dispatch) => {
  dispatch(beginProcess());

  const API_KEY = "e6221e72e0ef4e0cb0b75aba9dbf4426";
  const API = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}`;

  axios
    .get(API)
    .then((response) => {
      dispatch(processRequestsNG(response.data.articles));
    })
    .catch((err) => dispatch(processRequestFailedNG(err)));
};
