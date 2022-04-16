import '../index.css'
import logoTemp from '../assets/HENRY-logos_transparent.png';
import menuIcon from '../assets/menu.png';
import Sidebar from './Sidebar'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';
function Header(){
    return(
      <div>
        <div className = 'header'>
          <img className = 'logo' src={logoTemp}/>
          <h1 id = 'centerplease'>HENRY</h1>
        </div>

        <div>
          <Button variant = 'outline-primrary'>
            <img id = 'menuIcon' src = {menuIcon}/>
          </Button>
        </div>
      </div>
    )
};

export default Header;
