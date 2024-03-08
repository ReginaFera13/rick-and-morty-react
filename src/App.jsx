import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToFavorites = (character) => {
    if (favorites.length < 4) {
      const updatedFavorites = [...favorites, character];
      setFavorites(updatedFavorites);
    } else {
      setShowModal(true); // Show the modal if favorites exceed 4
      // console.log(favorites)
    }
  };

  const removeFromFavorites = (characterID) => {
    const updatedFavorites = favorites.filter(c => c.id !== characterID);
    setFavorites(updatedFavorites);
  };

  const checkIsFavorite = (id) => favorites.some(c => c.id === id);

  return (
    <>
      <NavBar />
      <Outlet 
        context={{
          favorites,
          addToFavorites,
          removeFromFavorites,
          checkIsFavorite,
          setShowModal,
          showModal
        }}
      />
    </>
  );
}

export default App;
