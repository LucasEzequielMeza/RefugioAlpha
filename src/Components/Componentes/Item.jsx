import React from 'react'
import { Link } from 'react-router-dom'
import './../../CSS/perros.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ perro }) => {
    return (
        <div className='contenedroCards'>
            <Card className='cardPerros'>
                <Card.Img variant="top" src={perro.img} />
                <Card.Body id='infoDatosPerro'>
                    <Card.Title>{perro.nombre}</Card.Title>
                    <Card.Text>{perro.descripcion}</Card.Text>
                    <div className='datosPerros'>
                        <Card.Text className='datosRazaPerro'>Raza: {perro.raza}</Card.Text>
                        <Card.Text className='datosEdadPerro'>Edad: {perro.edad} años</Card.Text>
                    </div>
                    <div className='buttonPerro'>
                        <Link to={`/item/${perro.id}`}><Button variant="primary" id="informacionPerro">Mas informacion</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item