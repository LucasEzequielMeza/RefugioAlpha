import { createContext, useState, useEffect } from "react";
import swal from 'sweetalert'
export const CartContext = createContext([])

const ProovedorCarrito = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const localData = localStorage.getItem("carrito")
        return localData ? JSON.parse(localData) : []
    })

    const alerta = () => {
        swal({
            icon: 'error',
            title: "Lo sentimos",
            text: "No contamos con stock suficiente",
            timer: "4000"
        })
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])


    const agregarAlCarrito = (item, cantidad) => {
        item.stock--
        if (carrito.some((elemento) => elemento.id === item.id)) {
            let indexProducto = carrito.findIndex((producto) => producto.id === item.id)
            let producto = carrito[indexProducto]
            if (item.stock <= cantidad) {
                alerta()
                return
            } else {
                producto.cantidad = producto.cantidad + cantidad;
            }
            const newCarrito = [...carrito];
            newCarrito.splice(indexProducto, 1, producto);

            setCarrito([...newCarrito])
        } else {
            const producto = {
                ...item,
                cantidad: cantidad
            }
            setCarrito([...carrito, producto])
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    const eliminarCarrito = () => {
        setCarrito([])
    }

    const eliminarProductoCarrito = (id) => {
        const newCarrito = [...carrito]
        let indexProducto = newCarrito.findIndex((producto) => producto.id === id)
        newCarrito.splice(indexProducto, 1)

        setCarrito([...newCarrito])
    }

    const cantidadEnCarrito = carrito.reduce((acc, item) => acc + item.cantidad, 0)

    const totalPagar = carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0)


    const compartirValores = {
        carrito,
        cantidadEnCarrito,
        eliminarCarrito,
        agregarAlCarrito,
        eliminarProductoCarrito,
        totalPagar
    }


    return (
        <CartContext.Provider value={compartirValores}>
            {children}
        </CartContext.Provider>
    )
}



export default ProovedorCarrito