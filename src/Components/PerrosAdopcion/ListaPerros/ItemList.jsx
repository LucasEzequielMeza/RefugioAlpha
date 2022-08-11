import React from 'react'
import './../../../CSS/ItemList.css'
import ItemProductos from '../../ContenedorProductos/ListaProductos/ItemProductos'
import Item from './Item'


const ItemList = ({ item }) => {
    return (
        <div className='conteiner contenedorItemlist'>
            <div className='perros productos'>
                {item !== '../Data/producto.json' ? item.map((item) => <Item key={item.id} perro={item} />) : item.map((item) => <ItemProductos key={item.id} producto={item} />)}
            </div>
        </div>
    )


}


export default ItemList