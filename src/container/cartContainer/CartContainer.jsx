import { useCartContext } from "../../CartContext/CartContext"

const CartContainer = () => {

    const { cartList, vaciarCarrito } = useCartContext()

    return (
        <div>
            {cartList.map(prod => <div key={prod.id} className='p-5 border border-dark'>
                    <img src={prod.foto} alt='img' className='w-25' />
                    <label>Nombre: {prod.name}</label>
                    <label>Cantidad: {prod.cantidad}</label>
                    <label>Precio: {prod.price}</label>
             </div>) }
             <button onClick={vaciarCarrito} className='btn btn-outline-danger  my-5'>Vaciar Carrito</button>
        </div>
    )
}

export default CartContainer