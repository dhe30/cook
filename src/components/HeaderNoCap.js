import '../index.css'
import logoTemp from '../assets/HENRY-logos_transparent.png';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {useNavigate } from 'react-router-dom';import 'bootstrap/dist/css/bootstrap.css';
import { QueryContextProvider } from '../store/Beans-context';
import QueryContext from '../store/Beans-context';
import {useState, useContext} from 'react';
import { Row, Container, Navbar, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function HeaderNoCap(){


    return(
      <Container>
        <Row>
        <Navbar className = 'header'>
          <Link to='/'>
          <Navbar.Text>
            <Navbar.Brand id = "anyFood">
          <span className='any'>any</span>Food
            </Navbar.Brand>
          </Navbar.Text>
          </Link>
        </Navbar>
        </Row>
      </Container>
    )
};

export default HeaderNoCap;
