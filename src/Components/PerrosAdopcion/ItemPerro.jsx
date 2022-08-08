import React from 'react'
import { Link } from 'react-router-dom'
const ItemPerro = ({ perro }) => {
    return (
        <div>
            <div className="card cardStyle cardPerros" >
                <img className='cardImg' src={perro.img} alt="" />
                <div id='cardBody'>
                    <h5 className="card-title" id='nombre'>{perro.nombre}</h5>
                    <p className="card-text" id='descripcion'> {perro.descripcion}</p>
                    <p className="card-text" id='descripcion'> {perro.raza}</p>
                </div>
                <Link to={`/item/${perro.id}`}><button id='informacion'>Informacion</button></Link>
            </div>
        </div>
    )
}

export default ItemPerro