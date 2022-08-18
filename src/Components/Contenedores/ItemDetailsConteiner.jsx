import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailProductos from '../Componentes/ItemDetailProductos'
import ItemDetail from '../Componentes/ItemDetail'
import Loader from '../Componentes/Loader'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
const ItemDetailsConteiner = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState([])
    const [perro, setPerro] = useState([])
    const [loading, setLoading] = useState(true)

    const db = getFirestore()

    const mostrarUnProducto = (id) => {
        const productosRef = doc(db, 'productos', id)

        getDoc(productosRef)
            .then((snapshot) => {
                setProducto({ ...snapshot.data(), id: snapshot.id })
            }).catch((error) => console.log(error))

    }

    const mostrarUnPerro = (id) => {
        const perrosRef = doc(db, 'perros', id)

        getDoc(perrosRef)
            .then((snapshot) => {
                setPerro({ ...snapshot.data(), id: snapshot.id })
            }).catch((error) => console.log(error))
    }

    useEffect(() => {
        setTimeout(() => {
            mostrarUnPerro(id);

            mostrarUnProducto(id);

            setLoading(false)
        }, 2000)
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