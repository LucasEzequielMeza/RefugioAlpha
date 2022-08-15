import React from 'react'
import { useEffect, useState } from 'react'
import ItemListProductos from '../Componentes/ItemListProductos';
import Loader from '../Componentes/Loader';
const ItemContainerProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            fetch('../Data/productos.json')
                .then((respuesta) => respuesta.json())
                .then((respuesta) => setProductos(respuesta))
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <div>
            {loading === true ? <Loader /> : <ItemListProductos productos={productos} />}
        </div>
    )
}

export default ItemContainerProductos