import {
 beginProcess,
 processRequestFailedUSA,
 processRequestsUSA
} from '../actions/usa';
import axios from 'axios';

export const fetchNewsUSA = () => (dispatch) => {
 dispatch(beginProcess());

 const API_KEY = '5bfaf80040e24d87b38a79a85168ecf7';
 const API = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

 axios
  .get(API)
  .then((response) => {
   dispatch(processRequestsUSA(response.data.articles));
  })
  .catch((err) => dispatch(processRequestFailedUSA(err)));
};
