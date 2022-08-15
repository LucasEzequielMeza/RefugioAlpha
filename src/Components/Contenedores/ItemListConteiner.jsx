import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../Componentes/ItemList'
import { useParams } from 'react-router-dom';
import Loader from '../Componentes/Loader';

const ItemListConteiner = () => {
    const [ruta, setRuta] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()


    let rutaJSON = '../Data/perros.json'
    let card = 'perros'
    switch (categoria) {
        case "alimentos":
            rutaJSON = ('../Data/productos.json')
            card = 'productos'
            break;
        case "juguetesDental":
            rutaJSON = ('../Data/productos.json')
            card = 'productos'
            break;
        case "juguetesSoga":
            rutaJSON = ('../Data/productos.json')
            card = 'productos'
            break;
        case "juguetesInteractivo":
            rutaJSON = ('../Data/productos.json')
            card = 'productos'
            break;
        case "juguetesPelota":
            rutaJSON = ('../Data/productos.json')
            card = 'productos'
            break;
        case "productos":
            rutaJSON = ('../Data/productos.json')
            card = 'productos'
            break;
        default:
            rutaJSON = ('../Data/perros.json')
            card = 'perros'
            break;
    }
    useEffect(() => {
        setTimeout(() => {
            fetch(rutaJSON)
                .then((respuesta) => respuesta.json())
                .then((respuesta) => {
                    if (categoria) {
                        setRuta(respuesta.filter((item) => item.categoria === categoria))
                    } else {
                        setRuta(respuesta)
                    }
                })
            setLoading(false)
        }, 2000)
    }, [categoria])

    return (
        <div>
            {loading === true ? <Loader /> : <ItemList JSONaMapear={ruta} card={card} />}

        </div>
    )
}

export default ItemListConteiner