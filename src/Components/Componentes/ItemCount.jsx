import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const sumarProducto = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restarProducto = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    return (
        <div className='itemCount'>
            <div className='container'>
                <button className='btn btn-success' onClick={sumarProducto}>+</button>
                <span>{contador}</span>
                <button className='btn btn-danger' onClick={restarProducto}>-</button>
            </div>
            <Link to={'/cart'}><button className='btn btn-dark' onClick={() => onAdd(contador)}>Comprar</button></Link>
        </div>
    )
}

export default ItemCount