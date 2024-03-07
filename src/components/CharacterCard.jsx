import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CharacterCard.css'

function CharacterCard({id, image, name, species, gender}) {
    const navigate = useNavigate();
    const routeToCharacter = `/character/${id}/`

    const goToCharacter = () => {
        navigate(routeToCharacter)
    }

    return (
      <>
        <Card bg='myColor' className='characterCard' style={{width: '18rem'}}>
           <Card.Img variant='top' src={image} />
           <Card.Body>
            <Card.Title className='centerText textBolder'>{name}</Card.Title>
            <Container>
                <Row>
                    <Col className='centerText textBold'>Species:</Col>
                    <Col className='centerText'>{species}</Col>
                </Row>
                <Row>
                    <Col className='centerText textBold'>Gender:</Col>
                    <Col className='centerText'>{gender}</Col>
                </Row>
                <Row>
                    <Col className='centerButton'>
                        <Button onClick={goToCharacter} variant="warning">Details</Button>
                    </Col>
                    <Col className='centerButton'>
                        <Button variant="warning">Favorite</Button>
                    </Col>
                </Row>
            </Container>
           </Card.Body>
        </Card>
      </>
    )
  }
  
  export default CharacterCard

{/* <Button>Details</Button>
<Button>Favorite</Button> */}