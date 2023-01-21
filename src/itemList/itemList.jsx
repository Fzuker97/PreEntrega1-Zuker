const ItemList = () => {
    return (
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
          }}> 
      
         { productos.map( producto => <div key={producto.id} className='card w-25 mt-5 shadow ml-5'>
                                          <div className='card-head'>
                                            {producto.name}
                                          </div>
                                          <div className='card-body'>
                                            <img src={producto.foto} alt='ProductoIMG' className='w-100 h-70'/>
                                            <h6>Categoria:{producto.categoria}</h6>
                                            <h6>Precio:{producto.precio}</h6>
                                          </div>
                                          <div className='card-footer'>
                                            <button  className='btn btn-outline-dark w-100'>Ir a detalle</button>
                                          </div>
                                       </div>
              ) 
            }
      
          </div>
    )
}

export default ItemList

