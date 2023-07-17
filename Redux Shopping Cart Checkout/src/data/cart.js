import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productPrice: 118.01,
        pickupCharge: 3.38,
        taxes: 10.03,
        couponValue: 12.47,
        finalPrice: 0.00
    },
    reducers: {
        getDiscountedPrice: (state, action) => {
            if (action.payload === 'DISCOUNT') {
                state.finalPrice = (state.productPrice + state.taxes - state.pickupCharge) - state.couponValue
            }
        }
    }
})

export default cartSlice