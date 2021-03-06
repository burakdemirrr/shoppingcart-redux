import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart } from './features/CartSlice';
import QuantityButton from './QuantityButton';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const [quantity,setQuantity]=useState(1);
    const dispatch = useDispatch();
    const navigate=useNavigate();
    console.log(product)
    return (
        <div className="product">
            <div>
                <img src={`./${product.img}.png`}/>
            </div>
            <div className="description">
                <Link to={`/item/${product.id}`} className="title">
                <h2 className="title" >{product.name}</h2>
                </Link>
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
