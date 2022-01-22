import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { getCartItems, getTotalPrice } from './features/CartSlice';

const Cart = () => {

    const cartItems=useSelector(getCartItems);
    const totalPrice=useSelector(getTotalPrice);
   
    return (
        <div className="cart">
            <h2 className="title">My Shopping Bag</h2>

            {cartItems.map((cartItem)=><CartItem cartItem={cartItem} />)}
            
            <div className="total">
                <p>Total : {totalPrice}</p>
                <button >Pay Now!</button>
            </div>
        </div>
    )
}
export default Cart
