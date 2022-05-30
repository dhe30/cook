import '../index.css';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";

import { Row, Container, Col, CarouselItem, NavbarBrand } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Pages.module.css';
import  Bars from '../assets/bar.gif';
import {metric} from '../components/Sidebar';
function ActualRecipePage() {
    const [locatron, setLocatron] = useState({address: ""});
    const [data, setData] = useState({recipe: null, label: "", ingredientsList: [], image: ""});
    const location = useLocation();
    const key = location.state.substr(location.state.lastIndexOf("_"));
    let ingr = [];
    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${key}`)
                 .then((res) => res.json())
                 .then((data) => {
                    const aids = data.self
                    setLocatron({address: data.self});
                    console.log(aids);
                    return fetch(aids);
                })
                .then((res) => res.json())
                .then((data) => {
                console.log(data);
                setData({recipe: data.recipe, label: data.recipe.label, ingredientsList: data.recipe.ingredients, image: data.recipe.image, source: data.recipe.url, sourcey: data.recipe.source});
                
            });
    },[setLocatron]);
    if (data.sourcey === null || data.sourcey === undefined){
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
    return (
        console.log(data.recipe),
        <Container fluid className={styles.lord}>
           
            <Row>
                <Header/>
                
            </Row>
            <Row className = {styles.ill} ></Row>
            <Row className = {styles.illiad}>
                <div className = {styles.colombia}>
                <Col>
                    <h1>
                        {data.label}
                    </h1>
                    </Col>
                    </div>
                    </Row>
                    <Row className = {styles.ill}></Row>
            <div className={styles.harvard}>
            <Container className={styles.stanford}>
            <Row>
                
                <Col>
                    <img src = {data.image} className = {styles.imager}/>
                     
                </Col>
                <Col className = {styles.imager}>
               Source: <a href={data.source}>{data.sourcey}</a>
                </Col>
            </Row>
            <Row>
            <Col className = {styles.ingr}>
            <Row className = {styles.cornell}><h1>Ingredients</h1></Row>
                    <ul className = {styles.cards}>
                        {data.ingredientsList.map((ingredient) => {
                            if(ingredient.image !== null){
                            ingr.push({image: ingredient.image, text: ingredient.food});}
                            let amount = ingredient.quantity;
                            amount = Math.round((amount + Number.EPSILON) * 100) / 100;
                            let measure = ingredient.measure;
                            let food = ingredient.food;
                           
                            if(measure === "<unit>" || measure === null){
                                measure ="";
                                amount ="";
                                food = ingredient.text;
                            }
                            if(metric === true){
                                if(measure === "tablespoon"){
                                    measure = "mL";
                                    amount = amount * 15;
                                }
                                if(measure === "teaspoon"){
                                    measure = "mL";
                                    amount = amount * 5;
                                }
                                if(measure === "cup"){
                                    measure = "mL";
                                    amount = amount*250;
                                }
                                if(measure === "quart"){
                                    measure = "mL";
                                    amount = amount*950;
                                }
                                if(measure === "gallon"){
                                    measure = "liter";
                                    amount = amount*3.8;
                                }
                                if(measure === "ounce"){
                                    measure = "gram";
                                    amount = amount * 28;
                                }
                                if(measure === "pound"){
                                    measure = "gram";
                                    amount = amount * 450;
                                }
                            }
                            return (
                                <li className={styles.list}>
                                    <p className={styles.gag}> {amount} {measure} &nbsp;{food}</p>
                                </li>
                            ) 
                        })}
                    </ul>
                </Col>
                <Col>
                <div id={styles.bougieer}>
                   <Carousel fade id = {styles.bougiee}>
                   {ingr.map((ingredient) => {
                       return(
                       <CarouselItem >
                           <img id = {styles.bougiee} src = {ingredient.image}/>
                           <Carousel.Caption>
                               < NavbarBrand className = {styles.three}>{ingredient.text}</NavbarBrand>
                           </Carousel.Caption>
                       </CarouselItem>)})}
                   </Carousel>
                </div>
                </Col>
                </Row>
            </Container>
            </div>
        </Container>
    )
}
export default ActualRecipePage;