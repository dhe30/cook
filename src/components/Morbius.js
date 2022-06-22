import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import QueryContext from '../store/Beans-context';
import { Row, Col } from 'react-bootstrap';
import Lava from "./Lava";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CheckboxList from './CheckboxList.js';
import { checkboxes } from "./Sidebar";
import  Bars from '../assets/bar.gif';
import Header from '../components/Header';
import '../index.css'
class Morbius extends React.Component{
    constructor(props){
        super(props);
        //console.log(this.props.morb);
    }
render(){
        return(
            <div>
            <Container>
                <Row className="Results">
                    <h1>
                        Results for '{this.props.query}'
                    </h1>
                </Row>
                <Row>
                    <Lava recipes = {this.props.morb}/>
                    
                </Row>
            </Container>  
            </div>
        )   }
}

export default Morbius;