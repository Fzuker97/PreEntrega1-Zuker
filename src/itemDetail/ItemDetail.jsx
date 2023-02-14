import { useCartContext } from "../CartContext/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) =>{
    const {agregarCarrito, cartList} = useCartContext()

    const onAdd = (cant) => {
        console.log(cant)

        agregarCarrito({... producto, cantidad: cant})
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
                    <ItemCount onAdd={onAdd}/>
                </div>

            </div>
        </div>
        )
}

export default ItemDetail