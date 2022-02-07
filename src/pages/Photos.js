import React from "react"
import { useContext } from "react"
import {AppContext} from "../appContext"
import Image from "../components/Image"
import {getClass} from "../utils"

function Photos() {
    const context = useContext(AppContext)
    console.log(context[0])
    const photosBox = context.map((image, i) =>
        <Image key={image.id} img={image} className={getClass(i)}></Image>
        )
    return (
        <main className="photos">          
            {photosBox}
        </main>
    )
}

export default Photos