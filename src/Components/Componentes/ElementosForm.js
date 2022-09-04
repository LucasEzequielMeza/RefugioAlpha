import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const colores = {
    borde: "#0075ff",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GrupoInput = styled.div`
position: relative;
z-index: 90;
width: 800px;
`
const GrupoTextArea = styled.div`
position: relative;
z-index: 90;
width: 800px;
`
const InputElemento = styled.input`
width: 100%;
background: #fff;
border-radius: 3px;
line-height:45px;
padding: 0 40px 0 10px;
transition: .3 ease all;
border: 3px solid transparent;

&:focus{
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163,0.4)
}

${props => props.valido === "true" && css`
border: 3px solid transparent;
`}
${props => props.valido === "false" && css`
border: 3px solid ${colores.error} ;
`}
`
const InputTextArea = styled.textarea`
width: 100%;
background: #fff;
border-radius: 3px;
line-height:45px;
padding: 0 40px 0 10px;
transition: .3 ease all;
border: 3px solid transparent;

&:focus{
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163,163,163,0.4)
}

${props => props.valido === "true" && css`
border: 3px solid transparent;
`}
${props => props.valido === "false" && css`
border: 3px solid ${colores.error} ;
`}
`

const LeyendaError = styled.p`
font - size: 12px;
margin - bottom: 0;
color: ${colores.error};
display: none;
${props => props.valido === "true" && css`
display: none;
`}
${props => props.valido === "false" && css`
display: block ;
`}

`
const IconoValidacion = styled(FontAwesomeIcon)`
position: absolute;
right: 10px;
bottom: 14px;
z - index: 100;
font - size: 16px;
opacity: 0;

${props => props.valido === "false" && css`
opacity: 1 ;
color: ${colores.error}
`}

${props => props.valido === "true" && css`
opacity: 1 ;
color: ${colores.exito}
`}

`
const ContenedorBoton = styled.div`
display: flex;
flex - direction: column;
aling - items: center;
grid - column: span 2; 
padding: 20px
margin: 10px`

const Boton = styled.button`

height: 45px;
line - height: 45px;
width: 30 %;
background: #000;
color: #fff;
font - weight: bold;
border: none;
border - radius: 3px;
cursor: pointer;
margin: 15px;
transition: .1s ease all

    &:hover{
    box - shadow: 3px 0 30px rgba(163, 163, 163, 1)
} `

const MensajeError = styled.div`
height: 45px;
line - height: 45px;
background: #f66060;
padding: 0px 15px;
border - radius: 3px;
grid - column: span 2;
p{
    margin: 0;
}
b{
    margin - left: 10px;
}
`

export { Formulario, GrupoInput, GrupoTextArea, InputTextArea, InputElemento, LeyendaError, IconoValidacion, ContenedorBoton, Boton, MensajeError }