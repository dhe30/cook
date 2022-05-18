import { Container, Form, NavbarBrand } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Clock from '../../assets/clock.png';
import "../../index.css";


function RecipeCards(props) {
    const navigate = useNavigate();

    function addNewRecipeInstruction(egg) {
        console.log(egg);      
    }

    function goToRecipePage(props) {
        console.log(props);
        navigate('/recipe');
    }

    return (

            <Container fluid >
                <Row id = "card" className = "topBorders">
                    <h3 className = "center">
                        {props.label} 
                    </h3>
                </Row>

                <Row lg = {4} id = "card">
                    <Link to = '/recipe' state = {props.uri}>
                        <img src = {props.image} id = "image-position" onClick = {() => addNewRecipeInstruction(props.uri)}/>
                    </Link>
                </Row>
                    
                <Row id = "card">
                    <Col><div className = 'Splatter'> {Math.round(props.cal)} calories</div></Col>
                    <Col><div className = 'Splattera'><img src={Clock} className = 'fancy'/>{props.prepTime} minutes </div></Col>
                    
                    
                </Row>
                <Row>
                {props.cuisine.map((type) => {
                            return (
                                <li>
                                    {type} 
                                </li>
                            )
                        })}

                        <li>
                            {props.prepTime} minutes
                        </li>
                </Row>
            </Container>

    )
}

export default RecipeCards;