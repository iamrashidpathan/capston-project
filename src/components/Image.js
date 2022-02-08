import React, { useContext, useState } from "react"
import { AppContext } from "../appContext"


function Image(props){
const [isHover, setisHover] = useState(false)

const {togglgeFavorite} = useContext(AppContext)
//console.log(togglgeFavorite)

    return(
        <div className={`${props.className} image-container`}
        onMouseOver={()=> setisHover(true)}
        onMouseLeave={()=> setisHover(false)}
        >
            {isHover && <i className= "ri-heart-line favorite"
            onClick={()=>togglgeFavorite(props.img.id)}></i>}

            {props.img.isFavorite && <i className="ri-heart-fill favorite"
            onClick={()=>togglgeFavorite(props.img.id)}></i>}
                
            {isHover && <i className="ri-add-circle-line cart"></i>}
                 
            <img src ={props.img.url} className="image-grid" />
        </div>
    )
}

export default Image


//{isHover && <i className="ri-heart-line favorite"></i>}


