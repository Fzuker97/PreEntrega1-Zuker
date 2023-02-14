import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([])

export const useCartContext =() => useContext(CartContext)

export const CartContextProvider = ({children})=>{

    const [cartList, setCartList] = useState([])

    const agregarCarrito = (product) =>{
        setCartList([...cartList, product])
    }

    const vaciarCarrito = () => {
        setCartList([])   
    }


    return(
        <CartContext.Provider value={{cartList, agregarCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}