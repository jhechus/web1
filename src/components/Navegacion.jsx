import '../index.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';

import Logo from '../images/logoo.png'

function Navegacion() {
  return (
    <>
      <Navbar className='bgnav' expand="lg">
        <Container>
        <div className="d-flex justify-content-between w-100">
          <Navbar.Brand as={Link} to='/' className='Logo'> <img src={Logo} alt="Logo" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'> Inicio </Nav.Link>
              <Nav.Link as={Link} to='/About'> Nosotros </Nav.Link>
              <NavDropdown title="Servicios" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/Muestreos_Analisis'> Muestreos &amp; Analisis Ambientales </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Seguridad_Salud'> Seguridad &amp; Salud en el trabajo </NavDropdown.Item>
                { /*<NavDropdown.Divider /> */}
                <NavDropdown.Item as={Link} to='/Recipientes_a_Presion'> Recipientes Sujetos a Presion </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/ProteccionCivil'> Proteccion Civil </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/Ambiental'> Ambiental </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/proyectosyAmbiental'> Estudios & Proyectos Ambientales </NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/ServicioMedico'> Servicio Medico </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to='/Blog'> Blog </Nav.Link>
              <Nav.Link as={Link} to='/Acreditaciones'> Acreditaciones </Nav.Link>
              <Nav.Link as={Link} to='/Contact'> Contacto </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Outlet></Outlet>
    </>
  )
}

export default Navegacion
