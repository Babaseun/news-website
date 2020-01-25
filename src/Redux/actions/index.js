import {
 BEGIN_FETCH_REQUEST,
 FETCH_HEADLINES_NIGERIA,
 ERRORS_FOR_NG
} from '../types/index';

export const beginProcess = () => {
 return {
  type: BEGIN_FETCH_REQUEST
 };
};
export const processRequestsNG = (data) => {
 return {
  type: FETCH_HEADLINES_NIGERIA,
  payload: data
 };
};
export const processRequestFailedNG = (err) => {
 return {
  type: ERRORS_FOR_NG,
  payload: err
 };
};
