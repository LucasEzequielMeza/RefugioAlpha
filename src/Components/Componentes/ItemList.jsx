import React from 'react'
import './../../CSS/ItemList.css'
import ItemProductos from './ItemProductos'
import Item from './Item'


const ItemList = ({ JSONaMapear, JSONrecibido }) => {

    return (
        <div className='conteiner contenedorItemlist'>
            <div className='perros productos'>
                {JSONrecibido !== ('../Data/producto.json') ? JSONaMapear.map((item) => <Item key={item.id} perro={item} />) : JSONaMapear.map((item) => <ItemProductos key={item.id} producto={item} />)}
            </div>
        </div>
    )


}


export default ItemList