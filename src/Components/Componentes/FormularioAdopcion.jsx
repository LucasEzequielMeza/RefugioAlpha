import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { Formulario, ContenedorBoton, Boton, MensajeError } from './ElementosForm';
import Input from './Input'
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import './../../CSS/prueba.css'
import TextArea from './TextArea';


const FormularioAdopcion = () => {
    const db = getFirestore()
    const [ordenId, setOrdenId] = useState('')

    const exprecionesRegulares = {
        expRegNombre: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
        expRegEmail: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
        expRegComentario: /^.{1,255}$/,
        expRegNumero: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/,
        expRegDireccion: /^[a-zA-ZÀ-ÿ\s]{1,100}$/
    }
    const [nombre, setNombre] = useState({
        campo: '',
        valido: null
    })
    const [telefono, setTelefono] = useState({
        campo: '',
        valido: null
    })
    const [email, setEmail] = useState({
        campo: '',
        valido: null
    })
    const [direccion, setDireccion] = useState({
        campo: '',
        valido: null
    })
    const [comentario, setComentario] = useState({
        campo: '',
        valido: null
    })
    const [formularioValido, setFormularioValido] = useState(null)

    const enviarFormulario = (e) => {
        e.preventDefault()
        if (nombre.valido === 'true' &&
            telefono.valido === 'true' &&
            email.valido === 'true' &&
            direccion.valido === 'true' &&
            comentario.valido === 'true') {
            setFormularioValido(true)
            const coleccionAdopcion = collection(db, "adopcion")
            addDoc(coleccionAdopcion, {
                nombre: nombre.campo,
                telefono: telefono.campo,
                email: email.campo,
                direccion: direccion.campo,
                comentario: comentario.campo,
                date: serverTimestamp(),
            })
                .then((respuesta) => {
                    setOrdenId(respuesta.id)
                })
                .catch((error) => console.log(error))
        } else {
            setFormularioValido(false)
        }
    }

    return (
        <main>
            {!ordenId ?
                <Formulario className='formulario' onSubmit={enviarFormulario}>
                    <Input
                        type="text"
                        leyendaError="Este campo es obligatorio"
                        placeholder="Nombre completo"
                        name="nombre"
                        estado={nombre}
                        cambiarEstado={setNombre}
                        expRegu={exprecionesRegulares.expRegNombre}
                    />
                    <Input
                        type="number"
                        leyendaError="Este campo es obligatorio y solo acepta numeros telefonicos validos"
                        placeholder="Telefono"
                        name="telefono"
                        estado={telefono}
                        cambiarEstado={setTelefono}
                        expRegu={exprecionesRegulares.expRegNumero}
                    />
                    <Input
                        type="email"
                        leyendaError="Este campo es obligatorio y solo acepta emails validos"
                        placeholder="Email@email.com"
                        name="email"
                        estado={email}
                        cambiarEstado={setEmail}
                        expRegu={exprecionesRegulares.expRegEmail}
                    />
                    <Input
                        type="text"
                        leyendaError="Este campo es obligatorio"
                        placeholder="Direccion"
                        name="direccion"
                        estado={direccion}
                        cambiarEstado={setDireccion}
                        expRegu={exprecionesRegulares.expRegDireccion}
                    />
                    <TextArea
                        leyendaError="Este campo es obligatorio"
                        placeholder="Motivo de adopcion"
                        name="comentario"
                        estado={comentario}
                        cambiarEstado={setComentario}
                        expRegu={exprecionesRegulares.expRegComentario}
                    />
                    {formularioValido === false && <MensajeError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <b>Error:</b> Por favor rellenar todo el formulario
                        </p>
                    </MensajeError>}
                    <ContenedorBoton>
                        <Boton type='submit'>Enviar</Boton>
                    </ContenedorBoton>
                </Formulario>
                :
                <div className='mensajeExito'>
                    <p className='mensajeTitulo'>Gracias, en breve nos estaremos contactando</p>
                    <Link to={'/productos'}><button className='btn btn-dark'>Productos</button></Link>
                </div>
            }
        </main>
    )
}

export default FormularioAdopcion