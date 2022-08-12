import { createContext, useState } from "react";

export const CartContext = createContext([])

const ProovedorCarrito = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    // const agregarAlCarrito = (item, cantidad) => {
    //     console.log(item, cantidad)
    //     if (carrito.length === 0) {
    //         const itemAgregar = {
    //             ...item,
    //             cantidad: cantidad
    //         }

    //         //carrito.push(itemAgregar)
    //         setCarrito([itemAgregar])
    //         return
    //     }
    //     //logica de duplicados y consistente
    //     //se obtiene el index del elemento si es que esta duplicado
    //     const itemDuplicadoIndex = carrito.findIndex((itemEnElCarrito) => itemEnElCarrito.id === item.id)
    //     //si es mayor o igual a 0, el item esta duplicado en el carrito
    //     if (itemDuplicadoIndex >= 0) {
    //         //se crea un objeto con la cantidad actualizada
    //         const itemActualizado = {
    //             ...item,
    //             cantidad: carrito[itemDuplicadoIndex].cantidad + cantidad
    //         }
    //         //se crea un borrador del carrito para poder actualizar sin dañar el estado de react
    //         const carritoDraft = [...carrito]
    //         //se actualiza el borrador con el item con la cantidad actualizada
    //         carritoDraft[itemDuplicadoIndex] = itemActualizado
    //         //actualizamos el carrito con el con el borrador del carrito actualizado
    //         setCarrito(carritoDraft)
    //     } else {
    //         // el item no esta duplicado
    //         //se crea el item con la cantidad que el usuario ingreso
    //         const itemAgregar = {
    //             ...item,
    //             cantidad: cantidad
    //         }
    //         //se crea un carrito borrador para agregar el nuevo item
    //         const carritoDraft = [...carrito, itemAgregar]
    //         //se actualiza el carrito con el carritoborrador
    //         setCarrito(carritoDraft)
    //     }
    // }

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

    const compartirValores = {
        carrito,
        cantidadEnCarrito: carrito.length,
        eliminarCarrito,
        agregarAlCarrito,
        eliminarProductoCarrito
    }

    return (
        <CartContext.Provider value={compartirValores}>
            {children}
        </CartContext.Provider>
    )
}



export default ProovedorCarrito