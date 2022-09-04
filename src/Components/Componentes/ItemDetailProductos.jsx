import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import './../../CSS/detalleProducto.css'
import { Link } from "react-router-dom";
import { CartContext } from '../Context/CartContext';

const ItemDetailProductos = ({ item }) => {
    const { agregarAlCarrito } = useContext(CartContext)
    const [button, setButton] = useState(true)

    const onAdd = (cantidadItems) => {
        agregarAlCarrito(item, cantidadItems)
        setButton(false)
    }


    return (
        <div className='contenedorDetalleProducto'>
            <br />
            <div className='container detalleProducto'>
                <div className='imgDetalleProducto'>
                    <img src={item.imgDescripcion} alt={item.nombre} />
                </div>
                <div className='datosDetalleProducto'>
                    <h3 className='nombreDetalleProducto'>{item.nombre}</h3>
                    <h6 className='descripcionDetalleProducto'>{item.descripcionCompleta}</h6>
                </div>
                <div className='beneficioDetalleProducto'>
                    <p className="tituloBeneficioDetalleProducto">Beneficios</p>
                    <ul className='beneficiosDetalleProducto'>
                        {item.beneficios?.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className='precioAgregarDetalleProducto'>
                    <p className='precioDetalleProducto'>$ {item.precio}</p>
                    {button === true ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> :
                        <div>
                            <Link to={'/cart'}><button className='btn btn-dark'>Ir al carrito</button></Link>
                            <Link to={'/productos'}><button className='btn btn-dark'>Seguir comprando</button></Link>
                        </div>}
                </div>
            </div>
            <br />
        </div>
    )
}

export default ItemDetailProductos