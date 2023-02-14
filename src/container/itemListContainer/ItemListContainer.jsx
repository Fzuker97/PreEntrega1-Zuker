import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { gFetch } from '../../gFetch';
import ItemList from '../../itemList/itemList';
import Loader from '../../Loader/Loader';
import { gFetch } from '../../firebase';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';



export const ItemListContainer = ( {welcome}) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()
  
  useEffect( () => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    
    if (categoryId) {
      const queryCollectionFilter = query(queryCollection, where('categoria', '==', categoryId))
      getDocs(queryCollectionFilter)
      .then(respuestaPromesa => {
        setProductos(respuestaPromesa.docs.map(prod => ( { id: prod.id, ...prod.data()} )))
      })
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

    } else {

      getDocs(queryCollection)
    .then(respuestaPromesa => {
      setProductos(respuestaPromesa.docs.map(prod => ( { id: prod.id, ...prod.data()} )))
    })
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
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
