import { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";
import RecipeInstructionsContext from '../store/Instructions-context';
import { Row, Col } from 'react-bootstrap';

function Instructions() {
    const magma = useContext(RecipeInstructionsContext);
    const [recipes, setRecipes] = useState({loading: false, repos: null,});

    useEffect(() => {
        setRecipes({loading: true});
        fetch(`${magma.recipeInstructions}`)
            .then((res) => res.json())
            .then((data) => {
                setRecipes({loading: false, repos: data});
                console.log(data);
            });
    }, [setRecipes]);

    return (
        <Container/>
    );
}

export default Instructions;