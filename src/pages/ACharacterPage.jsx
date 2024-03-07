import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import axios from "axios";
import './ACharacterPage.css'

function ACharacterPage() {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  const getCharacter = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    const name = response.data.name
    const image = response.data.image
    const species = response.data.species
    const gender = response.data.gender
    const origin = response.data.origin.name
    const location = response.data.location.name
    const status = response.data.status
    const characterData = [name, image, species, gender, origin, location, status]
    console.log(characterData)
    setCharacter(characterData);
  };

  useEffect(() => {
    getCharacter();
  }, []);

    return (
      <div id='characterPageContainer'>
        <div id='characterContainer'>
          <h1>{character[0]}</h1>
          <Image src={character[1]} rounded />
          <ul>
            <li><span>Species:</span> {character[2]}</li>
            <li><span>Gender:</span> {character[3]}</li>
            <li><span>Origin:</span> {character[4]}</li>
            <li><span>Location:</span> {character[5]}</li>
            <li><span>Status:</span> {character[6]}</li> 
          </ul>
        </div>
      </div>
    )
  }
  
  export default ACharacterPage;