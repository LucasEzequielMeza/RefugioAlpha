import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ perro }) => {
    return (
        <div>
            <div className="card cardStyle cardPerros">
                <img className='cardImg cardImgPerros' src={perro.img} alt="" />
                <div id='cardPerros'>
                    <h5 className="card-title" id='nombrePerros'>{perro.nombre}</h5>
                    <p className="card-text" id='descripcionPerros'> {perro.descripcion}</p>
                    <p className="card-text" id='razaPerros'>Raza: {perro.raza}</p>
                    <p className="card-text" id='edadPerros'>Edad: {perro.edad}</p>
                </div>
                <Link to={`/item/${perro.id}`}><button id='informacionPerros'>Informacion</button></Link>
            </div>
        </div>
    )
}

export default Item