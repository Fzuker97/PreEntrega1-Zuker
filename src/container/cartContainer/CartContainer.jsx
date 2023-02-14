import { useCartContext } from "../../CartContext/CartContext"

const CartContainer = () => {

    const { cartList, vaciarCarrito, precioTotal, eliminarItem } = useCartContext()

    return (
        <div>
            {cartList.map(prod => <div key={prod.id} className='p-5 border border-dark'>
                    <img src={prod.foto} alt='img' className='w-25' />
                    <label>Nombre: {prod.name}</label>
                    <label>Cantidad: {prod.cantidad}</label>
                    <label>Precio: {prod.price}</label>
                    <button onClick={() => eliminarItem(prod.id)}>X</button>
             </div>) }
             <button onClick={vaciarCarrito} className='btn btn-outline-danger  my-5'>Vaciar Carrito</button>
             <h2>Precio Total: {precioTotal() != 0 && precioTotal()}</h2>
        </div>
    )
}

export default CartContainer