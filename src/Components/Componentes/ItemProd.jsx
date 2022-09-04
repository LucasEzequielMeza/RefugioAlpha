import React from 'react'
import { Link } from 'react-router-dom'
import './../../CSS/productos.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ItemProd = ({ producto }) => {
    return (
        <>
            <div className='contenedroCards'>
                <Card className='cardProducto'>
                    <div className='card'>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body id='infoDatosProducto'>
                            <Card.Title id='nombre'><h6>{producto.nombre}</h6></Card.Title>
                            <Card.Text id='descripcion'>{producto.descripcion}</Card.Text>
                            <div className='datosProducto'>
                                <Card.Text id='precio'>Precio: {producto.precio}$</Card.Text>
                                <Card.Text id='stock'>Stock: {producto.stock}</Card.Text>
                            </div>
                            <div className='buttonProducto'>
                                <Link to={`/item/${producto.id}`}><Button variant="primary" id="informacion">Mas informacion</Button></Link>
                            </div>
                        </Card.Body>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default ItemProd