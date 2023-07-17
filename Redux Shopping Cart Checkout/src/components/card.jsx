import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartSlice from '../data/cart'

const Card = () => {
    const dispatch = useDispatch()
    const { productPrice, pickupCharge, taxes, finalPrice } = useSelector(state => state.cart)
    const { getDiscountedPrice } = cartSlice.actions
    
    const [open, setOpen] = useState(false)
    const couponRef = useRef()

    const applyCoupon = () => dispatch(getDiscountedPrice(couponRef.current.value))
    const showProduct = () => setOpen(!open)

    const displayPrice = finalPrice ? finalPrice : productPrice + taxes - pickupCharge

    return <section className = 'bg-[#f5f5f5] text-xs rounded-md shadow-lg w-2/5 mx-auto my-24 p-6'>
        <div className = 'flex flex-col gap-6 border-b-2 border-gray-300 mb-6 pb-6'>
            <span>
                <h2>Sub Total</h2>
                $ { productPrice }
            </span>
            <span>
                <h2 className = 'line-through'>Pickup Savings</h2>
                <b className = 'text-red-600'>$ -{ pickupCharge }</b>
            </span>
            <span>
                <h2>Estimated taxes and fees (based on 94085)</h2>
                $ { taxes }
            </span>
        </div>
        <div className = 'flex flex-col gap-6 border-b-2 border-gray-300 mb-6 pb-6'>
            <span className = 'text-xl'>
                <h1>Estimated Total</h1>
                $ { displayPrice.toFixed(2) }
            </span>
            <span>
                <h2>See item details</h2>
                <button onClick = { showProduct }>+</button>
            </span>
            {
                open && <div className = 'flex justify-between'>
                    <img src = './static/tee.png' className = '' />
                    <div className = 'flex flex-col items-end'>
                        <p className = 'text-justify mb-6'>
                            Cotton tee from WoozBuz crafted with animal colors
                            and Spanish fabric. Limited edition for the new age
                            generation.
                        </p>
                        <b className = 'text-xs text-gray-500 line-through'>$ { productPrice + taxes + pickupCharge }</b>
                        <b className = 'text-md'>$ { displayPrice }</b>
                    </div>
                </div>
            }
        </div>
        <div>
            <h2>Apply promo code</h2>
            <input type = 'text' ref = { couponRef } className = 'border border-green-300 rounded-md w-full my-4 p-2' />
            <button onClick = { applyCoupon } className = 'bg-green-500 text-white rounded-md w-full p-2'>Apply</button>
        </div>
    </section> 
}
 
export default Card