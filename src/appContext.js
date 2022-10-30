import React, { useState, useEffect } from "react";

const AppContext= React.createContext();



function AppContextProvider(props){

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
        
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(()=> {
        fetch(url)
            .then(response => response.json())
            .then(data => setAllPhotos(data))
    },[])


    function togglgeFavorite(id){
        // (id)
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


    function addToCart(img){

        const isInCart = cartItems.filter(i => (i.id === img.id))

       
        // (cartItems)
        if(!isInCart.length){
            setCartItems((prevItems)=>{
                // (prevItems)
                  return(
                      [
                          ...prevItems,
                          img,
                          
                      ]
                  )
            })
        }

        
    }


    function removeFromCart(id){
        const newArray = cartItems.filter(item => (item.id != id))

        setCartItems(newArray)
    }

    function emptyCart(){
        setCartItems([])
    }
    
    // (cartItems)

    return(
        <AppContext.Provider value={{allPhotos, cartItems, togglgeFavorite, addToCart, removeFromCart, emptyCart}}>
            {props.children}
        </AppContext.Provider>
    )
}

export  {AppContextProvider, AppContext}