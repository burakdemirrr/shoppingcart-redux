import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <nav>
            <div className="right">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="">ACCESSORIES</a></li>
                    <li><a href="">BUNDLES</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
            
        </nav>
        <div className="left">
             <Link to="/cart"><ShoppingCartIcon color="primary"/></Link>   
            </div></>
        )
}

export default Navbar
