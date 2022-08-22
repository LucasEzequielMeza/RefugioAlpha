import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../Componentes/ItemList'
import { useParams } from 'react-router-dom';
import Loader from '../Componentes/Loader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListConteiner = () => {
    const [ruta, setRuta] = useState([])
    const [card, setCard] = useState('perros')
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()

    const db = getFirestore()

    const mostrarProductosCategoria = () => {
        const productosCollection = collection(db, 'productos')
        const q = query(productosCollection, where('categoria', '==', categoria))
        getDocs(q)
            .then((snapshot) => {
                setRuta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }).catch((error) => console.log(error))
    }


    const mostrarPerros = () => {
        const perrosCollection = collection(db, 'perros')
        if (categoria) {
            const q = query(perrosCollection, where('categoria', '==', categoria))
            getDocs(q)
                .then((snapshot) => {
                    setRuta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                }).catch((error) => console.log(error))
        } else {
            getDocs(perrosCollection)
                .then((snapshot) => {
                    setRuta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                }).catch((error) => console.log(error))
        }
    }

    const eleccionQueRenderizar = (categoria) => {
        if (categoria === 'alimentos' || categoria === 'juguetesDental' || categoria === 'juguetesPelota' || categoria === 'juguetesInteractivo' || categoria === 'juguetesSoga') {
            mostrarProductosCategoria();
            setCard('productos')
        } else if (categoria === 'razaChicos' || categoria === 'razaMedianos' || categoria === 'razaGrandes') {
            mostrarPerros()
            setCard('perros')
        } else {
            mostrarPerros();
            setCard('perros')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            eleccionQueRenderizar(categoria)
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