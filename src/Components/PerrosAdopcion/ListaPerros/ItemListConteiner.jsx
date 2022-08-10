import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';

const ItemListConteiner = () => {
    const [ruta, setRuta] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()


    let doc;
    switch (categoria) {
        case "razaChicos":
            doc = ('../Data/perros.json')
            break;
        case "razaMedianos":
            doc = ('../Data/perros.json')
            break;
        case "razaGrandes":
            doc = ('../Data/perros.json')
            break;
        case "alimentos":
            doc = ('../Data/productos.json')
            break;
        case "juguetesDental":
            doc = ('../Data/productos.json')
            break;
        case "juguetesSoga":
            doc = ('../Data/productos.json')
            break;
        case "juguetesInteractivo":
            doc = ('../Data/productos.json')
            break;
        case "juguetesPelota":
            doc = ('../Data/productos.json')
            break;
        case "/":
            doc = ('../Data/productos.json')
            break;
        default:
            doc = ('../Data/perros.json')
            break;
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(doc)
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
            {loading ? <p>Loading...</p> : <ItemList item={ruta} />}
        </div>
    )
}

export default ItemListConteiner