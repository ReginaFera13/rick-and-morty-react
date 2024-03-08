import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import TooManyFavorites from "../components/TooManyFavorites";
import './CharacterPage.css'

function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const myOutletContextObj = useOutletContext();
  const  {showModal, setShowModal } = myOutletContextObj

  //https://rickandmortyapi.com/api/character

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
    setCharacters(allCharacters)
  };

  useEffect(() => {
    getCharacters();
  }, []);

  // console.log(characters)

    return (
      <div id='charcatersPageContainer'>
        <h1>Rick and Morty Characters!</h1>
        <div id='charctersContainer'>
          {characters.map(c =>
            <CharacterCard 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              species={c.species}
              gender={c.gender}
            />
          )}
          {showModal && <TooManyFavorites onClose={() => setShowModal(false)} />}
        </div>
      </div>
    )
  }
  
  export default CharactersPage;