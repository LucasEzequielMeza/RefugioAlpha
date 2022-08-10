import React from 'react'
import ItemCount from '../../AgregarProductos/ItemCount'
import './../../../CSS/productos.css'

const ItemDetailProductos = ({ item }) => {
    const onAdd = (cantidadItems) => {
        console.log(`Agregaste ${cantidadItems} de items al carrito`)
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
                        {item.beneficios.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className='precioAgregarDetalleProducto'>
                    <p className='precioDetalleProducto'>$ {item.precio}</p>
                    <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
            <br />
        </div>
    )
}

export default ItemDetailProductos