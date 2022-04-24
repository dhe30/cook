import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import QueryContext from '../store/Beans-context';
import { Row, Col } from 'react-bootstrap';
import Lava from "./Lava";

function Beans() {
    const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
    const [recipes, setRecipes] = useState({loading: false, repos: null,});
=======
    const [recipes, setRecipes] = useState({
        someName: [],
        isLoading: false
    });
>>>>>>> fa953d3ab7ae368a9f37946d640b13df33d2bc08
    const beansContext = useContext(QueryContext);
    const ID = '8fbbf14f';
    const KEY = 'fc7f0f3e2b9c5a2f4d86aeb03030de5d'
    useEffect(() => {
<<<<<<< HEAD
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
    console.log(recipes.repos),
        <Container>
            <Row>
                <Lava recipes = {recipes.repos}/>
                
=======
        setRecipes({isLoading: true})
        fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${beansContext.query}&app_id=${ID}&app_key=${KEY}`)
        .then((response) => response.json())
        .then((data) => {
            setIsLoading(false);
            setRecipes({someName : {data},
                        isLoading : false});
            console.log(beansContext.query);
            console.log(recipes.someName);
            });
    }, [setRecipes]);
    return(
        <Container>
            <Row>
                
               
>>>>>>> fa953d3ab7ae368a9f37946d640b13df33d2bc08
            </Row>
        </Container>
        
    )
}

export default Beans;