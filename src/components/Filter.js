import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import menuIcon from '../assets/menu.png';
import Sidebar from './Sidebar';
import Forest from '../assets/Forest_Background.jpeg';
import {useState} from 'react';
import { Row, Container, Navbar } from 'react-bootstrap';
function Filter(){
    const [SBIsOpen, setSBIsOpen] = useState(false);

    function opener() {
        setSBIsOpen(!SBIsOpen);
     }
     return (
        <Container>
            <Row>
                {SBIsOpen ? 
                (<Button id = 'MenuButton' variant = 'outline-primrary' onClick = {opener}>
                    <img id = 'menuIcon' src = {menuIcon}/>
                </Button>) : 
                <Sidebar onClick = {opener}/>
                }
            </Row>
           
        </Container>
     )
}

export default Filter;