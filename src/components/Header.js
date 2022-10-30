
import React, { useContext } from "react"
import {Link} from "react-router-dom"
import {AppContext} from "../appContext"

function Header() {
    const {cartItems} = useContext(AppContext)
    const noOfCartItems = cartItems.length
    function cartIcon(){
        if(noOfCartItems){
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        }else{
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
    }
    return (
        <header>
            <Link to='/capstonproject'>
                <h2 style={{margin: 2,padding:5}} >Pic Some</h2>
            </Link>  
           <Link to="/cart">
            {cartIcon()}
           </Link>   
        </header>
    )
}

export default Header
