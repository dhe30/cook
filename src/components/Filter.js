import '../index.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";
import menuIcon from '../assets/search-13-xxl.png';
import Sidebar from './Sidebar';
import {useState} from 'react';
import { Row, Container, Navbar, Stack } from 'react-bootstrap';
function Filter(){
    const [SBIsOpen, setSBIsOpen] = useState(true);
    const [side, setSide] = useState("sidebarpos");
    function opener() {
        setSide("");
        setSBIsOpen(!SBIsOpen);
     }
     return (
        <Container>
            <Row>
                {SBIsOpen ? 
                (<Stack gap = {3}>
                <Button id = "MenuButton"  onClick = {opener}>
                    <img id = 'menuIcon' src = {menuIcon}/>
                </Button>
                <Row id = 'explain'>
                    <p>
                    Use this to search !!
                    </p>
                </Row>
                </Stack>
                ) : 
                <div className="sidebarpos">
                <Sidebar onClick = {opener}/>
                </div>
                }
            </Row>
           
        </Container>
     )
}

export default Filter;