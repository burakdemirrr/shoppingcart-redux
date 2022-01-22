import React from 'react'
import Product from './Product';
import productProvider from './products';

const Home = () => {
    return (
        <div className="productsProvider">
            {
                productProvider.map((product)=><Product product={product} key={product.id} />)
            }
            
        </div>
    )
}

export default Home
