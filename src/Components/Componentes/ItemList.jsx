import React from 'react'
import './../../CSS/ItemList.css'
import ItemProductos from './ItemProductos'
import Item from './Item'


const ItemList = ({ JSONaMapear, card }) => {
    return (
        <div className='conteiner contenedorItemlist'>
            {card === 'perros' ? <div className='perros'>{JSONaMapear.map((item) => <Item key={item.id} perro={item} />)}</div>
                : <div className='producto'>{JSONaMapear.map((item) => <ItemProductos key={item.id} producto={item} />)}</div>}
        </div>
    )


}


export default ItemList