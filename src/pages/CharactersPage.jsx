import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../components/CharacterCard";
import './CharacterPage.css'

function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  //https://rickandmortyapi.com/api/character

  const getCharacters = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const characterData = response.data.results;
    console.log(response)
    setCharacters(characterData)
  };

  useEffect(() => {
    getCharacters();
  }, []);

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
        </div>
      </div>
    )
  }
  
  export default CharactersPage;