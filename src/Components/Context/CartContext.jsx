import { createContext, useState } from "react";

const CartContext = createContext([])

const ProovedorCarrito = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const carr = () => { }

    const limpiarCarrito = () => {
        setCarrito([])
    }

    const agregarAlCarrito = (item, cantidad) => {
        setCarrito([...carrito, { ...item, cantidad }])
    }

    const removerCarrito = () => { }

    const compartirValores = {
        carrito, carr, limpiarCarrito, agregarAlCarrito, removerCarrito, cantidadEnCarrito: carrito.length
    }

    return (
        <CartContext.Provider value={compartirValores}>
            {children}
        </CartContext.Provider>
    )
}



export default ProovedorCarrito