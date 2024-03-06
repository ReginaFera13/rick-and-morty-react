import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import './NavBar.css'

function NavBar() {
  return (
    <Navbar bg="myColor" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <Image
              alt=""
              src="src/assets/rick-icon.jpeg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              roundedCircle
            />{' '}
            Rick and Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/characters">Characters</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;