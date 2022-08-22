import React, { useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
const Checkout = () => {
    const [comprador, setComprador] = useState({})
    const [ordenId, setOrdenId] = useState('')
    const compartirValores = useContext(CartContext)
    const { carrito, eliminarCarrito, totalPagar } = compartirValores

    const db = getFirestore()

    const datosComprador = (evento) => {
        setComprador({
            ...comprador,
            [evento.target.nombre]: evento.target.value
        })
    }

    const finalizarCompra = (evento) => {
        evento.preventDefault()
        if (Object.values(comprador).length === 4) {
            alert('Completar todos los campos')
        } else {
            const coleccionVentas = collection(db, "ventas")
            addDoc(coleccionVentas, {
                comprador,
                items: carrito,
                total: totalPagar,
                date: serverTimestamp()
            })
                .then((respuesta) => {
                    setOrdenId(respuesta.id)
                    eliminarCarrito()
                })
                .catch((error) => console.log(error))
        }
    }
    return (
        <>
            {!ordenId ?
                <form onSubmit={finalizarCompra}>
                    <input type="text" placeholder="Nombre Completo" name="nombre" onChange={datosComprador} />
                    <input type="number" placeholder="Numero de telefono" name="telefono" onChange={datosComprador} />
                    <input type="email" placeholder='Email@email.com' name='email' onChange={datosComprador} />
                    <input type="text" placeholder="Direccion completa" name="direccion" onChange={datosComprador} />
                    <button type='submit'>Finalizar Compra</button>
                </form>
                :
                <div>
                    <h3>Gracias por su compra</h3>
                    <h4>Su numero de orden es: {ordenId}</h4>
                    <Link to={'/productos'}><button>tienda</button></Link>
                </div>}
        </>
    )
}

export default Checkout