import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {
    const [listaDeProductos, setListaDeProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [listaDePerros, setListaDePerros] = useState([])
    const { categoria } = useParams()
    const obtenerDatosProductos = async () => {
        try {
            const respuesta = await fetch('Data/productos.json')
            const data = await respuesta.json()
            setListaDeProductos(data)
        } catch (error) {
            console.log(error)
        }
    }

    /*const obtenerDatosPerros = async () => {
        try {
            const respuesta = await fetch('DATA/perros.json')
            const data = await respuesta.json()
            setListaDePerros(data)
        } catch (error) {
            console.log(error)
        }
    }*/

    useEffect(() => {
        setTimeout(() => {
            obtenerDatosProductos()
            //obtenerDatosPerros()
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <div>
            {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaDeProductos} />}
        </div>
    )
}

export default ItemListConteiner