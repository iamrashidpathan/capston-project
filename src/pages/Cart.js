import React, { useContext } from "react"
import {AppContext} from "../appContext"



function Cart() {

    const {cartItems, removeFromCart} = useContext(AppContext)
    
    const cart = cartItems.map(item=>{
        return (
            <img key={item.id} src={item.url}/>
        )
        })

    //console.log(cartItems)
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cart}
        </main>
    )
}

export default Cart