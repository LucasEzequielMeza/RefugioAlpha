import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailProductos from '../Componentes/ItemDetailProductos'
import ItemDetail from '../Componentes/ItemDetail'
import Loader from '../Componentes/Loader'
const ItemDetailsConteiner = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState([])
    const [perro, setPerro] = useState([])
    const [loading, setLoading] = useState(true)

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

            setLoading(false)
        }, 1000)

    }, [id])

    return (
        <div>
            {loading === true ? <Loader />
                : <div>
                    {id.includes('p') ? <ItemDetail itemPerro={perro} /> : <ItemDetailProductos item={producto} />}
                </div>}
        </div>
    )
}

export default ItemDetailsConteiner