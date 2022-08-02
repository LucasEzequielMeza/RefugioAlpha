import React from 'react'
import Item from './Item'
import './../../../CSS/productos.css'
const ItemList = ({ listaProductos }) => {
    return (
        <div className='productos'>
            {listaProductos.map((producto) => <Item key={producto.id} producto={producto} />)}
        </div>
    )
}

export default ItemList