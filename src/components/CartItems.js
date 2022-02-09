import React, { useContext, useState } from "react"
import {AppContext} from "../appContext"
import PropTypes from "prop-types"

function CartItem({item}) {

    const [isHover, setisHover] = useState(false)

    const {removeFromCart} = useContext(AppContext)

    const trashicon = isHover? "ri-delete-bin-fill" :"ri-delete-bin-line"

    return (
        <div className="cart-item">

            <i 
            onMouseEnter={()=>setisHover(true)}
            onMouseLeave={()=>setisHover(false)}
            className= {trashicon}
            onClick={()=>removeFromCart(item.id)}></i>

            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem