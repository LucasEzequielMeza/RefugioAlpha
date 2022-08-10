import React from 'react'
import { Link } from 'react-router-dom';
import './../../../CSS/productos.css'
const Item = ({ producto }) => {
    return (
        <div>
            <div className='container'>
                <div className="card cardStyle cardProductos" >
                    <img className='cardImg' src={producto.img} alt="" />
                    <div id='cardBody'>
                        <h5 className="card-title" id='nombre'>{producto.nombre}</h5>
                        <p className="card-text" id='descripcion'> {producto.descripcion}</p>
                        <p className="card-text" id='stock'>Stock: {producto.stock}</p>
                        <p className="card-text" id='precio'>Precio: $ {producto.precio}</p>
                    </div>
                    <Link to={`/prod/${producto.id}`}><button id='informacion'>Informacion</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Item