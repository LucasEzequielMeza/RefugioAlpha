import React from 'react'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { GrupoTextArea, IconoValidacion, InputTextArea, LeyendaError } from './ElementosForm';
const TexTarea = ({ placeholder, name, expRegu, leyendaError, estado, cambiarEstado }) => {
    const datosPersonaAdoptante = (e) => {
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
            <GrupoTextArea>
                <InputTextArea
                    placeholder={placeholder}
                    name={name}
                    value={estado.campo}
                    onChange={datosPersonaAdoptante}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                />
                <IconoValidacion
                    icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
                    valido={estado.valido} />
            </GrupoTextArea>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    )
}

export default TexTarea