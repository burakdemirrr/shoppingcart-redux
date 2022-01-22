import React from 'react'

const QuantityButton = ({quantity,setQuantity}) => {
    return (
        <div className="quantitybutton">
            <button onClick={()=>setQuantity(quantity-1)} disabled={quantity===1 }>-</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity(quantity+1)} disabled={quantity===5}>+</button>
        </div>
    )
}

export default QuantityButton
