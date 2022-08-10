import React from 'react'
import Item from './Item'
import './../../../CSS/ItemList.css'
import ItemProductos from '../../ContenedorProductos/ListaProductos/ItemProductos'
<<<<<<< main
=======

>>>>>>> local
const ItemList = ({ item }) => {

    return (
        <div className='conteiner contenedorItemlist'>
<<<<<<< main
            <div className='perros'>
=======
            <div className='perros productos'>
>>>>>>> local
                {item === '../Data/perros.json' ? item.map((item) => <Item key={item.id} perro={item} />) : item.map((item) => <ItemProductos key={item.id} producto={item} />)}
            </div>
        </div>
    )
}

export default ItemList