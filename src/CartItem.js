import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCart, getTotalPrice, increaseCart, removeFromCart ,updateQuantity} from './features/CartSlice';
import productProvider from './products';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartItem = ({cartItem}) => {
    const dispatch=useDispatch();
    console.log(cartItem);
   
    
    return (
        <div className="cartino">
            <div className="cart-left">
                <div className="img-container"> <img src={`./${cartItem.img}.png`} alt="" /></div>
                  <button onClick={()=>dispatch(increaseCart(cartItem))}>-</button>
                  <div className="inner">
                    <h4>{cartItem.quantity} X {cartItem.name}</h4>
                    <p>${cartItem.price * cartItem.quantity}</p>
                </div>
              
                <button onClick={()=>dispatch(decreaseCart(cartItem))}>+</button>

                <div className="cartItemRemoveButtonContainer"
                onClick={()=>dispatch(removeFromCart(cartItem))}
            >
                <span>
                     <DeleteIcon className="delete" />
                </span>

            </div> 

            </div>
        </div>
    )
}

export default CartItem
