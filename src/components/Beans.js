import { useEffect, useState, useContext } from "react";
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

function Beans() {
    const [recipes, setRecipes] = useState({loading: false, repos: null,});
    const beansContext = useContext(QueryContext);
    const ID = '8fbbf14f';
    const KEY = 'fc7f0f3e2b9c5a2f4d86aeb03030de5d'
    const location = useLocation();
    const allCheckboxes = checkboxes; 
    console.log(allCheckboxes); // indices 3, 4, 5 for some reason: 3 = cuisine, 4 = dietary restriction, 5 = allergy/health

    let APIFetchURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${beansContext.query}&app_id=${ID}&app_key=${KEY}`;

    if (checkboxes.length > 3) {
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

    useEffect(() => {
        setRecipes({loading: true});
        fetch(APIFetchURL)
            .then((res) => res.json())
            .then((data) => {
                setRecipes({loading: false, repos: data.hits});
                
            });
    }, [setRecipes]);
    
    if (recipes.repos === undefined || recipes.repos === null){
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
        <Container className="lovely">
            <Row className="Results">
                <h1>
                    Results for '{beansContext.query}'
                </h1>
            </Row>
            <Row>
                <Lava recipes = {recipes.repos}/>
                
            </Row>
        </Container>

    )
}

export default Beans;