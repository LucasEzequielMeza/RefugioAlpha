import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {
    const [listaDeProductos, setListaDeProductos] = useState([])
    const [listaDePerros, setListaDePerros] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()

    useEffect(() => {
        setTimeout(() => {
            fetch('../Data/productos.json')
                .then((respuesta) => respuesta.json())
                .then((respuesta) => {
                    if (categoria) {
                        setListaDeProductos(respuesta.filter((producto) => producto.categoria === categoria))
                    } else {
                        setListaDeProductos(respuesta)
                    }
                })
            setLoading(false)
        }, 2000)
    }, [categoria])

    useEffect(() => {
        setTimeout(() => {
            fetch('../Data/perros.json')
                .then((respuesta) => respuesta.json())
                .then((respuesta) => {
                    if (categoria) {
                        setListaDePerros(respuesta.filter((perros) => perros.categoria === categoria))
                    } else {
                        setListaDePerros(respuesta)
                    }
                })
            setLoading(false)
        }, 2000)
    }, [categoria])




    return (
        <div>
            {loading ? <p>Loading...</p> : <ItemList listaProductos={listaDeProductos} listaDePerros={listaDePerros} />}
        </div>
    )
}

export default ItemListConteiner