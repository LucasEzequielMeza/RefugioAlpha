import React from 'react'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { GrupoInput, IconoValidacion, InputElemento, LeyendaError } from './ElementosForm';

const Input = ({ type, placeholder, name, expRegu, leyendaError, estado, cambiarEstado }) => {

    const datosComprador = (e) => {
        cambiarEstado({
            ...estado,
            campo: e.target.value
        })
    }

    const validacion = () => {
        if (expRegu) {
            if (expRegu.test(estado.campo)) {
                cambiarEstado({
                    ...estado,
                    valido: 'true'
                })
            } else {
                cambiarEstado({
                    ...estado,
                    valido: 'false'
                })
            }
        }
    }
    return (
        <div>
            <GrupoInput>
                <InputElemento
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={estado.campo}
                    onChange={datosComprador}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido} />
                <IconoValidacion
                    icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                    valido={estado.valido} />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    )
}

export default Input