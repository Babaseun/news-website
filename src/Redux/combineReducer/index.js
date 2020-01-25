import { combineReducers } from 'redux';
import { reducerNG } from '../reducers/index';
import { reducerUSA } from '../reducers/usa';

const allReducers = combineReducers({
 NG: reducerNG,
 US: reducerUSA
});
export default allReducers;
