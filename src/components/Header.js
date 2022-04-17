import '../index.css'
import logoTemp from '../assets/HENRY-logos_transparent.png';
import menuIcon from '../assets/menu.png';
import Sidebar from './Sidebar'
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.css';

import {useState} from 'react';
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
      </Container>
    )
};

export default Header;
