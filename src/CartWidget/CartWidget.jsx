import { Link } from 'react-router-dom'
import { useCartContext } from '../CartContext/CartContext'
import imagen from '../img/shopping2.png'

export const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
  return (
    <div style={{color: 'white'}}>
      {cantidadTotal()}
      <Link to="/cart">
        <img src={imagen} alt='imagen' />
      </Link>
    </div>
  )
}
