import React from 'react'
import ItemProd from './ItemProd'
import './../../CSS/ItemList.css'

const ItemListProductos = ({ productos }) => {
    return (
        <div className='conteiner contenedorItemlist'>
            <p className='tituloProductos'>Productos</p>
            <div className='producto'>
                {productos.map((item) => <ItemProd key={item.id} producto={item} />)}
            </div>
        </div>
    )
}

export default ItemListProductos