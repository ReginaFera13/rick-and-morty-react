import Image from 'react-bootstrap/Image';
import './NotFound.css'

function NotFound() {

    return (
        <div id='errorImgContainer'>
            <Image id='errorImg' src="src/assets/rick-and-morty-404.jpeg" alt="404 Error" fluid />
        </div>

    )
  }
  
  export default NotFound