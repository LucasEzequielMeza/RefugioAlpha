import React from 'react'
import ItemCount from '../AgregarProductos/ItemCount'


const ItemDetailPerros = ({ itemPerro }) => {
    const onAdd = (cantidadItems) => {
        console.log(`Agregaste ${cantidadItems} de items al carrito`)
    }
    return (
        <div className='contenedorDetallePerro'>
            <br />
            <div className='container detallePerro'>
                <img src={itemPerro.imgDescripcion} alt={itemPerro.nombre} />
            </div>
            <div className='datosDetallePerro'>
                <h3 className='nombreDetallPerro'>{itemPerro.nombre}</h3>
                <h6 className='descripcionDetallePerro'>{itemPerro.descripcion}</h6>
                <p className='edadDetallePerro'>{itemPerro.edad}</p>
                <p className='razaDetallePerro'>{itemPerro.raza}</p>
            </div>
            <div className='AdoptarPerro'>
                <ItemCount initial={1} onAdd={onAdd} />
            </div>
            <br />
        </div>
    )
}

export default ItemDetailPerros