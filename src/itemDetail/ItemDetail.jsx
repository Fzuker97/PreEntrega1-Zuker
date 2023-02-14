import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../CartContext/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) =>{
    const [isInCount, setIsInCount] = useState(true)
    const {agregarCarrito, cartList} = useCartContext()

    const onAdd = (cant) => {
        console.log(cant)

        agregarCarrito({... producto, cantidad: cant})
        setIsInCount(false)
    }
    
    

    return(
        <div className="container pt-5"> 
            <div className="row">
                <div className="col-6">
                        <img src= {producto.foto} className="w-50"/>
                        <h2>Nombre: {producto.name}</h2>
                        <h4>Categoria: {producto.categoria}</h4>
                        <h4>Precio: {producto.price}</h4>
                </div>
                <div className="col-6">
                    {isInCount ?
                        <ItemCount onAdd={onAdd}/>
                :
                    <>
                        <Link to={'/cart'}>
                            <button className="btn btn-outline-primary">Ir Al Carrito</button>
                        </Link>
                        <Link to={'/'}>
                            <button className="btn btn-outline-success">Seguir Comprando</button>
                        </Link>
                    </>
                }
                    
                </div>

            </div>
        </div>
        )
}

export default ItemDetail