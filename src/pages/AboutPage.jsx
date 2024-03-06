import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './AboutPage.css';

function AboutPage() {

    return (
      <div className='centerColumn'>
        <h1>About Rick and Morty!</h1>
        <Container>
          <Row className='centerRow'>
            <Col xs={8}>
              <p id='aboutText'>Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his grandson into hijinks.</p>
            </Col>
            <Col id='getSchwiftyContainer'>
              <Image id='getSchwifty' src="src/assets/get-schwifty.jpeg" alt="" rounded />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
  
  export default AboutPage