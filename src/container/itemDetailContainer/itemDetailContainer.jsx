import { doc, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../firebase"
import ItemDetail from "../../itemDetail/ItemDetail"

const ItemDetailContainer = () => {
   const[producto, setProducto] = useState ({})
   const {detalleId} = useParams()
   


    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, 'items', detalleId)
        getDoc(queryDoc)
        .then(results => setProducto( { id: results.id, ...results.data()}) )
        .catch(err => console.error(err))
    }, [])
    console.log(producto)
    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer