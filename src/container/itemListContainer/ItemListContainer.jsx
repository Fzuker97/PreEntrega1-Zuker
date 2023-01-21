import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { gFetch } from '../../gFetch';



export const ItemListContainer = ( {welcome}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  
  useEffect(()=>{
    if (categoryId){
      gFetch()
      .then(respuestaPromesa =>{
        setProductos(respuestaPromesa.filter(items => items.categoria === categoryId))
      })
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
      }
    }else {
      gFetch()
      .then(respuestaPromesa =>{
        setProductos(respuestaPromesa)
      })
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
    }, [categoryId ])
    
    
 
    console.log(productos)
    return (
    <div style={{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap'
    }}> 
      
      
      { loading 
      ?
        <h1>Cargando...</h1>
      :
      productos.map( producto => <div key={producto.id} className='card w-25 mt-5 shadow ml-5'>
                                    <div className='card-head'>
                                      {producto.name}
                                    </div>
                                    <div className='card-body'>
                                      <img src={producto.foto} alt='ProductoIMG' className='w-100 h-70'/>
                                      <h6>Categoria:{producto.categoria}</h6>
                                      <h6>Precio:{producto.precio}</h6>
                                    </div>
                                    <div className='card-footer'>
                                      <Link to={`/detail/${producto.id}`}>
                                      <button  className='btn btn-outline-dark w-100'>Ir a detalle</button>
                                      </Link>
                                    </div>
                                 </div>
        ) 
      }

    </div>
  )
}
