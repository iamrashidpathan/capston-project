import React, { useContext, useState } from "react"
import { AppContext } from "../appContext"
import PropTypes, { func } from "prop-types"


function Image({className, img}){
const [isHover, setisHover] = useState(false)

const {togglgeFavorite, addToCart, cartItems,removeFromCart} = useContext(AppContext)
//console.log(togglgeFavorite)

    var isinCart = cartItems.filter(item => (item.id === img.id))

    isinCart = isinCart.length !==0

    const addToCartIcon = function(){
        if(isinCart){
            return <i className="ri-shopping-cart-fill cart"
            onClick={()=> removeFromCart(img.id)}></i>
        }else if(isHover){
            return <i className="ri-add-circle-line cart"
            onClick={()=>addToCart(img)}></i>
        }
    }

    //console.log(addToCartIcon)

    return(
        <div className={`${className} image-container`}
        onMouseOver={()=> setisHover(true)}
        onMouseLeave={()=> setisHover(false)}
        >
            {isHover && <i className= "ri-heart-line favorite"
            onClick={()=>togglgeFavorite(img.id)}></i>}

            {img.isFavorite && <i className="ri-heart-fill favorite"
            onClick={()=>togglgeFavorite(img.id)}></i>}

            {addToCartIcon()}

            <img src ={img.url} className="image-grid" />
        </div>
    )
}

Image.propTypes ={
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image


//{isHover && <i className="ri-heart-line favorite"></i>}


