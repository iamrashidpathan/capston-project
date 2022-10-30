import React from "react"
import { useContext } from "react"
import {AppContext} from "../appContext"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos}  = useContext(AppContext)
    // (allPhotos)
    
    const photosBox = allPhotos.map((image, i) =>
        <Image key={image.id} img={image} className={getClass(i)}></Image>
        )
    return (
        <main className="photos">          
            {photosBox}
        </main>
    )
}

export default Photos