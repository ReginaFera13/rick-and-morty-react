import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CharacterCard.css'

function CharacterCard({id, image, name, species, gender}) {
    const navigate = useNavigate();
    const { addToFavorites, removeFromFavorites, checkIsFavorite } = useOutletContext();
    const routeToCharacter = `/character/${id}/`

    const goToCharacter = () => {
        navigate(routeToCharacter)
    }

    const isFavorite = checkIsFavorite(id)

    const handleAddToFavorites = () => {
        addToFavorites ({
            id, 
            image, 
            name, 
            species, 
            gender
        });
    };

    const renderButton = () => {
        if (isFavorite) {
            return <Button onClick={() => removeFromFavorites(id)} variant="warning">Unfavorite</Button>
        } else {
            return <Button onClick={handleAddToFavorites} variant="warning">Favorite</Button>
        }
    }

    return (
      <>
        <Card bg='myColor' className='characterCard' style={{width: '18rem'}}>
           <Card.Img variant='top' src={image} rounded />
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
                        {renderButton()}
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