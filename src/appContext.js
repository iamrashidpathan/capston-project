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

    //console.log(allPhotos)

    function togglgeFavorite(id){
        //console.log(id)
        const newArray = allPhotos.map(x=>{
            if(x.id === id){
                return({...x,
                    isFavorite: !(x.isFavorite)
                })
            }
            else{
                return x
            }
            
        })
        
        setAllPhotos(newArray)

        
    }
    console.log(allPhotos)

    return(
        <AppContext.Provider value={{allPhotos, togglgeFavorite}}>
            {props.children}
        </AppContext.Provider>
    )
}

export  {AppContextProvider, AppContext}