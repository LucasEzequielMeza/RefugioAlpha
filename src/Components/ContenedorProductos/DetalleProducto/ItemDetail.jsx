import React from 'react'
import ItemCount from '../../AgregarProductos/ItemCount'
import './../../../CSS/detalleProducto.css'

const ItemDetail = ({ item }) => {
    const onAdd = (cantidadItems) => {
        console.log(`Agregaste ${cantidadItems} de items al carrito`)
    }
    return (
        <div>
            <h1>ItemDetail</h1>
            <div id='contenedor'>
                <img className='imgProd' src={item.imgDescripcion} alt={item.nombre} />
                <h3 className='nombreProd'>Nombre: {item.nombre}</h3>
                <h3 className='descripcionProd'>Descripcion: {item.descripcionCompleta}</h3>
                <h2 className='beneficiosTitulo'>Beneficios</h2>
                <ul className='beneficiosProd'>
                    {item.beneficios.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                <h3 className='marcaProd'>Marca: {item.marca}</h3>
                <h3 className='stockProd'>Stock: {item.stock}</h3>
                <h3 className='precioProd'>Precio: {item.precio}</h3>
                <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail