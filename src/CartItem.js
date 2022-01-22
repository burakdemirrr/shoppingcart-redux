import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from './features/CartSlice';
import productProvider from './products';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const CartItem = ({cartItem}) => {
    const product=productProvider.find(p=>p.id === cartItem.productID);
    const dispatch=useDispatch();
    return (
        <div className="cartino">
            <div className="cart-left">
                <div className="img-container"> <img src={`./${product.img}.png`} alt="" /></div>
               
                <div className="inner">
                    <h4>{cartItem.quantity} X {product.name}</h4>
                    <p>${product.price * cartItem.quantity}</p>
                </div>
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
