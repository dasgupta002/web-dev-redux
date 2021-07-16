import { combineReducers } from 'redux';
import { couponReducer } from './promo';

export default combineReducers({
  promo: couponReducer
})