import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailPerros from '../../PerrosAdopcion/ItemDetailPerros'
import ItemDetail from './ItemDetail'
const ItemDetailsConteiner = () => {
    const [producto, setProducto] = useState([])
    const [perro, setPerro] = useState([])
    const { id } = useParams()

    const mostrarUnProducto = (id) => {
        fetch('../Data/productos.json')
            .then((respuesta) => respuesta.json())
            .then((data) => setProducto(data.find((producto) => producto.id === id))
            );
    }
    const mostrarUnPerro = (id) => {
        fetch('../Data/perros.json')
            .then((respuesta) => respuesta.json())
            .then((data) => setPerro(data.find((perro) => perro.id === id))
            );
    }

    useEffect(() => {
        setTimeout(() => {
            mostrarUnProducto(id)
            mostrarUnPerro(id)
        }, 1000)
    }, [id])

    return (
        <div>
            {producto.length !== 0 ? <ItemDetail item={producto} /> : <h2>Loading...</h2>}
            {/* {perro.length !== 0 ? <ItemDetailPerros itemPerro={perro} /> : <h2>Loading...</h2>}*/}
        </div>
    )
}

export default ItemDetailsConteiner