import {
 beginProcess,
 processRequestFailedNG,
 processRequestsNG
} from '../actions/index';
import axios from 'axios';

export const fetchNewsNG = () => (dispatch) => {
 dispatch(beginProcess());

 const API_KEY = '5bfaf80040e24d87b38a79a85168ecf7';
 const API = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}`;

 axios
  .get(API)
  .then((response) => {
   dispatch(processRequestsNG(response.data.articles));
  })
  .catch((err) => dispatch(processRequestFailedNG(err)));
};
