import React from 'react'
import './../../CSS/cartItem.css'

const CartItem = ({ item, eliminarProductoCarrito }) => {

    return (
        <div className='contenedorCarrito'>
            <ul className='carrito'>
                <li className='imgEnCarrito'>
                    <img className='imgCarrito' src={item.img} alt={item.nombre} />
                </li>
                <li className='datosCarrito'>
                    <p className='datosNombreCarrito'>{item.nombre}</p>
                    <p className='datosDescripcionCarrito'>{item.descripcion}</p>
                </li>
                <li className='cantidadCarrito'>
                    <p>Cantidad seleccionada</p>
                    <p>{item.cantidad}</p>
                </li>
                <li className='precioCarrito'>
                    <p className='precioProductoCarrito'>Precio por unidad: ${item.precio}</p>
                    <button className='btn btn-danger' onClick={eliminarProductoCarrito}>Eliminar</button>
                </li>
            </ul>
        </div>

    )
}

export default CartItem
