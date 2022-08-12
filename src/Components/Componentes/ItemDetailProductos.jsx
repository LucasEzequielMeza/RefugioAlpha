import React, { useState, useContext, useEffect } from 'react'
import ItemCount from './ItemCount'
import './../../CSS/detalleProducto.css'
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from '../Context/CartContext';

const ItemDetailProductos = ({ item }) => {
    const { agregarAlCarrito } = useContext(CartContext)
    const [count, setCount] = useState(0)
    const [button, setButton] = useState(true)

    const onAdd = (cantidadItems) => {
        console.log(`Agregaste ${cantidadItems} de items al carrito`)
        setCount(cantidadItems)
        agregarAlCarrito(item, cantidadItems)

        setButton(false)
    }
    useEffect(() => {
        console.log({ count })
    }, [count])

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
                    {button === true ? <ItemCount initial={1} stock={item.stock} onAdd={onAdd} /> : <Link to={'/cart'}><button>Finalizar Compra</button></Link>}
                </div>
            </div>
            <br />
        </div>
    )
}

export default ItemDetailProductos