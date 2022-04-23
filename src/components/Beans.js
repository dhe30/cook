import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import QueryContext from '../store/Beans-context';
import { Row, Col } from 'react-bootstrap';

function Beans() {
    const [isLoading, setIsLoading] = useState(true);
    const [recipes, setRecipes] = useState({
        someName: [],
        isLoading: false
    });
    const beansContext = useContext(QueryContext);
    const ID = '8fbbf14f';
    const KEY = 'fc7f0f3e2b9c5a2f4d86aeb03030de5d'
    useEffect(() => {
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
                
               
            </Row>
        </Container>
        
    )
}

export default Beans;