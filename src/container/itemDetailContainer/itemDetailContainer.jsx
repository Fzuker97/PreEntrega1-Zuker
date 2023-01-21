import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
   const {detailId} = useParams
   console.log(detailId)



    return (
        <div>ItemDetailContainer {detailId}</div>
    )
}

export default ItemDetailContainer