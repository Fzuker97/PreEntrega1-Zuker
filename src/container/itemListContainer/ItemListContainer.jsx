import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../gFetch';
import ItemList from '../../itemList/itemList';



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
    else {
      gFetch()
      .then(respuestaPromesa =>{
        setProductos(respuestaPromesa)
      })
      .catch(err=> console.log(err))
      .finally(()=> setLoading(false))
    }}
    , [categoryId ])
    
    
 
    console.log(productos)
    return (
    <div className='container'>
         { loading 
      ?
        <center>
          <h1>Cargando...</h1>
          </center>
      :
          <ItemList productos={productos}/>
         }
    </div>
      
  )
}
