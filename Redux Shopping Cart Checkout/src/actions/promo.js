import { PROMO_CODE } from './types'

export const handleDiscount = event => dispatch => {
  dispatch({
    type: PROMO_CODE,
    payload: event.target.value
  })
}