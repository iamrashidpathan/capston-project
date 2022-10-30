import React, { useContext, useEffect, useState } from "react"
import {AppContext} from "../appContext"
import CartItem from "../components/CartItems"



function Cart() {

    
    const {cartItems, emptyCart} = useContext(AppContext)
    
    const cart = cartItems.map(item=>{
        return (
            <CartItem key={item.id} item={item}/>
        )
        })

        const [buttontext, setButtonText] = useState("Place Order")

    // (cartItems)

        

        function handleOrder(e){
            // ("click")
            setButtonText("Ordering...")
            setTimeout(
                ()=>{
                     ("Order placed!")
                    setButtonText("Place Order")
                    emptyCart()
                    alert("Order placed!")
                    
                }
                , 3000)
        }

        

        



    
    return (
        <main className="cart-page">
            {cartItems.length !==0 &&<h1>Check out</h1>}
            {cartItems.length ===0 &&<h1>Start collecting Awesome stuffs</h1>}
            {cart}
            <p className="total-cost">Total: ${Math.round(cartItems.length * 5.99*100)/100} </p>
            
            { cartItems.length !==0 &&
                <div className="order-button">
                <button onClick={handleOrder}>{buttontext}</button>
                </div>
            }
            
        </main>
    )
}

export default Cart