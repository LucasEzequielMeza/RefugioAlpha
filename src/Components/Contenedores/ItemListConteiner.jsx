import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../Componentes/ItemList'
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {
    const [ruta, setRuta] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()


    let rutaJSON;
    switch (categoria) {
        case "razaChicos":
            rutaJSON = ('../Data/perros.json')
            break;
        case "razaMedianos":
            rutaJSON = ('../Data/perros.json')
            break;
        case "razaGrandes":
            rutaJSON = ('../Data/perros.json')
            break;
        case "alimentos":
            rutaJSON = ('../Data/productos.json')
            break;
        case "juguetesDental":
            rutaJSON = ('../Data/productos.json')
            break;
        case "juguetesSoga":
            rutaJSON = ('../Data/productos.json')
            break;
        case "juguetesInteractivo":
            rutaJSON = ('../Data/productos.json')
            break;
        case "juguetesPelota":
            rutaJSON = ('../Data/productos.json')
            break;
        default:
            rutaJSON = ('../Data/perros.json')
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
            {loading ? <p>Loading...</p> : <ItemList JSONaMapear={ruta} JSONrecibido={rutaJSON} />}

        </div>
    )
}

export default ItemListConteiner