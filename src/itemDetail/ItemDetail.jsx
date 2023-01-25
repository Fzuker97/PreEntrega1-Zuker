const ItemDetail = ({producto}) =>{
    return(
        <div className="container"> 
            <div className="row">
                <div className="col-6">
                        <img src= {producto.foto} className="w-50"/>
                        <h2>Nombre: {producto.name}</h2>
                        <h4>Categoria: {producto.categoria}</h4>
                        <h4>Precio: {producto.price}</h4>
                </div>
                <div className="col-6">

                </div>

            </div>
        </div>
        )
}

export default ItemDetail