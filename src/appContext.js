import React, { useState, useEffect } from "react";

const AppContext= React.createContext();



function AppContextProvider(props){

    const [allPhotos, setAllPhotos] = useState([])
        
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(()=> {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    },[])

    console.log(allPhotos)

    return(
        <AppContext.Provider value={allPhotos}>
            {props.children}
        </AppContext.Provider>
    )
}

export  {AppContextProvider, AppContext}