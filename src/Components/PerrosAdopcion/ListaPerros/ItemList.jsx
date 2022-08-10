import React from 'react'
import Item from './Item'
import './../../../CSS/ItemList.css'
import ItemProductos from '../../ContenedorProductos/ListaProductos/ItemProductos'


const ItemList = ({ item }) => {
    return (
        <div className='conteiner contenedorItemlist'>
            <div className='perros'>
                <div className='perros productos'>
                    {item === '../Data/perros.json' ? item.map((item) => <Item key={item.id} perro={item} />) : item.map((item) => <ItemProductos key={item.id} producto={item} />)}
                </div>
            </div>
        </div>
    )


}


export default ItemList