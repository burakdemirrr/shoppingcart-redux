import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { getCartItems, getTotalPrice, resetCart } from './features/CartSlice';

const Cart = () => {

    const cartItems=useSelector(getCartItems);
    let totalPrice=useSelector(getTotalPrice);
    const dispatch=useDispatch();

    
    console.log(totalPrice+ 122);
   
    return (
        <div className="cart">
            <h2 className="title">My Shopping Bag</h2>

            {cartItems.map((cartItem)=><CartItem cartItem={cartItem} totalPrice={totalPrice} />)}
            
            <div className="total">
                <p>Total : {totalPrice}</p>
                <button onClick={()=>dispatch(resetCart())}>Pay Now!</button>
            </div>
        </div>
    )
}
export default Cart
