import React from "react"
import { useContext } from "react"
import {AppContext} from "../appContext"

function Photos() {
    const context = useContext(AppContext)
    console.log(context[0])
    const photosBox = context.map(image => 
        <img key={image.id} src={image.url}/>)
    return (
        <main className="photos">
            <h1>Images go here </h1>
            {photosBox}
        </main>
    )
}

export default Photos