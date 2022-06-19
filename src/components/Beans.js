import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import Lava from "./Lava";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CheckboxList from './CheckboxList.js';
import  Bars from '../assets/bar.gif';
import Header from '../components/Header';
import Morbius from './Morbius';
import '../index.css'
import { checkboxes } from "./Sidebar";
import { QueryContextProvider } from '../store/Beans-context';
import QueryContext from '../store/Beans-context';
import NextPage from '../components/NextPage.js';

    const ID = '8fbbf14f';
    const KEY = 'fc7f0f3e2b9c5a2f4d86aeb03030de5d'
    
    //console.log("SUMMON CTHULU"); // indices 3, 4, 5 for some reason: 3 = cuisine, 4 = dietary restriction, 5 = allergy/health


class Beans extends React.Component{
    static contextType = QueryContext;
    constructor(props){
        super(props);
        this.state = {repos: null, nextLink : ""};
    }
    componentDidMount() {
        // console.log(JSON.parse("[[],[],[]]"));
        // console.log("SUMMON CTHULU");
        // console.log(this.context);
        // console.log(this.context.checkbox);

        let checkboxes = this.context.checkbox;
        let APIFetchURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${this.context.query}&app_id=${ID}&app_key=${KEY}`;

        if (checkboxes.length > 3) {
            //console.log();
            checkboxes.splice(0, 3);
        }
        let cuisineLength = 0;
        while (cuisineLength < checkboxes[0].length) {
            APIFetchURL += "&cuisineType=" + checkboxes[0][cuisineLength];
            cuisineLength++;
        }
    
        let dietResLength = 0;
        while (dietResLength < checkboxes[1].length) {
            APIFetchURL += "&diet=" + checkboxes[1][dietResLength];
            dietResLength++;
        }
    
        let healthLength = 0;
        while(healthLength < checkboxes[2].length) {
            APIFetchURL += "&health=" + checkboxes[2][healthLength];
            healthLength++;
        }

        fetch(APIFetchURL)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                this.setState({repos: data.hits});
                if (data._links.next.href !== null) {
                    this.setState({nextLink: data._links.next.href});
                }
            });
        }
        
        render(){
    if (this.state.repos === undefined || this.state.repos === null){
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
return(
    //console.log(this.state.repos),
    //console.log("THIS IS THE NEXT LINK: " + this.state.nextLink),
    <QueryContextProvider>
    <div>
        <Morbius morb = {this.state.repos} query = {this.props.beans}/>
        <NextPage typed = {this.props.beans} link = {this.state.nextLink}/>
    </div>
    </QueryContextProvider>
    )}}


export default Beans;