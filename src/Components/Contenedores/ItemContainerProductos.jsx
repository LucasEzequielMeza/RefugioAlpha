import React from 'react'
import { useEffect, useState } from 'react'
import ItemListProductos from '../Componentes/ItemListProductos';
import Loader from '../Componentes/Loader';
import { collection, getDocs, getFirestore } from 'firebase/firestore'
const ItemContainerProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const productosCollection = collection(db, 'productos')

        getDocs(productosCollection)
            .then((snapshot) => {
                setProductos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }).catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div>
            {loading === true ? <Loader /> : <ItemListProductos productos={productos} />}
        </div>
    )
}

export default ItemContainerProductos