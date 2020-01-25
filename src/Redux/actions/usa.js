import {
 BEGIN_FETCH_REQUEST,
 FETCH_HEADLINES_USA,
 ERRORS_FOR_USA
} from '../types/usa';

export const beginProcess = () => {
 return {
  type: BEGIN_FETCH_REQUEST
 };
};
export const processRequestsUSA = (data) => {
 return {
  type: FETCH_HEADLINES_USA,
  payload: data
 };
};
export const processRequestFailedUSA = (err) => {
 return {
  type: ERRORS_FOR_USA,
  payload: err
 };
};
