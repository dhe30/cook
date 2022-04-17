import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import menuIcon from '../assets/menu.png';
import Sidebar from './Sidebar';
import {useState} from 'react';
import { Row, Container, Navbar } from 'react-bootstrap';
function Filter(){
    const [SBIsOpen, setSBIsOpen] = useState(false);

    function opener() {
        setSBIsOpen(true);
     }
     return (
        <Container>
            <Row>
                <Button variant = 'outline-primrary' onClick = {opener}>
                    <img id = 'menuIcon' src = {menuIcon}/>
                </Button>
            </Row>
            <Row>
                {SBIsOpen && <Sidebar/>}
            </Row>
        </Container>
     )
}

export default Filter;