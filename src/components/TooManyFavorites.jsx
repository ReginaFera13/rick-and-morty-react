import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import './TooManyFavorites.css'

function TooManyFavorites({ onClose }) {
  const myOutletContextObj = useOutletContext();
    const { favorites } = myOutletContextObj;

  // console.log(favorites)

  return (
    <Modal className='center' show={true} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title className='bold'>Too Many Favorites!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You can only have 4 favorites at a time. Choose a Character to unfavorite.</p>
        <div className='center'>
          {favorites.map(c =>
            <CharacterCard 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              species={c.species}
              gender={c.gender}
            />
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TooManyFavorites;
