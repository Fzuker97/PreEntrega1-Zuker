import { Link } from "react-router-dom"

const Item = ({producto}) =>{
    return(
    <div key={producto.id} className='card w-25 mt-5 shadow ml-5'>
          <div className='card-head'>
                {producto.name}
              </div>
          <div className='card-body'>
                <img src={producto.foto} alt='ProductoIMG' className='w-100 h-70'/>
                <h6>Categoria:{producto.categoria}</h6>
               <h6>Precio:{producto.price}</h6>
         </div>
              <div className='card-footer'>
                    <Link to={`/detail/${producto.id}`}>
                       <button  className='btn btn-outline-dark w-100'>Ir a detalle</button>
                   </Link>
          </div>
    </div>    )
}

export default Item