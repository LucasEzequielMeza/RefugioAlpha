import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
const Contacto = () => {
    const { contacto } = useParams()

    useEffect(() => {

    }, [contacto])
    return (
        <div>Contacto</div>
    )
}

export default Contacto