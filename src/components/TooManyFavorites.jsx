import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import CharacterCard from "./CharacterCard";

function TooManyFavorites({ onClose }) {
  const myOutletContextObj = useOutletContext();
    const { favorites } = myOutletContextObj;

  // console.log(favorites)

  return (
    <Modal show={true} onHide={onClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Too Many Favorites</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You can only have 4 favorites at a time. Choose a Character to unfavorite.</p>
        <div>
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
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TooManyFavorites;
