import '../index.css'
import logoTemp from '../assets/HENRY-logos_transparent.png';
import menuIcon from '../assets/menu.png';
import Sidebar from './Sidebar'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';

import { Row, Container, Navbar } from 'react-bootstrap';
function Header(){
    return(
      <Container>
        <Row>
        <Navbar className = 'header'>

          <img className = 'logo' src={logoTemp}/>
          <Navbar.Text>
            <Navbar.Brand>
          HENRY
            </Navbar.Brand>
          </Navbar.Text>

        </Navbar>
        </Row>
        <div>
          <Button variant = 'outline-primrary'>
            <img id = 'menuIcon' src = {menuIcon}/>
          </Button>
        </div>
      </Container>
    )
};

export default Header;
