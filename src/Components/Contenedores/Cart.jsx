import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../Componentes/CartItem'
import { CartContext } from '../Context/CartContext';
const Cart = () => {
    const compartirValores = useContext(CartContext)
    const { carrito, cantidadEnCarrito, eliminarCarrito, eliminarProductoCarrito, totalPagar } = compartirValores
    return (
        <div className='container'>
            {carrito ? (carrito.map((producto) => {
                return (
                    <CartItem key={producto.id}
                        item={producto}
                        eliminarProductoCarrito={eliminarProductoCarrito} />)
            })) : <p>Cargando productos</p>}
            {cantidadEnCarrito ?
                (<div className='contenedor'>
                    <div className='cardPrecioFinal'>
                        <p className='precioFinal'>Total a pagar: ${totalPagar}</p>
                    </div>
                    <div className='buttons'>
                        <Link to='/productos'><button className='btn btn-primary'>Seguir Comprando</button></Link>
                        <Link to='/formulario-compra'><button className='btn btn-success'>Finalizar Compra</button></Link>
                        <button className='btn btn-dark' onClick={eliminarCarrito}>Vaciar carrito</button>
                    </div>
                    <div className='imgPago'>
                        <img src='../IMG/mediosPago.png' alt='medios de pago' />
                    </div>
                </div>)
                :
                <div>
                    <p>No hay productos en el carrito</p>
                    <Link to='/productos'><button className='btn btn-danger'>Realizar compra</button></Link>
                </div>
            }
        </div >
    )
}

export default Cart
