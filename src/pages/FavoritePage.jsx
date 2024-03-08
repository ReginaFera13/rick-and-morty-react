import { useOutletContext } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

function FavoritePage() {
    const myOutletContextObj = useOutletContext();
    const { favorites } = myOutletContextObj;

    return (
        <div id='favoritePageContainer'>
            <h1>Favorites</h1>
            <div id='charctersContainer'>
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
        </div>

    )
  }
  
  export default FavoritePage