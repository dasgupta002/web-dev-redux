import { PROMO_CODE } from '../actions/types'

const initialState = {
  open: false,
  coupon: ''
}

export const couponReducer = (state = initialState, action) => {
  switch(action.type) {
    case PROMO_CODE:
      return {
        ...state,
        coupon: action.payload
      }
    default:
      return state
  }
}