import React from 'react'
import Item from './Item'
import './../../../CSS/ItemList.css'
import ItemPerro from '../../PerrosAdopcion/ItemPerro'
const ItemList = ({ listaProductos, listaDePerros }) => {
    return (
        <div className='conteiner contenedorItemlist'>
            <div className='producto'>
                {listaProductos.map((producto) => <Item key={producto.id} producto={producto} />)}
            </div>
            <div className='perros'>
                {listaDePerros.map((perro) => <ItemPerro key={perro.id} perro={perro} />)}
            </div>
        </div>
    )
}

export default ItemList