import React from 'react'
import "./../../CSS/NavBar.css"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from '../Componentes/CartWidget'
import Logo from './Logo'
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <>

            <Navbar className='NavBG estilos' >
                <Container className='contenedorNavbar'>
                    <div className='contenedorLogo'>
                        <Logo />
                        <Navbar.Brand as={Link} to='/'> Refugio Alpha</Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className='col-1 nav' id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="Perros en adopcion" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to='categoria/razaChicos'>Chicos</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='categoria/razaMedianos'>Medianos</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='categoria/razaGrandes'>Grandes</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Productos" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to='categoria/alimentos'>Alimentos</NavDropdown.Item>
                                    <NavDropdown title="Juguetes" id="basic-nav-dropdown">
                                        <NavDropdown.Item as={Link} to='categoria/juguetesDental'>Dental</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='categoria/juguetesSoga'>Sogas</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='categoria/juguetesInteractivo'>Interactivos</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='categoria/juguetesPelota'>Pelotas</NavDropdown.Item>
                                    </NavDropdown>
                                </NavDropdown>
                                <Nav.Link as={Link} to='/nosotros' >Nosotros</Nav.Link>
                                <Nav.Link as={Link} to='/contacto' >Contacto</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    <div>
                        <CartWidget />
                    </div>
                </Container>
            </Navbar>
            <section>
            </section>
        </>
    )
}

export default NavBar