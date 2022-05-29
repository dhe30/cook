import { Container, Form, NavbarBrand } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Clock from '../../assets/clock.png';
import "../../index.css";
import styles from "./Cards.module.css";
import { useState } from "react";


function RecipeCards(props) {
    const [love, setLove] = useState("");
    const navigate = useNavigate();
    function fueted(la){
        switch(la){
            case "american":
                return "america";
            case "asian":
                return "asia";
            case "british":
                return "britain";
            case "caribbean":
                return "caribbean";
            case "central europe":
                return "centralEurope";
            case "chinese":
                return "china";
            case "eastern europe":
                return "eastEurope";
            case "french":
                return "france";
            case "indian":
                return "india";
            case "italian":
                return "italy";
            case "japanese":
                return "japan";
            case "kosher":
                return "kosher";
            case "mediterranean":
                return "mediterrania";
            case "mexican":
                return "mexico";
            case "middle eastern":
                return "middleEast";
            case "nordic":
                return "nord";
            case "south american":
                return "southAmerica";
            case "south east asian":
                return "southEastAsia";
            case "world":
                return "world";
        }
    }
    function addNewRecipeInstruction(egg) {
        console.log(egg);      
    }

    return (

            <Container fluid className={styles.peter}>
                <Row >
                    <h3 className = "center">
                        {props.label} 
                    </h3>
                </Row>

                <Row>
                    <Link to = '/recipe' state = {props.uri}>
                        <img src = {props.image} id = "image-position" onClick = {() => addNewRecipeInstruction(props.uri)}/>
                    </Link>
                </Row>
                    
                <Row>
                    <Col><div className = 'Splatter'> {Math.round(props.cal)} calories</div></Col>
                    <Col><div className = 'Splattera'><img src={Clock} className = 'fancy'/>{props.prepTime} mins </div></Col>
                    
                    
                </Row>
                <Row id = "cardica" >
                    Cuisine:
                {props.cuisine.map((type) => {

                            return (
                                
                                <Col>
                                <div id ="lover" className={fueted(type)}>
                                    {type} 
                                </div>
                                </Col>
                            )
                        })}

                </Row>
            </Container>

    )
}

export default RecipeCards;