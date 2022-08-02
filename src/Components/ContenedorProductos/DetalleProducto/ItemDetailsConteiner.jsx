import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
const ItemDetailsConteiner = () => {
    const [producto, setProducto] = useState([])
    const { id } = useParams()

    const mostrarUnProducto = (id) => {
        fetch('../Data/productos.json')
            .then((respuesta) => respuesta.json())
            .then((data) => setProducto(data.find((producto) => producto.id === id))
            );
    }

    useEffect(() => {
        setTimeout(() => {
            mostrarUnProducto(id)
        }, 1000)
    }, [id])
    return (
        <div>
            {producto.length !== 0 ? (
                <ItemDetail item={producto} />
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export default ItemDetailsConteiner