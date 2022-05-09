import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../index.css";
import RecipeInstructionsContext from '../../store/Instructions-context';
import { useContext } from 'react';

function RecipeCards(props) {
    const navigate = useNavigate();
    const magma = useContext(RecipeInstructionsContext);

    function addNewRecipeInstructions(egg) {
        magma.addNewRecipeInstructions(egg);
        console.log(egg);
    }

    function goToRecipePage(props) {
        console.log(props);
        navigate('/recipe');
    }

    return (
        <Container fluid >
            <Col id = "card" className = "topBorders">
                <h1 className = "center">
                    {props.label} 
                </h1>
            </Col>

            <Col lg = {4} id = "card">
                <Link to = '/recipe' onClick = {() => addNewRecipeInstructions(props.uri)}>
                    <img src = {props.image} id = "image-position"/>
                </Link>
            </Col>
                
            <Col lg = {4} id = "card" className = "bottomBorders">
                <ul className = "noBullet">
                    <li>
                        {Math.round(props.cal)} calories
                    </li>
                    
                    {props.cuisine.map((type) => {
                        return (
                            <li>
                                {type} cuisine
                            </li>
                        )
                    })}

                    <li>
                        {props.prepTime} minutes
                    </li>
                </ul>
            </Col>
        </Container>
    )
}

export default RecipeCards;