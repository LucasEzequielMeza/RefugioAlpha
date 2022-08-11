import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailProductos from '../../ContenedorProductos/DetalleProducto/ItemDetailProductos'
import ItemDetail from './ItemDetail'
const ItemDetailsConteiner = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState([])
    const [perro, setPerro] = useState([])

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
            <div>
                {id.includes('p') ? <ItemDetail itemPerro={perro} /> : <ItemDetailProductos item={producto} />}
            </div>
        </div>
    )
}

export default ItemDetailsConteiner