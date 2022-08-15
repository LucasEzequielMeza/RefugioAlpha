import { createContext, useState } from "react";

export const CartContext = createContext([])

const ProovedorCarrito = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item, cantidad) => {
        //Verificamos si el producto elegido ya esta agregado en el carrito
        if (carrito.some((elemento) => elemento.id === item.id)) {
            //Buscamos el indice del producto seleccionado
            let indexProducto = carrito.findIndex((producto) => producto.id === item.id)
            //Guardamos ese index en un nuevo producto
            let producto = carrito[indexProducto]
            //Le sumamos al producto existente la cantidad elegida
            producto.cantidad = producto.cantidad + cantidad;
            //Hacemos una copia del carrito
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
    }

    const eliminarCarrito = () => {
        //Seteamos el carrito
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
        totalPagar,
    }


    return (
        <CartContext.Provider value={compartirValores}>
            {children}
        </CartContext.Provider>
    )
}



export default ProovedorCarrito