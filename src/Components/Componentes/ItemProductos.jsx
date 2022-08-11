import React from 'react'
import { Link } from 'react-router-dom'
import './../../CSS/productos.css'
const ItemProductos = ({ producto }) => {
    return (
        <div>
            <div className='container'>
                <div className="card cardStyle cardProductos" >
                    <img className='cardImg cardImgProductos' src={producto.img} alt="" />
                    <div id='cardBody cardProducto'>
                        <h5 className="card-title" id='nombre'>{producto.nombre}</h5>
                        <p className="card-text" id='descripcion'> {producto.descripcion}</p>
                        <p className="card-text" id='stock'>Stock: {producto.stock}</p>
                        <p className="card-text" id='precio'>Precio: $ {producto.precio}</p>
                    </div>
                    <Link to={`/item/${producto.id}`}><button id='informacion'>Informacion</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ItemProductos
