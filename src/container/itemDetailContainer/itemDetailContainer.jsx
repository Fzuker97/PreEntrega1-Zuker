import { doc, getFirestore, getDoc } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSingleItem, gFetch } from "../../firebase"
import ItemDetail from "../../itemDetail/ItemDetail"


const ItemDetailContainer = () => {
   const[producto, setProducto] = useState ({})
   const {detalleId} = useParams()
   


    useEffect(()=>{
       getSingleItem(detalleId).then(result => setProducto(result))
       .catch(err => console.error(err))
    }, [])
    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer