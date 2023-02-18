import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { gFetch } from '../../gFetch';
import ItemList from '../../itemList/itemList';
import Loader from '../../Loader/Loader';
import { getItemByCategory, gFetch } from '../../firebase';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';



export const ItemListContainer = ( {welcome}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  
  useEffect( () => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    
    if (categoryId) {
     getItemByCategory(categoryId).then(res=> setProductos(res)).then(setLoading(false))

    } else {
      gFetch().then(res=> setProductos(res)).then(setLoading(false))
      
    }
  }, [categoryId])

    
  /*useEffect(()=>{
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
    , [categoryId ])*/
    
    
 
    console.log(productos)
    return (
    <div className='container'>
         { loading 
      ?
        <center>
          <Loader />
          </center>
      :
          <ItemList productos={productos}/>
         }
    </div>
      
  )
}
