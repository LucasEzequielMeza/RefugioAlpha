import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../Componentes/ItemList'
import { useParams } from 'react-router-dom';
import Loader from '../Componentes/Loader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListConteiner = () => {
    const [ruta, setRuta] = useState([])
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
            .finally(() => setLoading(false))
    }

    const mostrarPerrosCategoria = () => {
        const perrosCollection = collection(db, 'perros')
        const q = query(perrosCollection, where('categoria', '==', categoria))
        getDocs(q)
            .then((snapshot) => {
                setRuta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }).catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }

    const mostrarPerros = () => {
        const perrosCollection = collection(db, 'perros')
        getDocs(perrosCollection)
            .then((snapshot) => {
                setRuta(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }).catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }
    let card = 'perros'
    useEffect(() => {
        switch (categoria) {
            case 'razaChicos':
                mostrarPerrosCategoria();
                card = 'perros'
                break;
            case 'razaMedianos':
                mostrarPerrosCategoria();
                card = 'perros'
                break;
            case 'razaGrandes':
                mostrarPerrosCategoria();
                card = 'perros'
                break;
            case 'alimentos':
                mostrarProductosCategoria();
                card = 'productos'
                break;
            case 'juguetesDental':
                mostrarProductosCategoria();
                card = 'productos'
                break;
            case 'juguetesInteractivo':
                mostrarProductosCategoria();
                card = 'productos'
                break;
            case 'juguetesSoga':
                mostrarProductosCategoria();
                card = 'productos'
                break;
            case 'juguetesPelota':
                mostrarProductosCategoria();
                card = 'productos'
                break;
            default:
                mostrarPerros()
                break;
        }
    }, [categoria])
    console.log(card)
    return (
        <div>
            {loading === true ? <Loader /> : <ItemList JSONaMapear={ruta} card={card} />}

        </div>
    )
}

export default ItemListConteiner