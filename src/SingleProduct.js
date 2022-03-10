import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { addItemToCart } from './features/CartSlice';
import productProvider from './products';
import QuantityButton from './QuantityButton';

const SingleProduct = () => {
    let {id } =useParams();

    const product=productProvider.find(p=>p.id ===id);

    const [quantity,setQuantity]=useState(1);
    const dispatch=useDispatch();
  return (
    <div className='se'>
        <div className="image_container">
            <img src={`../${product.img}.png`} alt="" />
        </div>
        <div className="text_container">
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <QuantityButton quantity={quantity} setQuantity={setQuantity} className="qty"/>
            <button className='btn'    
             onClick={()=>{
                dispatch(addItemToCart({product,quantity}));
                setQuantity(1);
                toast.success("Cart item added!")
            }}
            
            >Add Item To Cart</button>
        </div>
    </div>
  )
}

export default SingleProduct