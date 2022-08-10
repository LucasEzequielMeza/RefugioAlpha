import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
<<<<<<< main:src/Components/ContenedorProductos/DetalleProducto/ItemDetailsConteiner.jsx
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

    useEffect(() => {
        setTimeout(() => {
            mostrarUnProducto(id)
        }, 1000)
    }, [id])
=======
import ItemDetailProductos from '../../ContenedorProductos/DetalleProducto/ItemDetailProductos'
import ItemDetail from './ItemDetail'
const ItemDetailsConteiner = () => {
    const [ruta, setRuta] = useState([])
    const { id } = useParams()

    let doc;
>>>>>>> local:src/Components/PerrosAdopcion/DetallePerros/ItemDetailsConteiner.jsx

    switch (id) {
        case "0":
            doc = ('../Data/productos.json')
            break;
        case "1":
            doc = ('../Data/productos.json')
            break;
        case "2":
            doc = ('../Data/productos.json')
            break;
        case "3":
            doc = ('../Data/productos.json')
            break;
        case "4":
            doc = ('../Data/productos.json')
            break;
        case "5":
            doc = ('../Data/productos.json')
            break;
        case "6":
            doc = ('../Data/productos.json')
            break;
        case "7":
            doc = ('../Data/productos.json')
            break;
        case "8":
            doc = ('../Data/productos.json')
            break;
        case "9":
            doc = ('../Data/productos.json')
            break;
        case "10":
            doc = ('../Data/productos.json')
            break;
        case "11":
            doc = ('../Data/productos.json')
            break;
        case "12":
            doc = ('../Data/productos.json')
            break;
        case "13":
            doc = ('../Data/productos.json')
            break;
        case "14":
            doc = ('../Data/productos.json')
            break;
        case "15":
            doc = ('../Data/productos.json')
            break;
        case "16":
            doc = ('../Data/productos.json')
            break;
        case "17":
            doc = ('../Data/productos.json')
            break;
        case "18":
            doc = ('../Data/perros.json')
            break;
        case "19":
            doc = ('../Data/perros.json')
            break;
        case "20":
            doc = ('../Data/perros.json')
            break;
        case "21":
            doc = ('../Data/perros.json')
            break;
        case "22":
            doc = ('../Data/perros.json')
            break;
        case "23":
            doc = ('../Data/perros.json')
            break;
        case "24":
            doc = ('../Data/perros.json')
            break;
        case "25":
            doc = ('../Data/perros.json')
            break;
        case "26":
            doc = ('../Data/perros.json')
            break;
        case "27":
            doc = ('../Data/perros.json')
            break;
        case "28":
            doc = ('../Data/perros.json')
            break;
        case "29":
            doc = ('../Data/perros.json')
            break;

        default:
            console.log("hola")
    }


    useEffect(() => {
        setTimeout(() => {
            fetch(doc)
                .then((respuesta) => respuesta.json())
                .then((respuesta) => {
                    if (id) {
                        setRuta(respuesta.find((item) => item.id === id))
                    } else {
                        setRuta(respuesta)
                    }
                })
        }, 1000)
    }, [id])

    return (
        <div>
<<<<<<< main:src/Components/ContenedorProductos/DetalleProducto/ItemDetailsConteiner.jsx
            <div>{producto.length !== 0 ? (<ItemDetail item={producto} />) : (<h1>Loading...</h1>)}</div>
=======
            <div>
                {doc === ('../Data/perros.json') ? <ItemDetail itemPerro={ruta} /> : <ItemDetailProductos item={ruta} />}
            </div>
>>>>>>> local:src/Components/PerrosAdopcion/DetallePerros/ItemDetailsConteiner.jsx
        </div>
    )
}

export default ItemDetailsConteiner