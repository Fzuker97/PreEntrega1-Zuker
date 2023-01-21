import { Link } from 'react-router-dom'
import imagen from '../img/shopping.png'

export const CartWidget = () => {
  return (
    <div>
      <Link to="/cart">
        <img src={imagen} alt='imagen'/>
      </Link>
    </div>
  )
}
