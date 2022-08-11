import React, { useContext } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { CartContext } from '../Context/CartContext';

const CartWidget = () => {
    return (
        <div>
            <MdShoppingCart />
        </div>
    )
}

export default CartWidget