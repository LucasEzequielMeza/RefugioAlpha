import React from 'react'
import './../../CSS/nosotros&contacto.css'

const Nosotros = () => {
  return (
    <div className='container'>
      <img className='imgNosotros' src='./img/RefugioAnimales.jpg' alt='imagen nosotros' />
      <div className='infoNosotros'>
        <h2 className='tituloInfoNosotros'>Refugio Alpha</h2>
        <div className='textoInfoNosotros'>
          <p >Somos una organizacion dedicada a resguardar perritos abandonados, maltratados o en situacion de calle. Nuestro compromiso es asegurarnos  que estas almas hermosas consigan un hogar donde le brinden mucho amor y cariño.</p>
        </div>
        <div className='listaInfoNosotros'>
          <p >Nuestros servicios son:</p>
          <ul>
            <li>Rescate de animales</li>
            <li>Atencion veterinaria</li>
            <li>Alimentacion</li>
            <li>Refugio transitorio</li>
            <li>Conseguirles un nuevo hogar</li>
          </ul>
        </div>
        <p>Si quieren colaborar con nuestra causa, tenemos productos en venta, cuales ganancias son destinadas al mantenimiento del refugio</p>
      </div>
    </div>
  )
}

export default Nosotros