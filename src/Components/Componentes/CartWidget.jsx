import React, { useContext } from 'react'
import { MdShoppingCart } from "react-icons/md";
import styled from 'styled-components';
import { CartContext } from '../Context/CartContext';


const StyledCount = styled.h5`
  color: white;
  padding-top: 4px;
  margin-left: 4px;
`

const CartWidget = () => {

    const compartirValores = useContext(CartContext)
    console.log(compartirValores)
    return (
        <div>
            <MdShoppingCart />
            <StyledCount>{compartirValores.cantidadEnCarrito}</StyledCount>
        </div>
    )
}

export default CartWidget