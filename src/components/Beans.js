import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import QueryContext from '../store/Beans-context';
import { Row, Col } from 'react-bootstrap';
import Lava from "./Lava";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import CheckboxList from './CheckboxList.js';

function Beans() {
    const [recipes, setRecipes] = useState({loading: false, repos: null,});
    const beansContext = useContext(QueryContext);
    const ID = '8fbbf14f';
    const KEY = 'fc7f0f3e2b9c5a2f4d86aeb03030de5d'
    const location = useLocation();

    useEffect(() => {
        setRecipes({loading: true});
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${beansContext.query}&app_id=${ID}&app_key=${KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setRecipes({loading: false, repos: data.hits});
                
            });
    }, [setRecipes]);
    
    if (recipes.repos === undefined || recipes.repos === null){
        return (
            <Container>
            <Row>
                <h1>IS lOading..0-..</h1>
            </Row>
            </Container>
        );
    } 
return(
        <Container className="lovely">
            <Row>
                <h1>
                Back? ------ Results for '{beansContext.query}'
                </h1>
            </Row>
            <Row>
                <Lava recipes = {recipes.repos}/>
                
            </Row>
        </Container>

    )
}

export default Beans;