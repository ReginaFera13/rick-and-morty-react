import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { SearchContext } from '../App';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import './NavBar.css'

function NavBar() {
  const [characters, setCharacters] = useState([]);
  const [characterLookup, setCharacterLookup] = useState([]);
  const { searchCharacter, setSearchCharacter, charcterInput, setCharacterInput } = useContext(SearchContext);

  // const formatCharacters = (chars) => {
  //   console.log(chars)
  //   for (char in chars) {
  //     console.log('char', char);
  //   }
  // }

  const getCharacters = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const pages = response.data.info.pages
    let allCharacters = []
    for (let i = 1; i <= pages; i++) {
      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${i}`);
      const characterData = response.data.results;
      // console.log(characterData)
      allCharacters = [...allCharacters, ...characterData];
    }
    setCharacters(allCharacters);
  };

  useEffect(() => {
    getCharacters();
    // formatCharacters(characters);
  }, []);

  

  // console.log(characters)

  return (
    <Navbar bg="myColor" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to='/'>
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
              <NavDropdown.Item as={Link} to='/'>Home</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/about'>About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/characters'>Characters</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/favorites'>Favorites</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Row>
            <Col xs='auto'>
              <Form.Control 
                type='text'
                placeholder='search'
                className='mr-sm-2'
              />
            </Col>
            <Col xs='auto'>
              <Button type='submit' variant="warning">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;