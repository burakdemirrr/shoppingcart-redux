import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart } from './features/CartSlice';
import QuantityButton from './QuantityButton';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Product = ({product}) => {
    const [quantity,setQuantity]=useState(1);
    const dispatch = useDispatch();
    return (
        <div className="product">
            <div>
                <img src={`./${product.img}.png`}/>
            </div>
            <div className="description">
                <h2 className="title">{product.name}</h2>
                <p className="price">${product.price}</p>
                <QuantityButton setQuantity={setQuantity} quantity={quantity}/>
                <button className="hah"
                onClick={()=>{
                    dispatch(addItemToCart({product,quantity}));
                    setQuantity(1);
                    toast.success("Cart item added!")
                }
            } 
                >Add To Cart</button>
            </div>
            
        </div>
    )
}

export default Product
