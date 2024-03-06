import YoutubeEmbed from "../components/YoutubeEmbed.jsx";
import Image from 'react-bootstrap/Image';
import './HomePage.css'

function HomePage() {

    return (
      <div id='homeContainer'>
        <h1 id='homeTitle'>You Really Should Watch Rick and Morty!</h1>
        <YoutubeEmbed />
        <Image id='imInRick' src="src/assets/rick-im-in.jpeg" alt="" rounded />
      </div>
    )
  }
  
  export default HomePage

  // embedId="_uUcMwsR5hg?si=mFLSbCX4C5J4qvzG"
  