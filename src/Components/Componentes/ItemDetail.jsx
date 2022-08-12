import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import './../../CSS/detallePerros.css'

const ItemDetail = ({ itemPerro }) => {

    const { agregarAlCarrito } = useContext(CartContext)
    console.log(agregarAlCarrito)
    return (
        <div className='contenedorDetallePerro'>
            <br />
            <div className='container detallePerro'>
                <div className='imgDetallePerro'>
                    <img className='imgDetalle' src={itemPerro.imgDescripcion} alt={itemPerro.nombre} />
                </div>
                <div className='datosDetallePerro'>
                    <h3 className='nombreDetallPerro'>{itemPerro.nombre}</h3>
                    <h6 className='descripcionDetallePerro'>{itemPerro.descripcion}</h6>
                    <p className='edadDetallePerro'>Edad: {itemPerro.edad}</p>
                    <p className='razaDetallePerro'>Tipo de raza: {itemPerro.raza}</p>
                    <button className='AdoptarPerro'>Adoptar perro</button>
                </div>
            </div>
            <br />
        </div>
    )
}

export default ItemDetail