import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './../../CSS/cartItem.css'
const Loader = () => {
    return (
        <>
            <Spinner animation="grow" variant="warning" />
        </>
    )
}

export default Loader