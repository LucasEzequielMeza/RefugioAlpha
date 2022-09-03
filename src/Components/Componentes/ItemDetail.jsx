import React from 'react'
import { Link } from 'react-router-dom'
import './../../CSS/detallePerros.css'

const ItemDetail = ({ itemPerro }) => {


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
                    <Link to={'formulario-adopcion'}><button className='AdoptarPerro btn btn-dark'>Adoptar perro</button></Link>
                </div>
            </div>
            <br />
        </div>
    )
}

export default ItemDetail