import React from 'react'
import "./../../CSS/NavBar.css"
import CartWidget from './CartWidget'
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg estilos">
                <div className="container-fluid">
                    <a class="navbar-brand" href="index.html">
                        <img src="./../../../public/IMG/Logo/AlphaIcon.jpeg" className="d-inline-block align-center logo" alt="Logo"
                            loading="lazy">
                            Refugio Alpha </img>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="perros.html">Perros</a>
                            <a className="nav-link" href='nosotros.html'>Nosotros</a>
                            <a className="nav-link" href='contacto.html'>Contacto</a>
                        </div>
                    </div>
                    <CartWidget />
                </div>
            </nav>
        </div>
    )
}

export default NavBar