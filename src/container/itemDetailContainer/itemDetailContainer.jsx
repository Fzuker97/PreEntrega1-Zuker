import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../gFetch"
import ItemDetail from "../../itemDetail/ItemDetail"

const ItemDetailContainer = () => {
   const[producto, setProducto] = useState ({})
   const {detalleId} = useParams()
   


    useEffect(()=>{
        gFetch(detalleId)
        .then(resp=>setProducto(resp))
    }, [])
    console.log(producto)
    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer