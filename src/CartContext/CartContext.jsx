import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([])

export const useCartContext =() => useContext(CartContext)

export const CartContextProvider = ({children})=>{

    const [cartList, setCartList] = useState([])

    const agregarCarrito = (newProduct) =>{
        const idx = cartList.findIndex(product => product.id === newProduct.id)
        if(idx != -1 ){
            cartList[idx].cantidad =  cartList[idx].cantidad + newProduct.cantidad 
            setCartList([...cartList ])
        } else{
            setCartList([...cartList, newProduct])
        }
        
    }

    const cantidadTotal = () => cartList.reduce((count, objProducto) => count += objProducto.cantidad, 0 )


    const precioTotal = () => cartList.reduce((count, objProducto) =>  count += (objProducto.cantidad * objProducto.precio), 0 )

    const eliminarItem = id => setCartList(cartList.filter(product => product.id != id))

    const vaciarCarrito = () => {
        setCartList([])   
    }


    return(
        <CartContext.Provider value={{
            cartList, 
            agregarCarrito, 
            vaciarCarrito, 
            cantidadTotal,
            eliminarItem,
            precioTotal
            }}>
            {children}
        </CartContext.Provider>
    )
}