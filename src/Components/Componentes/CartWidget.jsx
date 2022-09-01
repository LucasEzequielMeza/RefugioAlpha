import React, { useContext } from 'react'
import { MdShoppingCart } from "react-icons/md";
import styled from 'styled-components';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import './../../CSS/cartWidget.css'

const StyledCount = styled.h5`
  color: white;
  padding-top: 4px;
  margin-left: 4px;
`

const CartWidget = () => {
    const compartirValores = useContext(CartContext)
    const { cantidadEnCarrito } = compartirValores

    if (cantidadEnCarrito === 0) {
        return <></>
    }

    return (
        <div className='cart'>
            <span><Link to={'/cart'}><MdShoppingCart /></Link></span>
            <div className='cart-total'><StyledCount>{cantidadEnCarrito}</StyledCount></div>
        </div >
    )
}

export default CartWidget