import React, { useState } from "react"

function Image(props){
const [isHover, setisHover] = useState(false)

    function handleHover(e){
        
        setisHover((prevState)=>(!prevState))
    }
    console.log(isHover)

    return(
        <div className={`${props.className} image-container`}>
            {isHover && <i className="ri-heart-line favorite"></i>}
            {isHover && <i className="ri-add-circle-line cart"></i>}
            <img onMouseOver={handleHover}
            onMouseLeave={handleHover} 
            src ={props.img.url} className="image-grid" />
        </div>
    )
}

export default Image