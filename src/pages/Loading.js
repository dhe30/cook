import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import QueryContext from '../store/Beans-context';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import  Bars from '../assets/bar.gif';
import Header from '../components/Header';
import '../index.css'

function Loading() { 
        return(
            <Container fluid className= "Loading">
             
            <Row className = "Loading2">
            <div>
                LOADING...
               
                <img  className = "LoadingBars" src={Bars}/>
                </div>
            </Row>
        </Container>
        )
    
}

export default Loading;