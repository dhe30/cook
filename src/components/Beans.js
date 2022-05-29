import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import QueryContext from '../store/Beans-context';
import { Row, Col } from 'react-bootstrap';
import Lava from "./Lava";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CheckboxList from './CheckboxList.js';
import { checkboxes } from "./Sidebar";

let nextLink = "";
let currentLink = "";

function setCurrentLink() {
    currentLink = nextLink;
}

function Beans() {
    const [recipes, setRecipes] = useState({loading: false, repos: null,});
    const beansContext = useContext(QueryContext);
    const ID = '8fbbf14f';
    const KEY = 'fc7f0f3e2b9c5a2f4d86aeb03030de5d'
    const location = useLocation();
    const allCheckboxes = checkboxes;
    const typed = beansContext.query; 
    console.log(allCheckboxes); // indices 3, 4, 5 for some reason: 3 = cuisine, 4 = dietary restriction, 5 = allergy/health

    console.log("THIS IS THE CURRENT LINK!!!" + currentLink);
    let APIFetchURL = "";
    if(currentLink === "") {
        APIFetchURL = `https://api.edamam.com/api/recipes/v2?type=public&q=${beansContext.query}&app_id=${ID}&app_key=${KEY}`;

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

        currentLink = APIFetchURL;
    }
    
    let [resultCount, setResultCount] = useState();
    let [nextPageLink, setNextPageLink] = useState();
    
    useEffect(() => {
        setRecipes({loading: true});
        fetch(currentLink)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setResultCount(data.count);
                if (data.to !== data.count) {
                    setNextPageLink(data._links.next.href);
                }
                setRecipes({loading: false, repos: data.hits});
            });
    }, [setRecipes]);
    
    nextLink = nextPageLink;

    if (resultCount === 10000) {
        resultCount = "10000+";
    }

    if (recipes.repos === undefined || recipes.repos === null){
        return (
            <Container>
            <Row>
                <h1>Please wait while we get your results</h1>
            </Row>
            </Container>
        );
    } 

    return(
        <Container className="lovely">
            <Row className="Results">
                <h1>
                    {resultCount} results for '{typed}'
                </h1>
            </Row>
            <Row>
                <Lava recipes = {recipes.repos}/>
                
            </Row>
        </Container>

    )
}

export default Beans;
export {nextLink, currentLink};
export {setCurrentLink};